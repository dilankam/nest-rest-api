import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response} from 'express'; //How to return response in express way
import { Req, Res } from '@nestjs/common'; //How to return response in express way

@Controller('items')
export class ItemsController {
    //How to return response in express way
    @Get() // http://localhost:3000/items
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url);
        return res.send("sfsdf sdf");
    }

    // @Get() // http://localhost:3000/items
    // findAll(): string {
    //     return 'Get all items';
    // }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc ${createItemDto.description}`;
    }
}
