import Frase from "./Frase";
import SaveMyName from "./SayMyName";

function HelloWord(){
    return(
        <div>
            <h1> Compoente 1</h1>
            <Frase/>
            <SaveMyName nome="teste"/>
        </div>
    )
}

export default HelloWord;