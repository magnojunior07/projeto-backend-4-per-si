import DatabaseService from "src/database/database.service";
import { ICourse } from "src/shared/interfaces/course.interface";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";
import { PrismaClient } from "@prisma/client";

export default class CourseRepository {
    async create(course: CreateCourseDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const createdCourse = await prisma.course.create({
            data: {
                name: course.name,
                description: course.description,
                instructorId: course.instructorId,
            },
        });

        return createdCourse;
    }

    async findAll() {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const courses: ICourse[] = await prisma.course.findMany({
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
        const prisma: PrismaClient = DatabaseService.getInstance();
        const course: ICourse = await prisma.course.findUnique({
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
        const prisma: PrismaClient = DatabaseService.getInstance();
        const updatedCourse: ICourse = await prisma.course.update({
            where: { id },
            data: {
                name: course.name,
                description: course.description,
                instructorId: course.instructorId,
                updatedAt: new Date(),
            },
        });

        return updatedCourse;
    }

    async remove(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const deletedCourse: ICourse = await prisma.course.delete({
            where: { id },
        });

        return deletedCourse;
    }
}
