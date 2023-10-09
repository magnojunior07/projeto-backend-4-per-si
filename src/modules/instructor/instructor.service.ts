import { Injectable } from "@nestjs/common";
import { CreateInstructorDto } from "./dto/create-instructor.dto";
import { UpdateInstructorDto } from "./dto/update-instructor.dto";
import InstructorRepository from "./instructor.repository";

@Injectable()
export class InstructorService {
    constructor(private readonly instructorRepository: InstructorRepository) {}
    async create(createInstructorDto: CreateInstructorDto) {
        return this.instructorRepository.create(createInstructorDto);
    }

    findAll() {
        return this.instructorRepository.findAll();
    }

    findOneById(id: number) {
        return this.instructorRepository.findOneById(id);
    }

    update(id: number, updateInstructorDto: UpdateInstructorDto) {
        return this.instructorRepository.update(id, updateInstructorDto);
    }

    remove(id: number) {
        return this.instructorRepository.remove(id);
    }
}
