import React from 'react';
import ReactDOM from 'react-dom'; 

import { useEffect,useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faArrowAltCircleLeft, faAd, faArrowCircleLeft, faHome, faUserCircle} from "@fortawesome/free-solid-svg-icons"

function SideBar(){

    const [sideBarHidden, setSideBarHidden] = useState(false)

    return(
      <>
      {!sideBarHidden ?
        <div className="w-1/12 max-h-full bg-blue-500">
          
          <div className="h-16 mt-5 flex text-center flex-col">
                {<FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    onClick={()=>{setSideBarHidden(!sideBarHidden)}}
                    className = "cursor-pointer text-center text-2xl	mx-auto text-white mb-32"
                />}
                {
                  <FontAwesomeIcon 
                    icon={faHome}
                    className = "cursor-pointer	text-2xl mx-auto text-white mb-10"
                /> 
                }
                {
                  <FontAwesomeIcon 
                    icon={faUserCircle}
                    className = "cursor-pointer	text-2xl mx-auto text-white mb-10"
                /> 
                }  
              
            </div>
          </div>
          : 
          <div className="w-3/12 max-h-full bg-blue-500">
            <div className="h-16 mt-5 mr-5 flex flex-col">
              {<FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    onClick={()=>{setSideBarHidden(!sideBarHidden)}}
                    className="cursor-pointer text-2xl mx-auto text-white mb-32"
                />}
              <div className="flex flex-col mb-5">
                {<FontAwesomeIcon 
                    icon={faHome}
                    className = "cursor-pointer	text-2xl mx-auto text-white"
                />}
                <h2 className = "text-2xl text-center text-white">Accueil</h2>  
              </div>
              <div className="flex flex-col mt-5">
              {<FontAwesomeIcon 
                    icon={faUserCircle}
                    className = "cursor-pointer	text-2xl text-white mx-auto"
                />}
                <h2 className = "text-2xl text-center mx-auto text-white">Mon compte</h2> 
              </div>
            </div>
        </div>}
        </>
        

        
        
    
    )
}

export default SideBar