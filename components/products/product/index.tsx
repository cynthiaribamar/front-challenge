import { ProductProps } from "@/types/product";
import style from "./style.module.scss";
import Image from "next/image";
import ShoppingBag from "/assets/shopping-bag.svg"
import { Button } from "@/components/common/button";
import { ShoppingContext } from "@/context/ShoppingContext";
import { useState, useContext } from "react"
import { splitPrice } from "@/utils/splitPrice";
import { useWindowSize } from "@/utils/windowSize";

export const Product = ({
    index,
    photo,
    name,
    description,
    price,
    brand,
    variant
}: ProductProps) => {

    const window = useWindowSize();
    const { cart, setCart, values, setValues, isLoading } = useContext(ShoppingContext) || {};
    const Element = (variant === "cart" ? "li" : "div");

    const [current, setCurrent] = useState(1)
    const item = cart?.find(p => p.name === `${name}`)
    const itemPrice = cart?.find(p => p.price === price)
    const indice = cart!.indexOf(itemPrice!)

    function removeFromCart(name: string) {
        const updatedCart = cart!.filter(item => item.name !== name);
        setCart && setCart([...updatedCart]);

        const removedAll = values!.filter(price => price !== parseFloat(item!.price!.toString()));

        setValues && setValues(removedAll);
    }

    function handleQt(op: "-" | "+") {
        if (op === "-") {
            const updatedValues = values?.filter((_, index) => index !== indice);
            setValues && setValues([...updatedValues!]);

            if (current! > 1) {
                setCurrent!(current! - 1)

            } else {
                removeFromCart(item!.name!)
            }
        }

        if (op === "+") {
            setCurrent!(current! + 1)
            setValues!(prevValues => [...prevValues, parseFloat(item!.price!.toString())])
        }
    }

    return (
        <Element className={style.product} key={index} data-loading={isLoading} data-variant={variant}>
            <div className={style.imgWrap}>
                {photo && <Image
                    title={name}
                    src={photo}
                    alt={`Imagem do produto ${name} da marca ${brand}`}
                    height={128}
                    width={150}
                    className={style.productImg}
                />}
            </div>
            {variant == "cart" ? (
                <>
                    <h4 className={style.title}>{name}</h4>
                    <div className={style.productDataWrap}>
                        <div className={style.mainData}>
                            <div className={style.qtd}>
                                <Button variant="order" onClick={(() => {
                                    handleQt("-")
                                })}>-</Button>
                                <span className={style.qtNumber}>{current}</span>
                                <Button variant="order" onClick={(() => {
                                    handleQt("+")
                                })}>+</Button>

                            </div>
                            {price && <span className={style.price}>R${splitPrice(price)}</span>}
                        </div>
                    </div>
                    <div className={style.closeWrap}>
                        <Button variant="close" styleColor={window.width > 834 ? "black" : "white"} onClick={(() => {
                            cart && setCart && removeFromCart(name!)
                        })}>x</Button>
                    </div>
                </>
            ) : (
                <>
                    <div className={style.productDataWrap}>
                        <div className={style.mainData}>
                            <h4 className={style.title}>{name}</h4>
                            {price && <span className={style.price}>R${splitPrice(price)}</span>}
                        </div>
                        <p className={style.desc}>{description}</p>
                    </div>
                </>
            )
            }
        </Element>
    )
}