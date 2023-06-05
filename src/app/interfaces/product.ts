interface InventoryStatus {
    label: string;
    value: string;
}
export interface IProduct {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    importPrice?: number;
    price?: number;
    quantity?: number;
    status?: number;
    ProductCateID?: number;
    image?: string;
    rating?: number;
    date?:string;
    updateDay?:string;
}