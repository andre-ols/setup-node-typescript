import { createReadStream } from "fs";
import Throttle from "throttle";
import { Playlist } from "./playlist";

export class Streaming {
  private throttleStream: Throttle;
  constructor(private playlist: Playlist, private bitrate: number = 320) {
    this.throttleStream = new Throttle(this.bitrate);
  }

  public play(): Throttle {
    const currentTrack = this.playlist.getCurrentTrack();

    if (!currentTrack) {
      console.log("No track is playing.");
      throw new Error("No track is playing.");
    }

    console.log(`Playing ${currentTrack.getName()}`);

    const stream = createReadStream(currentTrack.getPath());

    stream.pipe(this.throttleStream);

    this.throttleStream.on("end", () => {
      console.log("Song ended, starting next song");
      this.playlist.nextTrack();
      this.play();
    });

    this.throttleStream.on("error", (error) => {
      console.error("An error occurred while streaming the song", error);
    });

    return this.throttleStream;
  }
}
