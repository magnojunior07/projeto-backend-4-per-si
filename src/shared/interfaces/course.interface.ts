import { IInstructor } from "./instructor.interface";
import { IRating } from "./rating.interface";
import { ISubscription } from "./subscription.interface";

export interface ICourse {
    id?: number;
    name: string;
    description: string;
    instructorId: number;
    instructor?: IInstructor;
    subscriptions?: ISubscription[];
    ratings?: IRating[];
    createdAt?: Date;
    updatedAt?: Date;
}
