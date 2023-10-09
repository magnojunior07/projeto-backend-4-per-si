import { IsNotEmpty, IsString } from "class-validator";
import { ICourse } from "src/shared/interfaces/course.interface";

export class CreateCourseDto implements ICourse {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name must be a string" })
    name: string;

    @IsNotEmpty({ message: "description is required" })
    @IsString({ message: "description must be a string" })
    description: string;

    @IsNotEmpty({ message: "instructorId is required" })
    instructorId: number;

    createdAt?: Date;
    updatedAt?: Date;
}
