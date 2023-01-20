import {Base} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface TrainerModel extends Base {
}

export class TrainerModel {
    @prop()
    name: string

    @prop()
    age: number

    @prop()
    photo: string

    @prop()
    awards: string
}