import { Injectable } from "@nestjs/common";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
import RatingRepository from "./rating.repository";

@Injectable()
export class RatingService {
    constructor(private readonly ratingRepository: RatingRepository) {}
    async create(createRatingDto: CreateRatingDto) {
        return this.ratingRepository.create(createRatingDto);
    }

    findAll() {
        return this.ratingRepository.findAll();
    }

    findOneById(id: number) {
        return this.ratingRepository.findOneById(id);
    }

    update(id: number, updateRatingDto: UpdateRatingDto) {
        return this.ratingRepository.update(id, updateRatingDto);
    }

    remove(id: number) {
        return this.ratingRepository.remove(id);
    }
}
