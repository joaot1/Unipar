// tenha 1 input para digitar uma temperatura em celsius.
// Tenha um estado celsius que guarda o valor digitado.
// Mostre o valor convertido para Fahrenheit ( (celsius *9/5) + 32)
import { useState } from "react"

function ConversorTemperatura (){

    const [celsius, setCelsius] = useState(0)
    const [Fahren,setFahren ] = useState(0)
    
    function conversor(event){ 
        const temperatura = event.target.value 
        setCelsius(temperatura)
        setFahren( (temperatura * 9/5) + 32)
    }

    return(
        <div>  
            <div>
                <p> Digite a temperatura em Celsius:</p>
                <input onChange={conversor}></input>
            </div>

            <div>
                <p>A temperatura em celsius é de: {celsius} </p>
                <p>E a temperatura em Fahrenheight é de: {Fahren}</p>
            </div>
        </div>
    )
}
export default ConversorTemperatura