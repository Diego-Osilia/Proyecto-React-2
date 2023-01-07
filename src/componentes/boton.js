import React from "react";

function boton({texto, esbotonclic}){

return (
<button className={esbotonclic ? "boton-clic" : "boton-reiniciar"}>

{texto}

</button>


)



}