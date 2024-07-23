import { Injectable } from "../tools/decorators/injectable";

@Injectable()
export class Reader {
  public read(): string {
    return '1 2 3 4 5';
  }
}
