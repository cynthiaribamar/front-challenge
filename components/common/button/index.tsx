import style from "./style.module.scss";
import { ButtonProps } from "@/types/common"

export const Button = ({
    children,
    variant,
    styleColor,
    onClick
}: ButtonProps) => {
    return(
        <button data-variant={variant} data-color={styleColor} className={style.btn} onClick={onClick}>
            {children}
        </button>
    )
}