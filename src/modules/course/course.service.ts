import { Injectable } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import CourseRepository from "./course.repository";

@Injectable()
export class CourseService {
    constructor(private readonly courseRepository: CourseRepository) {}
    async create(createCourseDto: CreateCourseDto) {
        return this.courseRepository.create(createCourseDto);
    }

    findAll() {
        return this.courseRepository.findAll();
    }

    findOneById(id: number) {
        return this.courseRepository.findOneById(id);
    }

    update(id: number, updateCourseDto: UpdateCourseDto) {
        return this.courseRepository.update(id, updateCourseDto);
    }

    remove(id: number) {
        return this.courseRepository.remove(id);
    }
}
