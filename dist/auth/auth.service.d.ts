import { UsersService } from "src/users/users.service";
import { registerDto } from "./dto/register.dto";
import { loginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ username, password, email }: registerDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login({ email, password }: loginDto): Promise<{
        access_token: string;
        email: string;
    }>;
    getUserByToken(token: string): Promise<import("../users/entities/user.entity").User>;
    findUserByEmail(email: string): Promise<import("../users/entities/user.entity").User>;
}
