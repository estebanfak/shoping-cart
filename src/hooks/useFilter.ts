import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export const useFilter = () => {
  const { filter, setFilter } = useContext<any>(FiltersContext)

  const filterProducts = (pr: any) => {
    return pr.filter((product: any) => {
      return product.price >= filter.minPrice
        &&
        (
          filter.category === 'all' ||
          product.category === filter.category
        )
    })
  }

  const categories = (pr: any) => {
    return Array.from(new Set(pr.map((product: any) => product.category)))
  }

  return { categories, filterProducts, setFilter, filter }
}