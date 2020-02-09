import { CreateSitterDto } from './dto/create-sitter.dto';
import { Sitter } from './sitters.model';
import { SittersService } from './sitters.service';
import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('sitters')
export class SittersController {
  constructor(private sittersService: SittersService) {}

  @Get()
  getAllSitters(): Sitter[] {
    return this.sittersService.getAllSitters();
  }

  @Delete('/:id')
  deleteSitterbyId(@Param('id') id: string): void {
    return this.sittersService.deleteSitterById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSitter(@Body() createSitterDto: CreateSitterDto): Sitter {
    return this.sittersService.createSitter(createSitterDto);
  }
}
