'use client'

import style from "./style.module.scss"
import { Product } from "../product";
import { ShoppingContext } from "@/context/ShoppingContext";
import { useContext, useEffect } from "react";
import { Button } from "@/components/common/button";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingBag from "/assets/shopping-bag.svg"
import { ProductProps } from "@/types/product";
import { splitPrice } from "@/utils/splitPrice";


export const Hero = () => {

    const { data, isLoading, sideMenuOpen, setMenuOpen, cart, setCart, values, setValues } = useContext(ShoppingContext) || {};
    const total = values!.reduce((acc, curr) => acc + curr, 0);


    function cartHandler(Product: ProductProps) {

        let indexOfItem = cart?.indexOf(Product);

        if (indexOfItem === -1) {
            setCart && setCart([...cart!, Product])
            setValues!([...values!, parseFloat(Product!.price!.toString())])
        }
    }


    return (
        <section className={style.hero}>
            <ul className={style.products}>
                {isLoading === true ? (
                    <>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    </>
                ) : (
                    <>
                        {data?.data.products.map((ProductItem, index) => {
                            return (
                                <li key={index}>
                                    <Product {...ProductItem}
                                    />
                                    <button className={style.buyBtn}
                                        onClick={() => {
                                            setValues && values &&
                                                cartHandler(ProductItem)
                                        }}
                                    ><ShoppingBag /><span>COMPRAR</span></button>
                                </li>
                            );
                        })}

                    </>
                )}
            </ul>
            {setMenuOpen && sideMenuOpen === true ? (
                <AnimatePresence>
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={style.sideMenu}
                    >
                        <div className={style.cartHead}>
                            <h3 className={style.title}>Carrinho de compras</h3>
                            <Button
                                variant="close"
                                styleColor="black"
                                onClick={(() => {
                                    setMenuOpen(false)
                                })}>x</Button>
                        </div>
                        <ul>
                            {cart && cart.length > 0 ? (
                                cart.map((ProductItem, index) => {
                                    return (
                                        <Product key={index} {...ProductItem} variant={"cart"} />
                                    )
                                })
                            ) : (
                                <span>Seu carrinho está vazio.</span>
                            )}
                        </ul>
                        {cart && cart.length > 0 ? (
                            <>
                                <div className={style.totalOrder}>
                                    <span>Total:</span>
                                    <span>R${total}</span>
                                </div>
                                <button className={style.finish}>Finalizar</button>
                            </>
                        ) : (
                            undefined
                        )}
                    </motion.nav>
                </AnimatePresence>
            ) : undefined}
        </section>
    )
}




