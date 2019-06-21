import { Document } from 'mongoose';

export interface Item extends Document {
    id?: string; // ? for optional
    name: string;
    description?: string;
    qty: number;
}
