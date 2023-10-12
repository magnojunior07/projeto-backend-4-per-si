import DatabaseService from "src/database/database.service";
import { IRating } from "src/shared/interfaces/rating.interface";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { PrismaClient } from "@prisma/client";

export default class RatingRepository {
    async create(rating: CreateRatingDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const createdRating = await prisma.ratings.create({
            data: {
                userId: rating.userId,
                courseId: rating.courseId,
                rating: rating.rating,
                feedback: rating.feedback,
            },
        });

        return createdRating;
    }

    async findAll() {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const ratings: IRating[] = await prisma.ratings.findMany({
            select: {
                id: true,
                userId: true,
                courseId: true,
                rating: true,
                feedback: true,
            },
        });

        return ratings;
    }

    async findOneById(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const rating: IRating = await prisma.ratings.findUnique({
            where: { id },
            select: {
                id: true,
                userId: true,
                courseId: true,
                rating: true,
                feedback: true,
                course: true,
                user: true,
            },
        });

        return rating;
    }

    async update(id: number, rating: UpdateRatingDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const updatedRating: IRating = await prisma.ratings.update({
            where: { id },
            data: {
                userId: rating.userId,
                courseId: rating.courseId,
                rating: rating.rating,
                feedback: rating.feedback,
                updatedAt: new Date(),
            },
        });

        return updatedRating;
    }

    async remove(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const deletedRating: IRating = await prisma.ratings.delete({
            where: { id },
        });

        return deletedRating;
    }
}
