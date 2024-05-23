import { Header } from "@/components/common/header";
import { Footer } from "../footer";
import React from "react";
import { LayoutProps } from "@/types/common";
export const MainLayout = ({
    children
}: LayoutProps) => {

    return (
        <>
            <Header/>
            {children}
            <Footer />
        </>
    )
}