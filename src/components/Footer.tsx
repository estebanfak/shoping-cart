import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../context/filter'

export const Footer = () => {
    const { filter } = useContext<any>(FiltersContext)
    return (
        <footer className="footer">
            {
                JSON.stringify(filter, null, 2)
            }
        </footer>
    )
}