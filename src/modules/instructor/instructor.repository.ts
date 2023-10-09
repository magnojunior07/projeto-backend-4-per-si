import DatabaseService from "src/database/database.service";
import { IInstructor } from "src/shared/interfaces/instructor.interface";
import { UpdateInstructorDto } from "./dto/update-instructor.dto";
import { CreateInstructorDto } from "./dto/create-instructor.dto";

export default class InstructorRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(instructor: CreateInstructorDto) {
        const createdInstructor = await this.databaseService.instructor.create({
            data: {
                name: instructor.name,
            },
        });

        return createdInstructor;
    }

    async findAll() {
        const instructors: IInstructor[] =
            await this.databaseService.instructor.findMany({
                select: {
                    id: true,
                    name: true,
                    courses: true,
                },
            });

        return instructors;
    }

    async findOneById(id: number) {
        const instructor: IInstructor =
            await this.databaseService.instructor.findUnique({
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
        const updatedInstructor: IInstructor =
            await this.databaseService.instructor.update({
                where: { id },
                data: {
                    name: instructor.name,
                    updatedAt: new Date(),
                },
            });

        return updatedInstructor;
    }

    async remove(id: number) {
        const deletedInstructor: IInstructor =
            await this.databaseService.instructor.delete({
                where: { id },
            });

        return deletedInstructor;
    }
}
