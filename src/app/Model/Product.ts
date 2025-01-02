export class Product{
    
    id?: string; //done
    name: string; //done
    description: string; //done
    brand: string; //done
    gender: string; //done
    category: string; //done
    size: number[]; //done
    color: string[]; //done
    price: number; //done
    is_in_inventory: boolean; //done
    items_left: number;
    imageURL: string;
    slug: string;

    constructor(
        name: string, 
        description: string,
        brand: string, 
        gender: string,
        category: string,
        size: number[],
        color: string[],
        price: number,
        is_in_inventory: boolean,
        items_left: number,
        imageURL: string,
        slug: string
    ){
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.gender = gender;
        this.category = category;
        this.size = size;
        this.color = color;
        this.price = price;
        this.is_in_inventory = is_in_inventory;
        this.items_left = items_left;
        this.imageURL = imageURL;
        this.slug = slug;

    }
}