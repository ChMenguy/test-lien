import React from 'react';
import ReactDOM from 'react-dom'; 
import SideBar from './SideBar'
import Main from './Main'


function Example() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-100 min-h-screen flex w-full">
            <SideBar />
            <Main />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
