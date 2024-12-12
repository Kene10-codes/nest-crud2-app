import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthMiddlewareMiddleware } from './middleware/auth-middleware/auth-middleware.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { profileSchema } from './schema/user.schema';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{name: "Profile", schema: profileSchema}])]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddlewareMiddleware).forRoutes("users")
  }
}
