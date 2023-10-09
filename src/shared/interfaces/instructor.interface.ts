import { ICourse } from "./course.interface";

export interface IInstructor {
    id?: number;
    name: string;
    courses?: ICourse[];
    createdAt?: Date;
    updatedAt?: Date;
}
