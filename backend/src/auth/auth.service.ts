/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService ) {}
    
    async validateUser(email: string, pass: string) {
        const user = await this.userService.findByEmail(email);

        if (!user) {
            return 'Errou!';
        } 

        const isPasswordValid = await bcrypt.compare(pass, user.password);

        if (!isPasswordValid) {
            return 'Errou!';
        }

        const { password, ...result } = user;
        return result;
    }
}
