export interface IUser{
    _id?:number | string;
    username?:string;
    email?:string;   
    password:string;
    img?:string;
    address?:string;
    sdt?:string;
    role?:number;
}