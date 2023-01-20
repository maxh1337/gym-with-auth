import {Module} from '@nestjs/common';
import {TrainerService} from './trainer.service';
import {TypegooseModule} from "nestjs-typegoose";
import {TrainerModel} from "./trainer.model";
import {ConfigModule} from "@nestjs/config";
import {TrainerController} from "./trainer.controller";

@Module({
    providers: [TrainerService],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: TrainerModel,
                schemaOptions: {
                    collection: 'Trainer'
                }
            }
        ]),
        ConfigModule
    ],
    controllers: [TrainerController]
})
export class TrainerModule {
}
