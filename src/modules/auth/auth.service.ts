import { Injectable, UnauthorizedException } from "@nestjs/common";
import { HashUtil } from "src/shared/utils/hash.util";
import UserRepository from "../user/user.repository";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { IUser } from "src/shared/interfaces/user.interface";

export interface ILoginResponse {
    userId: number;
    token: string;
}

@Injectable()
export class LoginService {
    constructor(
        private readonly userRepository: UserRepository,
        private jwtService: JwtService,
    ) {}
    async create(loginDto: LoginDto): Promise<ILoginResponse> {
        const user: IUser = await this.userRepository.findOneByEmail(
            loginDto.email,
        );

        const isCorrectPassword: boolean = await HashUtil.comparePassword(
            loginDto.password,
            user.password,
        );
        if (!isCorrectPassword) {
            throw new UnauthorizedException();
        }

        const payload = { email: user.email, sub: user.id };
        const token: string = this.jwtService.sign(payload);
        const userId: number = user.id;
        return { userId, token };
    }
}
