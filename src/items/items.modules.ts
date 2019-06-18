import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
