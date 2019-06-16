import { Controller, Get } from '@nestjs/common';
import { create } from 'domain';

@Controller('items') 
export class ItemsController {
    @Get() // http://localhost:3000/items
    findAll(): string {
        return 'Get all items';
    }
}
