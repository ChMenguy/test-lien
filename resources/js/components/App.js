import React from 'react';
import ReactDOM from 'react-dom'; 
import SideBar from './SideBar'
import Main from './Main'
import GenerateLinkButton from './GenerateLinkButton'

function App() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-100 min-h-screen flex w-full">
            <SideBar />
            <Main>
                <GenerateLinkButton />
            </Main>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
