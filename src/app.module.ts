import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import DatabaseService from "./database/database.service";
import { InstructorModule } from "./modules/instructor/instructor.module";
import { CourseModule } from "./modules/course/course.module";

@Module({
    imports: [DatabaseService, UserModule, InstructorModule, CourseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
