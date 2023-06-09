import { IProduct } from "./product";

export interface IOrder{
    id?: number;   
    products?: IProduct[],
    idUser?: number,
    name?: string,
    city?: string;
    address?: string;
    quantyti?: number,
    total?: number,
    phone?:string,
    days?: string,
    notes?:string,
    status?: string
}