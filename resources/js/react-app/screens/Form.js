import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom'; 

import { useForm } from "react-hook-form";
import axios from "axios"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy , faCheck} from '@fortawesome/free-solid-svg-icons'

import SideBar from '../Layouts/SideBar'
import Main from '../Layouts/Main'
import { data } from 'jquery';

function Form(){
    //Stockage des data envoyé par l'utilisateur 
    const [data,setData] = useState({
        id : '',
        email : '',
        link : '',
        use : '',
        submit : false

    })

    // Envoi data en BDD
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        setData({
            id  : data.id,
            email : data.email,
            link : data.link,
            use : data.use,
            submit : true
        })
    };

    //En cas d'erreur d'envoi
    const onError = (errors, e) => console.log(errors, e);
    console.log(data)
    
    //Copier le lien
    const inputLinkEl = useRef(null)
    const [isCopy , setIsCopy] = useState(false)

    const copyLink = (e) =>{
        inputLinkEl.current.select();
        document.execCommand('copy');
        e.target.focus();
        setIsCopy(true)

    }

    return(
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-100 min-h-screen flex w-full">
            <SideBar />
            <Main>
                {!data.submit ? 
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-lg mx-auto mt-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Identifiant
                                </label>
                                <input {...register("id")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number"></input>
                                <a href="#">
                                    <p className="text-yellow-500 text-right text-xs italic hover:text-yellow-600 underline">Où trouver votre identifiant</p>
                                </a>                      
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Email
                                </label>
                                <input {...register("email")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email"></input>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Utilisation
                            </label>
                            <div className="relative">
                                <select {...register("use")} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Unique</option>
                                    <option>Multiple</option>      
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Lien généré
                                </label>
                                <div className="flex" {...register("link")} >
                                    <span className="text-xs font-bold text-white rounded-l-lg border-2 w-3/5 py-3 px-4 mb-3">http://127.0.0.1:8000/?id_affilie=</span>
                                    <input className="rounded-r-lg w-2/5 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" {...register("link")}></input>               
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-full px-3 mt-6 md:mb-0 flex justify-end">
                            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                            Valider
                        </button>
                        </div>
                    </form>
                    : 
                    <div className="w-full max-w-lg mx-auto mt-10">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                            Lien généré
                        </label>
                        <div className="flex w-full border-2 rounded-lg text-center text-black justify-around">
                            <textarea className="text-center pt-3 w-4/5" ref={inputLinkEl} type="text" value={`http://127.0.0.1:8000/?id_affilie=${data.link}`} readOnly>
                                http://127.0.0.1:8000/?id_affilie={data.link}
                            </textarea>
                            <div className="w-1/5  pt-3 rounded-r-lg bg-yellow-400">
                                {
                                    !isCopy ?
                                       <FontAwesomeIcon 
                                            icon={faCopy} 
                                            onClick = {copyLink}
                                            className="cursor-pointer"
                                        /> 
                                    :
                                    <FontAwesomeIcon 
                                    icon={faCheck} 
                                /> 
                                }
                                
                            </div>
                        </div>

                    </div>
                }
            </Main>
        </div>
    )
}

export default Form