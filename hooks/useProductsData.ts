import { getProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";

export function UseProductsData(){
        const {data, isLoading} = useQuery({
        queryFn: getProducts,
        queryKey: ['products-data']
    })

    console.log(data)
    const teste = {
        ...data,
        data: data,
        isLoading
    };

    console.log(teste)


    return {
        ...data,
        data: data,
        isLoading
    };
}

