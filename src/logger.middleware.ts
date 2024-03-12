import { Injectable, NestMiddleware } from "@nestjs/common";
import { randomInt } from "crypto";
import { Request, Response, NextFunction } from "express";

@Injectable()

export class LoggerMiddleware implements NestMiddleware {
    randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    use(req: Request, res: Response, next: NextFunction) {
        console.log(` nombre au hasard: ${this.randomInt(1, 1000)}`);
        console.log('Request...');
        next();
    }
}