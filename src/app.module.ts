import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import DatabaseService from "./database/database.service";
import { InstructorModule } from "./modules/instructor/instructor.module";
import { CourseModule } from "./modules/course/course.module";
import { SubscriptionModule } from "./modules/subscription/subscription.module";
import { RatingModule } from "./modules/ratings/rating.module";

@Module({
    imports: [
        DatabaseService,
        UserModule,
        InstructorModule,
        CourseModule,
        SubscriptionModule,
        RatingModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
