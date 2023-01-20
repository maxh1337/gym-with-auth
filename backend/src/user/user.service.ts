import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "./user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {REQUEST} from "@nestjs/core";
import {ChangeRoleDto} from "./dto/changeRole.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>) {
    }


    async byId(_id: string) {
        const user = await this.UserModel.findById(_id)
        if (!user) throw new NotFoundException('User not found')

        return user
    }

    async getAll() {
        return this.UserModel.find({}).exec()
    }

    async changeRole(_id: string, dto: ChangeRoleDto) {
        const user = await this.byId(_id)
        if (dto.isAdmin || dto.isAdmin === false) user.isAdmin = dto.isAdmin

        await user.save()

        return user
    }
}
