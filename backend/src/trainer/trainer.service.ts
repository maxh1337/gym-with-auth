import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {TrainerModel} from "./trainer.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {CreateTrainerDto} from "./dto/createTrainer.dto";
import {UpdateTrainerDto} from "./dto/updateTrainer.dto";

@Injectable()
export class TrainerService {
    constructor(@InjectModel(TrainerModel) private readonly TrainerModel: ModelType<TrainerModel>) {
    }


    async getAll() {
        return this.TrainerModel.find({}).exec()
    }

    async delete(_id: string) {
        const deleteTrainer = this.TrainerModel.findByIdAndDelete(_id)
        if (!deleteTrainer) throw new NotFoundException('Trainer not found')

        return deleteTrainer
    }

    async create(dto: CreateTrainerDto) {
        const newTrainer: CreateTrainerDto = {
            name: dto.name,
            photo: dto.photo,
            age: dto.age,
            awards: dto.awards
        }

        const trainer = await this.TrainerModel.create(newTrainer)
        return trainer
    }

    async update(id: string, dto: UpdateTrainerDto) {
        const update = await this.TrainerModel.findByIdAndUpdate(id, dto, {
            new: true
        })

        if (!update) throw new NotFoundException('Trainer not found')
        return update
    }

}
