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

  getSitterById(id: string): Sitter {
    return this.sitters.find(el => el.id === id);
  }

  deleteSitterById(id: string): void {
    const found = this.getSitterById(id);
    this.sitters.filter(sitter => sitter.id !== found.id);
  }

  createSitter(createSitterDto: CreateSitterDto): Sitter {
    const sitter: Sitter = {
      id: uuid(),
      ...createSitterDto,
    };

    this.sitters.push(sitter);
    return sitter;
  }
}
