/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService,
      private jwtService: JwtService 
    ) {}
    
    async validateUser(email: string, pass: string) {
        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new BadRequestException();
        } 

        const isPasswordValid = await bcrypt.compare(pass, user.password);

        if (!isPasswordValid) {
            throw new BadRequestException();
        }

        const { password, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { sub: user.id, email: user.email };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
