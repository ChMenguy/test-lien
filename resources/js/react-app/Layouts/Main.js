import React from 'react';
import ReactDOM from 'react-dom'; 
import SideBar from './SideBar';

function Main ({children}){
    return(
        <>
        <SideBar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto">
                <div className="border-b border-gray-200">
                    <div className="flex-1 min-w-0">
                        <h1 className="pt-2 uppercase text-lg font-medium leading-6 text-center text-gray-900">Création de votre lien d'affiliation</h1>
                    </div>
                </div>
                <div className="p-1 h-full">{children}</div>
            </main>
        </div>
        </>
        )
}

export default Main
