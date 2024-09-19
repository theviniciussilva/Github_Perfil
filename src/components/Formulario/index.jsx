import { useState, useEffect } from "react"

const Formulario = function(){
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    // mount 
    // update
    // onmount

    useEffect(() => {
        console.log('o componente iniciou');

        return () => {
            console.log('o componente finalizou')
        }
    }, []);        
    useEffect(() => {
        // console.log('o estado materia mudou');
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior)

            return evento.target.value
        })
    }

    const renderizaResultado = function(){
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        // console.log(media)
        // console.log(soma)

        if(media >= 7){
            return(
                <p>Olá {nome} foi aprovado</p>
            )
        } else{
            return(
                <p>Olá {nome} não foi aprovado</p>
            )
        }
    }


    return(
        <form>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            <input onChange={alteraNome} type="text" placeholder="Seu nome" />
            {/* desestruturação do evento */}
            <input onChange={({target}) => setMateriaA(parseInt(target.value))} type="number" placeholder="Nota matéria A" />
            <input onChange={evento => setMateriaB(parseInt(evento.target.value))} type="number" placeholder="Nota matéria B" />
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota matéria C" />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario