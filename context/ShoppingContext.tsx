'use client'

import { LayoutProps } from "@/types/common";
import { ContextTypes } from "@/types/contextTypes";
import React, { createContext, useState, useEffect } from "react";
import { UseProductsData } from "@/hooks/useProductsData";
import { ProductProps } from "@/types/product";

export const ShoppingContext = createContext<ContextTypes | undefined>(undefined)

export const ShoppingProvider = ({ children }: LayoutProps) => {
    const { data, isLoading } = UseProductsData();
    const [sideMenuOpen, setMenuOpen] = useState(false);
    const [cart, setCart] = useState<Array<ProductProps>>([])
    const [values, setValues] = useState<Array<number>>([])

    useEffect(() => {
    }, [values]);


    return (
        <ShoppingContext.Provider value={{ data, isLoading, sideMenuOpen, setMenuOpen, cart, setCart, values, setValues }}>
            {children}
        </ShoppingContext.Provider>
    )
}