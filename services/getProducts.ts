import { ProductResponse } from "@/types/product";
import { axiosInstance } from "@/utils/axios";

export const getProducts = async (): Promise<ProductResponse> => {
    
    const params = {
        page: 1,
        rows: 10,
        sortBy: "id",
        orderBy: "ASC"
    }

    const response = await axiosInstance.get(`/products?page=${params.page}&rows=${params.rows}&sortBy=${params.sortBy}&orderBy=${params.orderBy}`);
    return response
}