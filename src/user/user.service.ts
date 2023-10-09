import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import UserRepository from "./user.repository";
import { HashUtil } from "src/shared/utils/hash.util";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    async create(createUserDto: CreateUserDto) {
        const hashedPassword = await HashUtil.hashPassword(
            createUserDto.password,
        );
        createUserDto.password = hashedPassword;

        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return this.userRepository.findAll();
    }

    findOneById(id: number) {
        return this.userRepository.findOneById(id);
    }

    findOneByEmail(email: string) {
        return this.userRepository.findOneByEmail(email);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.userRepository.remove(id);
    }
}
