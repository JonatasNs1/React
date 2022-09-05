import Item from "./Item";

function List(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                {/* <li>Item 1</li>
                <li>Item 2</li> */}
                <Item marca="ferrari" anoLancamento={1985}/>
                <Item marca="fiat" anoLancamento={1964}/>
                <Item marca="Renault" anoLancamento={2527}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;