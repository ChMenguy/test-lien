import React, { useRef, useState } from 'react';

import { useForm } from "react-hook-form";
import axios from "axios"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy , faCheck,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import Main from '../Layouts/Main'

import { Link } from 'react-router-dom';

function Form(){

    //Stockage dans l'état des data envoyé par l'utilisateur 
    const [data,setData] = useState({
        idAffiliated : '',
        email : '',
        link : '',
        use : '',
        submit : false

    })

    // Envoi data en BDD et mise à jour des data renseignées
    const { register, handleSubmit } = useForm();
    const [errorCreation,setErrorCreation] = useState(false)  

    const onSubmit = (data, e) => {     
    axios({
        method: "post",
        url: 'http://127.0.0.1:8000/api/add-affiliated',
        data: {
          idAffiliated: data.idAffiliated,
          email: data.email,
          use : data.use,
          link : `http://127.0.0.1:8000/?id=${data.link}`
        },
      })
        .then(function () {
            setData({
                idAffiliated  : data.idAffiliated,
                email : data.email,
                link : `http://127.0.0.1:8000/?id=${data.link}`,
                use : data.use,
                submit : true
            })
            setErrorCreation(false) 
        })
        .catch(() => setErrorCreation(true))

    };

    //En cas d'erreur d'envoi ou champ non renseigné

    const onError = () => {
        setErrorCreation(true)
    };
 
    
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
        <div className="bg-gradient-to-r from-gray-300 to-gray-100 min-h-screen flex w-full">
            
            <Main>
                <Link to="/">
                    <div className="w-full px-3 mt-5 ml-3">
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full">
                        Retour
                        </button>
                    </div>    
                </Link>
                {
                    errorCreation ?
                        <div className="bg-red-200 m-3 border-l-4 border-red-200 text-red-500 p-4" role="alert">
                            <p className="font-bold">Attention</p>
                            <p>Merci de renseigner l'ensemble des champs</p>
                        </div>
                    : null    
                }                

                {!data.submit ? 
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-lg mx-auto mt-3">
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Identifiant
                                </label>
                                <input name="idAffiliated" {...register("idAffiliated",{required:true})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number"></input>
                                <a href="#">
                                    <p className="text-yellow-500 text-right text-xs italic hover:text-yellow-600 underline">Où trouver votre identifiant</p>
                                </a>                      
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Email de l'invité
                                </label>
                                <input {...register("email",{required:true})} name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email"></input>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Utilisation
                            </label>
                            <div className="relative mx-3">
                                <select {...register("use",{required:true})} name="use" className="block appearance-none w-full bg-gray-200 border border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Unique</option>
                                    <option>Multiple</option>      
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 mx-3 mb-3">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                                    Lien généré
                                </label>
                                <div className="flex" {...register("link",{required:true})} name="link">
                                    <span className="font-bold text-black rounded-l-lg border-black border-2 w-3/5 py-3 mb-3 pl-1">
                                        http://127.0.0.1:8000/?id=
                                    </span>
                                    <input className="rounded-r-lg w-2/5 appearance-none block bg-gray-200 text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" {...register("link")}></input>               
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-full px-3 flex justify-end">
                            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full">
                            Valider
                            </button>
                        </div>
                    </form>
                    : 
                    <div className="w-full max-w-lg mx-auto mt-10">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-id">
                            Copier le lien généré
                        </label>
                        <div className="flex w-full border-2 rounded-lg text-center text-black justify-around">
                            <textarea className="text-center pt-3 w-4/5" ref={inputLinkEl} type="text" value={data.link} readOnly>
                                {data.link}
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" htmlFor="grid-id">
                            Envoyer le lien généré par mail
                        </label>
                        <div className="flex w-full border-2 rounded-lg text-center text-black justify-around">
                            <textarea className="text-center pt-3 w-4/5" ref={inputLinkEl} type="text" value={data.email} readOnly>
                            </textarea>
                            <div className="w-1/5  pt-3 rounded-r-lg bg-yellow-400">
                                {
                                    !isCopy ?
                                       <FontAwesomeIcon 
                                            icon={faPaperPlane} 
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