import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {
  
  //Appeler constructeur avec  InjectModel ('User') et le model Schema Users

  constructor(@InjectModel('User') private readonly userModel: Model<Users>){}
  
  
  async create(createUserInput: CreateUserInput): Promise<Users> {
    const createUser = new this.userModel(createUserInput);
    return createUser.save();
}

  async findAll(): Promise<Users[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async remove(id: string) : Promise<any> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
