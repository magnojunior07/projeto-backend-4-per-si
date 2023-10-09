import { ISubscription } from "./subscription.interface";

export interface IUser {
    id?: number;
    name: string;
    email: string;
    password?: string;
    subscriptions?: ISubscription[];
    createdAt?: Date;
    updatedAt?: Date;
}
