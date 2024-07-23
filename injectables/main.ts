// #!/usr/bin/env node
import 'reflect-metadata';
import { Injector } from './src/tools/ioc/injector';
import { Engine } from './src/engine/engine';
import { Runner } from './src/engine/runner';

function bootstrap() {
  const injector = new Injector();
  const app = injector.resolve(Engine);

  // for debugging
  // console.log(Reflect.getMetadata('design:paramtypes', Runner));

  app.main();
}

bootstrap();
