import { Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import SubscriptionRepository from "./subscription.repository";

@Injectable()
export class SubscriptionService {
    constructor(
        private readonly subscriptionRepository: SubscriptionRepository,
    ) {}
    async create(createSubscriptionDto: CreateSubscriptionDto) {
        return this.subscriptionRepository.create(createSubscriptionDto);
    }

    findAll() {
        return this.subscriptionRepository.findAll();
    }

    findOneById(id: number) {
        return this.subscriptionRepository.findOneById(id);
    }

    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
        return this.subscriptionRepository.update(id, updateSubscriptionDto);
    }

    remove(id: number) {
        return this.subscriptionRepository.remove(id);
    }
}
