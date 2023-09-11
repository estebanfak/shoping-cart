import { useContext, useId } from "react"
import { FiltersContext } from "../context/filter"

export const Filter = ({ categories }: any) => {
    const { filter, setFilter } = useContext<any>(FiltersContext)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangePrice = (e: any) => {
        setFilter((prevState: any) => {
            return {
                ...prevState,
                minPrice: e.target.value
            }
        })
    }

    const handleChangeCategory = (e: any) => {
        setFilter((prevState: any) => {
            return {
                ...prevState,
                category: e.target.value !== 'Show all' ? e.target.value : 'all'
            }
        })
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <label htmlFor={minPriceFilterId}>Min price: ${filter.minPrice}</label>
                    <input type="range" id={minPriceFilterId} min={0} max={1000} value={filter.minPrice} onChange={handleChangePrice} />
                </div>
                <div>
                    <label htmlFor={categoryFilterId}>Category</label>
                    <select id={categoryFilterId} value={filter.category} onChange={handleChangeCategory}>
                        <option>Show all</option>
                        {categories.map((cat: string, index: number) => {
                            return (
                                <option key={index}>{cat}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}