export class Track {
  constructor(private id: string, private name: string, private path: string) {
    this.id = id;
    this.name = name;
    this.path = path;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPath(): string {
    return this.path;
  }
}
