import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: process.env.BROKERHOST || 'localhost',
          port: process.env.BROKERPORT
            ? Number.parseInt(process.env.BROKERPORT)
            : 6379,
        },
      },
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: process.env.BROKERHOST || 'localhost',
          port: process.env.BROKERPORT
            ? Number.parseInt(process.env.BROKERPORT)
            : 6379,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
