import { Sitter } from './sitters.model';
import { CreateSitterDto } from './dto/create-sitter.dto';
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
  getAllSitters(): Promise<Sitter[]> {
    return this.sittersService.getAllSitters();
  }

  @Get('/:id')
  getSitter(@Param('id') id: string): Promise<Sitter> {
    return this.sittersService.getSitterById(id);
  }

  @Delete('/:id')
  deleteSitterbyId(@Param('id') id: string): void {
    return this.sittersService.deleteSitterById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSitter(@Body() createSitterDto: CreateSitterDto): Promise<Sitter> {
    return this.sittersService.createSitter(createSitterDto);
  }
}
