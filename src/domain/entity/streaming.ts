import { createReadStream } from "fs";
import { PassThrough } from "stream";
import Throttle from "throttle";
import { Playlist } from "./playlist";

export class Streaming {
  passThrough: NodeJS.ReadWriteStream;
  constructor(private playlist: Playlist, private bitrate: number = 320) {
    this.passThrough = new PassThrough();
  }

  public play() {
    const currentTrack = this.playlist.getCurrentTrack();

    if (!currentTrack) {
      console.log("No track is playing.");
      throw new Error("No track is playing.");
    }

    console.log(`Playing ${currentTrack.getName()}`);

    const stream = createReadStream(currentTrack.getPath());

    const throttleStream = new Throttle((this.bitrate * 1000) / 8);

    stream.pipe(throttleStream);

    throttleStream.on("end", () => {
      console.log("Song ended, starting next song");
      this.playlist.nextTrack();
      this.play();
    });

    throttleStream.on("data", (chunk) => {
      this.passThrough.write(chunk);
    });

    throttleStream.on("error", (error) => {
      console.error("An error occurred while streaming the song", error);
    });
  }
}
