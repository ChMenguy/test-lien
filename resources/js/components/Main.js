import React from 'react';
import ReactDOM from 'react-dom'; 

function Main ({children}){
    return(
        <div className="h-12 bg-transparent w-full">
            <h1 className="text-center text-white text-4xl border-b-2 m-3 text-center font-mono">Création de votre lien d'affiliation</h1>
            <div>
                {children}
            </div>
        </div>
        )
}

export default Main
