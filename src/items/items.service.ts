import { Injectable } from '@nestjs/common';
import { Item } from './iterfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '23423423',
            name: 'fsfdfsd',
            qty: 100,
            description: 'fsxcv xcxv fdfsd',
        },
        {
            id: '5232353',
            name: 'fsfdfsd',
            qty: 50,
            description: 'fsxcv xcxv fdfsd',
        },
    ];
    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
