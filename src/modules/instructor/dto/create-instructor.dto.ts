import { IsNotEmpty, IsString } from "class-validator";
import { IInstructor } from "src/shared/interfaces/instructor.interface";

export class CreateInstructorDto implements IInstructor {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name must be a string" })
    name: string;

    createdAt?: Date;
    updatedAt?: Date;
}
