import { IsNotEmpty, IsString } from "class-validator";
import { IRating } from "src/shared/interfaces/rating.interface";

export class CreateRatingDto implements IRating {
    @IsNotEmpty({ message: "userId is required" })
    userId: number;

    @IsNotEmpty({ message: "courseId is required" })
    courseId: number;

    @IsNotEmpty({ message: "rating is required" })
    rating: number;

    @IsNotEmpty({ message: "feedback is required" })
    @IsString({ message: "feedback must be a string" })
    feedback: string;

    createdAt?: Date;
    updatedAt?: Date;
}
