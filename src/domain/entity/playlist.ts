export class Playlist {
  private tracks: Track[] = [];
  private _loop: boolean = false;
  constructor(private id: string, private name: string, tracks?: Track[]) {
    this.id = id;
    this.name = name;
    this.tracks = tracks || [];
  }

  public addTrack(track: Track): void {
    this.tracks.push(track);
  }

  public removeTrack(trackId: string): void {
    this.tracks = this.tracks.filter((track) => track.getId() !== trackId);
  }

  public getCurrentTrack(): Track {
    return this.tracks[0];
  }

  public loop(value: boolean): void {
    this._loop = value;
  }

  public getNextTrack(): Track {
    return this.tracks[1];
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
