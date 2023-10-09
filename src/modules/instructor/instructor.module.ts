import { Module } from "@nestjs/common";
import { InstructorService } from "./instructor.service";
import { InstructorController } from "./instructor.controller";
import InstructorRepository from "./instructor.repository";

@Module({
    controllers: [InstructorController],
    providers: [InstructorService, InstructorRepository],
    exports: [InstructorService, InstructorRepository],
})
export class InstructorModule {}
