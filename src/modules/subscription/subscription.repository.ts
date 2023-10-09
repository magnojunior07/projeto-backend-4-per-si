import DatabaseService from "src/database/database.service";
import { ISubscription } from "src/shared/interfaces/subscription.interface";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";

export default class SubscriptionRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(subscription: CreateSubscriptionDto) {
        const createdSubscription =
            await this.databaseService.subscription.create({
                data: {
                    userId: subscription.userId,
                    courseId: subscription.courseId,
                },
            });

        return createdSubscription;
    }

    async findAll() {
        const subscriptions: ISubscription[] =
            await this.databaseService.subscription.findMany({
                select: {
                    id: true,
                    userId: true,
                    courseId: true,
                    user: true,
                    course: true,
                },
            });

        return subscriptions;
    }

    async findOneById(id: number) {
        const subscription: ISubscription =
            await this.databaseService.subscription.findUnique({
                where: { id },
                select: {
                    id: true,
                    userId: true,
                    courseId: true,
                    user: true,
                    course: true,
                },
            });

        return subscription;
    }

    async update(id: number, subscription: UpdateSubscriptionDto) {
        const updatedSubscription: ISubscription =
            await this.databaseService.subscription.update({
                where: { id },
                data: {
                    userId: subscription.userId,
                    courseId: subscription.courseId,
                    updatedAt: new Date(),
                },
            });

        return updatedSubscription;
    }

    async remove(id: number) {
        const deletedSubscription: ISubscription =
            await this.databaseService.subscription.delete({
                where: { id },
            });

        return deletedSubscription;
    }
}
