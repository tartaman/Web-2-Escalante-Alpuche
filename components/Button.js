function Button({titulo, contador, setContador}){
    function sumado(){
        setContador(contador + 1);
    }               
    return(
        <button onClick={sumado}>{titulo}</button>
    )

}

window.Button = Button;