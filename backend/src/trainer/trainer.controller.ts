import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TrainerService } from "./trainer.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { CreateTrainerDto } from "./dto/createTrainer.dto";
import { IdValidationPipe } from "../pipes/id.validation.pipe";
import { UpdateTrainerDto } from "./dto/updateTrainer.dto";

@Controller("trainers")
export class TrainerController {
  constructor(private readonly TrainerService: TrainerService) {}

  @Get()
  async getAll() {
    return this.TrainerService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth("admin")
  async create(@Body() dto: CreateTrainerDto) {
    return this.TrainerService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  @Auth("admin")
  async update(
    @Body() dto: UpdateTrainerDto,
    @Param("id", IdValidationPipe) id: string
  ) {
    return this.TrainerService.update(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async delete(@Param("id", IdValidationPipe) id: string) {
    return this.TrainerService.delete(id);
  }
}
