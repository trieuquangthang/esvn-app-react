import { AxiosResponse } from "axios";
import instance from "./instance";
import { ICustomer } from "../interfaces/customer";

const customerService = {
    getList: (): Promise<AxiosResponse<ICustomer[], any>> => {
        const url = "/Customers";
        return instance.get(url)
    },

    createCustomer: (customer: ICustomer): Promise<AxiosResponse<ICustomer, any>> => {
        const url = "/Customers";
        return instance.post(url, customer)
    },
} 
export default customerService;