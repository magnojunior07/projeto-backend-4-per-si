import { IsNotEmpty, IsString } from "class-validator";
import { IInstructor } from "src/shared/interfaces/instructor.interface";

export class CreateInstructorDto implements IInstructor {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name must be a string" })
    name: string;

    @IsNotEmpty({ message: "password is required" })
    @IsString({ message: "password must be a string" })
    createdAt?: Date;
    updatedAt?: Date;
}
