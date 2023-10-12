import DatabaseService from "src/database/database.service";
import { ISubscription } from "src/shared/interfaces/subscription.interface";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { PrismaClient } from "@prisma/client";

export default class SubscriptionRepository {
    async create(subscription: CreateSubscriptionDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const createdSubscription = await prisma.subscription.create({
            data: {
                userId: subscription.userId,
                courseId: subscription.courseId,
            },
        });

        return createdSubscription;
    }

    async findAll() {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const subscriptions: ISubscription[] =
            await prisma.subscription.findMany({
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
        const prisma: PrismaClient = DatabaseService.getInstance();
        const subscription: ISubscription =
            await prisma.subscription.findUnique({
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
        const prisma: PrismaClient = DatabaseService.getInstance();
        const updatedSubscription: ISubscription =
            await prisma.subscription.update({
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
        const prisma: PrismaClient = DatabaseService.getInstance();
        const deletedSubscription: ISubscription =
            await prisma.subscription.delete({
                where: { id },
            });

        return deletedSubscription;
    }
}
