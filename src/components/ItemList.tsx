export const ItemList = ({ list }: any) => {
    console.log(list);

    return (
        <ul className="d-flex row g-5">
            {
                list.map(prod => {

                    return (
                        <div className="card" style={{width: '18rem'}}>
                            <img src={prod.thumbnail} className="card-img-top" alt={prod.title} style={{maxWidth: '200px', maxHeight: '200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{textDecoration: 'none'}}>Price: ${prod.price}</li>
                                </ul>

                        </div>
                    )
                })
            }
        </ul>
    )
}