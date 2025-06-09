import { StrictMode } from 'react'



import Header from './header.jsx'
import Nav from './navigations.jsx'


function Head() {
    return (
        <div id='headBlock' className="head">
            <div className="head-container">
            <Header/>
            <Nav/>
            
            </div>
        </div>
    )
}


export default Head