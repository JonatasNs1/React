import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()// vai parar a execussão do formulario e vai executar o que ta em seguida
        //no caso o console
        console.log(`Usuario ${name} senha ${password}`);
        console.log("Cadastrou um usuario");
    }

    const[name, setName] = useState();
    const[password, setPassword] = useState();


    return(
        <div>
            <h1> Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <label htmlFor="name">Nome:</label>
                    <input 
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    //MODIFICA O VALOR TODA VEZ NO STATE
                    onChange={(e) => setName(e.target.value)}
                      />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password"
                     d="password" name="password"
                    placeholder="Digite o seu nome"
                    onChange={(e) => setPassword(e.target.value)}
                      />
                </div>
                <div>
                
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;