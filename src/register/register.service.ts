import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterService {
    register(userName: string, password: string): string {
        return userName + password;
    }
}