'use client'

import style from "./style.module.scss"
import Cart from "/assets/cart.svg"
import { ShoppingContext } from "@/context/ShoppingContext"
import { useContext } from "react"

export const Header = () => {

    const { setMenuOpen, cart } = useContext(ShoppingContext) || {};

    return (
        <header className={style.header}>
            <span><b>MKS</b> Sistemas</span>
            <button
                className={style.cartBtn}
                onClick={() => {
                    {setMenuOpen && setMenuOpen(true)}
                }}>
                <Cart className={style.icon} />{cart && (cart.length)}
            </button>
        </header>
    )
}