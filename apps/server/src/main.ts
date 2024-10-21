import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcService } from './trpc/trpc.service';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const trpcService = await app.resolve(TrpcService);
  trpcService.applyMiddleware(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
