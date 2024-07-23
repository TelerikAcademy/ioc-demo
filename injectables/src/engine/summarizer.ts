import { Injectable } from "../tools/decorators/injectable";

@Injectable()
export class Summarizer {
  public sum(data: number[]): number {
    return data.reduce((acc, item) => acc + item, 0);
  }
}
