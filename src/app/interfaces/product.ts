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
    category?: string | number | object;
    image?: string;
    rating?: number;
    date?:string;
    updateDay?:string;
}