import React from 'react';
import ReactDOM from 'react-dom'; 

function GenerateLinkButton(){
    return(
        <div className="text-center">
            <button 
                class="text-center mt-56 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
            >
                Générer votre lien
            </button>
        </div>
        
        )
}

export default GenerateLinkButton