import { MouseEventHandler } from "react"

export type LayoutProps = {
    children: React.ReactNode
}

export type ButtonProps = {
    children: React.ReactNode,
    styleColor?: "white" | "black",
    variant: "close" | "order",
    onClick: MouseEventHandler
}
