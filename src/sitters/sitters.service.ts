import { CreateSitterDto } from './dto/create-sitter.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Sitter } from './sitters.model';
import * as uuid from 'uuid/v1';
import { sitterModel } from '../constants';
import { Model } from 'mongoose';

@Injectable()
export class SittersService {
  constructor(
    @Inject(sitterModel)
    private readonly sittersModel: Model<Sitter>,
  ) {}

  async getAllSitters(): Promise<Sitter[]> {
    return this.sittersModel.find().exec();
  }

  // getSitterById(id: string): Sitter {
  //   return this.sittersModel.find(el => el.id === id);
  // }

  // deleteSitterById(id: string): void {
  //   const found = this.getSitterById(id);
  //   this.sittersModel.filter(sitter => sitter.id !== found.id);
  // }

  async createSitter(createSitterDto: CreateSitterDto): Promise<Sitter> {
    const createdSitter = new this.sittersModel(createSitterDto);
    return createdSitter.save();
  }
}
