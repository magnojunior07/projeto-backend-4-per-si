import DatabaseService from "src/database/database.service";
import { IUser } from "src/shared/interfaces/user.interface";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

export default class UserRepository {
    constructor(private readonly databaseService: DatabaseService) {}

    async create(user: CreateUserDto) {
        const createdUser = await this.databaseService.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        return createdUser;
    }

    async findAll() {
        const users: IUser[] = await this.databaseService.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                subscriptions: true,
            },
        });

        return users;
    }

    async findOneById(id: number) {
        const user: IUser = await this.databaseService.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                subscriptions: true,
            },
        });

        return user;
    }

    async findOneByEmail(email: string) {
        const user: IUser = await this.databaseService.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            },
        });

        return user;
    }

    async update(id: number, user: UpdateUserDto) {
        const updatedUser: IUser = await this.databaseService.user.update({
            where: { id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                updatedAt: new Date(),
            },
        });

        return updatedUser;
    }

    async remove(id: number) {
        const deletedUser: IUser = await this.databaseService.user.delete({
            where: { id },
        });

        return deletedUser;
    }
}
