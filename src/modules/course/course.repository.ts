import DatabaseService from "src/database/database.service";
import { ICourse } from "src/shared/interfaces/course.interface";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";

export default class CourseRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(course: CreateCourseDto) {
        const createdCourse = await this.databaseService.course.create({
            data: {
                name: course.name,
                description: course.description,
                instructorId: course.instructorId,
            },
        });

        return createdCourse;
    }

    async findAll() {
        const courses: ICourse[] = await this.databaseService.course.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                instructor: true,
                instructorId: true,
                subscriptions: true,
                ratings: true,
            },
        });

        return courses;
    }

    async findOneById(id: number) {
        const course: ICourse = await this.databaseService.course.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                description: true,
                instructor: true,
                instructorId: true,
                subscriptions: true,
                ratings: true,
            },
        });

        return course;
    }

    async update(id: number, course: UpdateCourseDto) {
        const updatedCourse: ICourse = await this.databaseService.course.update(
            {
                where: { id },
                data: {
                    name: course.name,
                    description: course.description,
                    instructorId: course.instructorId,
                    updatedAt: new Date(),
                },
            },
        );

        return updatedCourse;
    }

    async remove(id: number) {
        const deletedCourse: ICourse = await this.databaseService.course.delete(
            {
                where: { id },
            },
        );

        return deletedCourse;
    }
}
