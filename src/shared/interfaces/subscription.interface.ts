import { ICourse } from "./course.interface";
import { IUser } from "./user.interface";

export interface ISubscription {
    id?: number;
    courseId: number;
    userId: number;
    user?: IUser;
    course?: ICourse;
    createdAt?: Date;
    updatedAt?: Date;
}
