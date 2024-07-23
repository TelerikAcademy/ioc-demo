import { Injectable } from "../tools/decorators/injectable";
import { Reader } from "./reader";
import { Splitter } from "./splitter";
import { Summarizer } from "./summarizer";

@Injectable()
export class Runner {
  constructor(
    private readonly reader: Reader,
    private readonly splitter: Splitter,
    private readonly summarizer: Summarizer
  ) {}

  public run(): number {
    const data = this.reader.read();
    const numbers = this.splitter.split(data);
    return this.summarizer.sum(numbers);
  }
}

