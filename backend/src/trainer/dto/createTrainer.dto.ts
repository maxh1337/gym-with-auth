import {IsNumber, IsString} from "class-validator";

export class CreateTrainerDto {
    @IsString()
    name: string
    @IsNumber()
    age: number
    @IsString()
    awards?: string
    @IsString()
    photo: string
}