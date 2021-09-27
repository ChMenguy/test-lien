import React from 'react';
import ReactDOM from 'react-dom'; 
import SideBar from '../Layouts/SideBar'
import Main from '../Layouts/Main'
import GenerateLinkButton from '../components/GenerateLinkButton'

function Home() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-100 min-h-screen flex w-full">
            <SideBar />
            <Main>
                <GenerateLinkButton />
            </Main>
        </div>
    );
}

export default Home;