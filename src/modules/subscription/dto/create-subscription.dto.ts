import { IsNotEmpty } from "class-validator";
import { ISubscription } from "src/shared/interfaces/subscription.interface";

export class CreateSubscriptionDto implements ISubscription {
    @IsNotEmpty({ message: "userId is required" })
    userId: number;

    @IsNotEmpty({ message: "courseId is required" })
    courseId: number;

    createdAt?: Date;
    updatedAt?: Date;
}
