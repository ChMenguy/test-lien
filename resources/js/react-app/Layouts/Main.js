import React from 'react';
import ReactDOM from 'react-dom'; 

function Main ({children}){
    return(
        <div className="h-12 bg-transparent w-full">
            <h1 className="uppercase text-center text-white text-4xl border-b-2 m-3 ">Création de votre lien d'affiliation</h1>
            <div>
                {children}
            </div>
        </div>
        )
}

export default Main
