import { Filter } from "./Filter"

export const Header = ({categories}: any) => {


    return (
        <header style={{position: 'relative', width: '100vw'}}>
            <h1>Shopping Cart</h1>
            <Filter categories={categories}/>
        </header>
    )
}