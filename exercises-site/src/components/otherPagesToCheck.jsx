import "../Stylesheet/pages/otherPagesToCheck.css"
import { Link } from "react-router-dom"

import {Emitter} from '../utils/eventHandle.js'

export default function OtherPagesToCheck(){

    const handleClick = (event)=>{
        let name = event.target.innerText
        let path = event.target.dataset.id

        Emitter.emit('pageChange', {'name': name, 'path': path} )
    }

    return(
        <div className="otherPagesToCheck">
            <h2>Other pages to check</h2>
            
            <div className="threeJsPages">
                <h3>Three.js with react-fiber and drei learning pages</h3>
                <ul>
                    <li onClick={handleClick}> <Link to="/threeJs" data-id="/threeJs" >React Three Fiber Index</Link> </li>
                </ul>
            </div>

            <div className="otherPages">
                <h3>Other Websites</h3>
                <ul>
                    <li> <a href="https://server-poem-site-utqk.vercel.app/">Poem Site</a> </li>
                </ul>
            </div>

        </div>
    )
}