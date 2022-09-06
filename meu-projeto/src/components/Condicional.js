import {useState} from 'react';

function Condicional(){

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [userEmail, setUserEmail] = useState()
    const[userSenha, setUserSenha] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        setUserSenha(senha)
        // console.log("testando")
    }

    function limparEmail(){
        setUserEmail()
    }


    return(
        <div>
            <h2> Cadastre o seu email:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu email"
                    onChange={(e) => setEmail(e.target.value)}
                   />
                   <br></br>
                      <input
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}
                   />
                <button onClick={enviarEmail}> Enviar email</button>

            </form>

            {/* Condicional */}
            {userEmail && (
                <div>
                    <p> O email do usuário é:{userEmail}</p>
                    <button onClick={limparEmail}>limpar</button>
                </div>
            ) }

            {userSenha && (
                <div>
                    <p> A senha é :{userSenha}</p>
                </div>
            ) }
           
           
        </div>
    )
}

export default Condicional;