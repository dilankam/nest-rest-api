import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import {ItemsService} from './items.service';
import {Item} from './iterfaces/item.interface';
// import { Request, Response} from 'express'; //How to return response in express way
// import { Req, Res } from '@nestjs/common'; //How to return response in express way

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    /*
    //How to return response in express way
    @Get() // http://localhost:3000/items
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url);
        return res.send("sfsdf sdf");
    }
    */

    @Get() // http://localhost:3000/items
    findAll(): Item[] {
        // return 'Get all items';
        return this.itemsService.findAll();
    }

    /*
    // with get parameter
    @Get(':id')
    findOne(@Param() param): string {
        return `Id : ${param.id}`;
    }
    */

    // with get parameter
   @Get(':id')
   findOne(@Param('id') id): Item {
       return this.itemsService.findOne(id);
   }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `delete Id : ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} Name: ${updateItemDto.name} Desc ${updateItemDto.description}`;
    }
}
