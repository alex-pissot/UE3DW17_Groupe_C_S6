import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {
  
  //Appeler constructeur avec  InjectModel ('User') et le model Schema Users

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){ }
  
  
  async create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
