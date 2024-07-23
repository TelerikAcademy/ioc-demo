import { Injectable } from "../tools/decorators/injectable";
import { Runner } from "./runner";

@Injectable()
export class Engine {
  constructor(private readonly runner: Runner) {}

  public main(): void {
    console.log(this.runner.run());
  }
}
