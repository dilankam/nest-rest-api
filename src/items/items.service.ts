import { Injectable } from '@nestjs/common';
import { Item } from './iterfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    // private readonly items: Item[] = [
    //     {
    //         id: '23423423',
    //         name: 'fsfdfsd',
    //         qty: 100,
    //         description: 'fsxcv xcxv fdfsd',
    //     },
    //     {
    //         id: '5232353',
    //         name: 'fsfdfsd',
    //         qty: 50,
    //         description: 'fsxcv xcxv fdfsd',
    //     },
    // ];
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
    }
}
