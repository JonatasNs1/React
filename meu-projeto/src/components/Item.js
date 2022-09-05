
import PropTypes from 'prop-types';

function Item({marca, anoLancamento}){
    return(
        <>
            <li>
                {marca} - {anoLancamento}
            </li>
            
        </>
    )

}

//propTypes= Definir um tipo

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento:PropTypes.number
}

// valor padrão para o item
Item.defaultProps={
    marca: "Faltou a marca",
    anoLancamento: 0,
}

export default Item;