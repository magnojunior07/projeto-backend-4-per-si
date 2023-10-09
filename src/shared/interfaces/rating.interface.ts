import { ICourse } from "./course.interface";
import { IUser } from "./user.interface";

export interface IRating {
    id?: number;
    rating: number;
    feedback: string;
    user?: IUser;
    course?: ICourse;
    userId: number;
    courseId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
