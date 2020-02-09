import { CreateSitterDto } from './dto/create-sitter.dto';
import { Injectable } from '@nestjs/common';
import { Sitter } from './sitters.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class SittersService {
  private sitters: Sitter[] = [];

  getAllSitters(): Sitter[] {
    return this.sitters;
  }

  createSitter(createSitterDto: CreateSitterDto): Sitter {
    const sitter: Sitter = {
      id: uuid(),
      ...createSitterDto,
    };

    return sitter;
  }
}
