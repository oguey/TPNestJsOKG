import { Module } from "@nestjs/common";
 import { StudentService } from "./student.service";  
import e from "express";
 @Module({

    providers: [StudentService],
    exports: [StudentService]
 })  
 export class StudentModule {}
