import DatabaseService from "src/database/database.service";
import { IRating } from "src/shared/interfaces/rating.interface";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import { CreateRatingDto } from "./dto/create-rating.dto";

export default class RatingRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(rating: CreateRatingDto) {
        const createdRating = await this.databaseService.ratings.create({
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
        const ratings: IRating[] = await this.databaseService.ratings.findMany({
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
        const rating: IRating = await this.databaseService.ratings.findUnique({
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
        const updatedRating: IRating =
            await this.databaseService.ratings.update({
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
        const deletedRating: IRating =
            await this.databaseService.ratings.delete({
                where: { id },
            });

        return deletedRating;
    }
}
