export interface IOrder{
    id?: number;   
    idProduct?: {
    },
    idUser?: number,
    name?: string,
    city?: string;
    address?: string;
    quantyti?: number,
    total?: number,
    days?: string,
    notes?:string,
    status?: 1
}