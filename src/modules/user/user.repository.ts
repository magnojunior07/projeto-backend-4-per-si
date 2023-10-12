import DatabaseService from "src/database/database.service";
import { IUser } from "src/shared/interfaces/user.interface";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    async create(user: CreateUserDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const createdUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        return createdUser;
    }

    async findAll() {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const users: IUser[] = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                subscriptions: true,
                ratings: true,
            },
        });

        return users;
    }

    async findOneById(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const user: IUser = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                subscriptions: {
                    select: {
                        id: true,
                        userId: true,
                        courseId: true,
                        course: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                instructor: true,
                                instructorId: true,
                                subscriptions: true,
                                ratings: true,
                            },
                        },
                    },
                },
                ratings: {
                    select: {
                        id: true,
                        userId: true,
                        courseId: true,
                        rating: true,
                        feedback: true,
                        course: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                instructor: true,
                                instructorId: true,
                                subscriptions: true,
                                ratings: true,
                            },
                        },
                    },
                },
            },
        });

        return user;
    }

    async findOneByEmail(email: string) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const user: IUser = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            },
        });

        return user;
    }

    async update(id: number, user: UpdateUserDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const updatedUser: IUser = await prisma.user.update({
            where: { id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                updatedAt: new Date(),
            },
        });

        return updatedUser;
    }

    async remove(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const deletedUser: IUser = await prisma.user.delete({
            where: { id },
        });

        return deletedUser;
    }
}
