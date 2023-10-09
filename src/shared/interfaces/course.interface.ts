import { ISubscription } from "./subscription.interface";

export interface ICourse {
    id?: number;
    name: string;
    description: string;
    instructorId: number;
    subscriptions: ISubscription[];
    createdAt?: Date;
    updatedAt?: Date;
}
