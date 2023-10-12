import DatabaseService from "src/database/database.service";
import { IInstructor } from "src/shared/interfaces/instructor.interface";
import { UpdateInstructorDto } from "./dto/update-instructor.dto";
import { CreateInstructorDto } from "./dto/create-instructor.dto";
import { PrismaClient } from "@prisma/client";

export default class InstructorRepository {
    async create(instructor: CreateInstructorDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const createdInstructor = await prisma.instructor.create({
            data: {
                name: instructor.name,
            },
        });

        return createdInstructor;
    }

    async findAll() {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const instructors: IInstructor[] = await prisma.instructor.findMany({
            select: {
                id: true,
                name: true,
                courses: true,
            },
        });

        return instructors;
    }

    async findOneById(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const instructor: IInstructor = await prisma.instructor.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                courses: true,
            },
        });

        return instructor;
    }

    async update(id: number, instructor: UpdateInstructorDto) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const updatedInstructor: IInstructor = await prisma.instructor.update({
            where: { id },
            data: {
                name: instructor.name,
                updatedAt: new Date(),
            },
        });

        return updatedInstructor;
    }

    async remove(id: number) {
        const prisma: PrismaClient = DatabaseService.getInstance();
        const deletedInstructor: IInstructor = await prisma.instructor.delete({
            where: { id },
        });

        return deletedInstructor;
    }
}
