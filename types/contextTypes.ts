import { SetStateAction } from "react"
import { ProductProps, ProductResponse } from "./product"
import { Dispatch } from "react"

export type ContextTypes = {
        data?: ProductResponse | undefined,
        isLoading?: boolean,
        sideMenuOpen?: boolean,
        setMenuOpen?: Dispatch<SetStateAction<boolean>>,
        setCart?: Dispatch<SetStateAction<ProductProps[]>>,
        cart: ProductProps[]
        values: number[],
        setValues: Dispatch<SetStateAction<number[]>>
}