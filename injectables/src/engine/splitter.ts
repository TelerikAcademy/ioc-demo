import { Injectable } from "../tools/decorators/injectable";

@Injectable()
export class Splitter {
  public split(data: string): number[] {
    return data.split(' ').map((item: string) => parseInt(item, 10));
  }
}
