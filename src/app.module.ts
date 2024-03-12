import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { LoggerMiddleware } from './logger.middleware';
@Module({
  imports: [ StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: import("@nestjs/common").MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('students');
  }
}
