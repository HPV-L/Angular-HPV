interface InventoryStatus {
    label: string;
    value: string;
}
export interface IProduct {
    _id?: number | string;
    code?: string;
    name?: string;
    description?: string;
    importPrice?: number;
    price?: number;
    quantity?: number;
    status?: number;
    ProductCateID?: number;
    thumbnail?: string;
    rating?: number;
    date?:string;
    updateDay?:string;
}