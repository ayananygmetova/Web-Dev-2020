import { Category } from './category'
import { IPHONES,MACS, IPADS, WATCHES, ALL_PRODUCTS } from './list-of-products'

export const CATEGORIES: Category[]=[
    {
        id: 1,
        name: "Mac",
        products: MACS
    },
    {
        id: 2,
        name: "iPad",
        products: IPADS
    },
    {
        id: 3,
        name: "iPhone",
        products: IPHONES
    },
    {
        id: 4,
        name: "Accessories",
        products: WATCHES
    },
    {
        id: 5,
        name: "All products",
        products: ALL_PRODUCTS
    }
]