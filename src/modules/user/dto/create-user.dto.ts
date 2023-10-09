import { IsNotEmpty, IsString } from "class-validator";
import { IUser } from "src/shared/interfaces/user.interface";

export class CreateUserDto implements IUser {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name must be a string" })
    name: string;

    @IsNotEmpty({ message: "email is required" })
    @IsString({ message: "email must be a string" })
    email: string;

    @IsNotEmpty({ message: "password is required" })
    @IsString({ message: "password must be a string" })
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
