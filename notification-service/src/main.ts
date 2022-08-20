import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.BROKERHOST || 'localhost',
        port: process.env.BROKERPORT
          ? Number.parseInt(process.env.BROKERPORT)
          : 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
