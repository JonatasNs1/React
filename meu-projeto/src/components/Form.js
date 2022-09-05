function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()// vai parar a execussão do formulario e vai executar o que ta em seguida
        //no caso o console
        console.log("Cadastrou um usuario");
    }


    return(
        <div>
            <h1> Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;