import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DatabseController } from './databse/databse.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, DatabseController],
  providers: [AppService],
})
export class AppModule {}
