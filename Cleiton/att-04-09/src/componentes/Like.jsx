import { useState } from "react";

function Like(){

    const[contLike,setContLike] = useState(0)
    const[contDislike,setContDislike] = useState(0)

    //Funcao de dar o like
    function Jlike(){
        setContLike(contLike + 1)
    }

    // A do dislike
    function JDislike(){
        setContDislike(contDislike + 1)
    }

    return(
        <div>
            <button onClick={Jlike}>Like</button>
            <button onClick={JDislike}>Dislike</button>
            <h4>Like : {contLike}</h4>
            <h4>Dislike : {contDislike}</h4>
        </div>
    )
}

export default Like;