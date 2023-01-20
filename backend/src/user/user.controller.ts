import {Body, Controller, Get, HttpCode, Param, Put, Request, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./decorators/user.decorator";
import {Auth} from "../auth/decorators/auth.decorator";
import {UpdateTrainerDto} from "../trainer/dto/updateTrainer.dto";
import {IdValidationPipe} from "../pipes/id.validation.pipe";
import {ChangeRoleDto} from "./dto/changeRole.dto";

@Controller('users')
export class UserController {
    constructor(private readonly UserService: UserService) {
    }

    @Get('profile')
    @Auth()
    async getProfile(@User('_id') _id: string) {
        return this.UserService.byId(_id)
    }

    @Get()
    async getAll() {
        return this.UserService.getAll()
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Auth('admin')
    async changeRole(@Body() dto: ChangeRoleDto, @Param('id', IdValidationPipe) _id: string) {
        return this.UserService.changeRole(_id, dto)
    }
}
