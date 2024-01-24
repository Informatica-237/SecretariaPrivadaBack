import { AuthService } from "./auth.service";
import { loginDto } from "./dto/login.dto";
import { registerDto } from "./dto/register.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: registerDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login(loginDto: loginDto): Promise<{
        access_token: string;
        email: string;
    }>;
    getUser(req: any): Promise<{
        user: import("../users/entities/user.entity").User;
    }>;
}
