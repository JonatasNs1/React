function SeuNome({setNome}){
    return (
        <div>
            <div>
                <p> Digite seu nome:</p>
                <input 
                type="text" 
                placeholder="Qual é o seu nome"
                onChange={(e) => setNome(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SeuNome;