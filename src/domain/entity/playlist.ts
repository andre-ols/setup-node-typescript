import { Queue } from "../../utils/queue";
import { Track } from "./track";
export class Playlist {
  private tracks: Track[] = [];
  private _loop: boolean = false;
  private queue: Queue<Track> = new Queue<Track>();
  constructor(private id: string, private name: string, tracks?: Track[]) {
    this.id = id;
    this.name = name;
    this.tracks = tracks || [];
    this.tracks.forEach((track) => this.queue.enqueue(track));
  }

  public addTrack(track: Track): void {
    this.tracks.push(track);
    this.queue.enqueue(track);
  }

  public removeTrack(trackId: string): void {
    this.tracks = this.tracks.filter((track) => track.getId() !== trackId);
    this.queue = new Queue<Track>();
    this.tracks.forEach((track) => this.queue.enqueue(track));
  }

  public loop(value: boolean): void {
    this._loop = value;
  }

  public nextTrack(): Track | undefined {
    const lastSong = this.queue.dequeue();
    if (this._loop && lastSong) {
      this.queue.enqueue(lastSong);
    }
    return this.queue.peek();
  }

  public getCurrentTrack(): Track | undefined {
    return this.queue.peek();
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getTracks(): Track[] {
    return this.tracks;
  }
}
