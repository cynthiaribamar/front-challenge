import { getProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";

export function UseProductsData(){
        const {data, isLoading} = useQuery({
        queryFn: getProducts,
        queryKey: ['products-data']
    })

    return {
        ...data,
        data: data,
        isLoading
    };
}

