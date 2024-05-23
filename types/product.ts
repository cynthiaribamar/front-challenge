export type ProductProps = {
    index?: number,
    photo?: string,
    name?: string,
    description?: string,
    price?: number | string | string[],
    brand?: string,
    variant?: "cart"
}

export type ProductResponse = {
       data: {
        products: ProductProps[]
       }
}