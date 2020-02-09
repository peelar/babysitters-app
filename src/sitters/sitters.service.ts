import { CreateSitterDto } from './dto/create-sitter.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Sitter } from './sitters.model';
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

  getSitterById(id: string): Promise<Sitter> {
    return this.sittersModel.findById(id).exec();
  }

  deleteSitterById(id: string): void {
    this.sittersModel.findByIdAndRemove({ _id: id });
  }

  async createSitter(createSitterDto: CreateSitterDto): Promise<Sitter> {
    const createdSitter = new this.sittersModel(createSitterDto);
    return createdSitter.save();
  }
}
