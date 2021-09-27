import React from 'react';
import ReactDOM from 'react-dom'; 


import { Link } from 'react-router-dom'

function GenerateLinkButton(){
    return(
        <div className="text-center">
            <Link
                to="/form"
            >
                <button 
                    className="text-center mt-56 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    Générer votre lien
                </button>
            </Link>
            
        </div>
        
        )
}

export default GenerateLinkButton