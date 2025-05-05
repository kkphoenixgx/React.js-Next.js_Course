import { Link } from 'react-router-dom'
import '../../Stylesheet/pages/ThreejsExercises.css'
import { Emitter } from '../../utils/eventHandle'

export const ThreejsExercises = ()=>{

    let pages = [
        {link: "/threeJs/statsPanel", text: "Testing stats panel"},
        {link: "/threeJs/axesHelper", text: "Testing axesHelper"},
        {link: "/threeJs/gridHelper", text: "Testing GridHelper"},
        {link: "/threeJs/materials", text: "Testing Materials with Leva"}
    ]

    const handleClick = (event)=>{
        let name = event.target.innerText
        let path = event.target.dataset.id

        Emitter.emit('pageChange', {'name': name, 'path': path} )
    }


    return (
        <div className="threejsExercises">
            <h1>Three.js Exexercises</h1>
            
            <p>
                Hello here it is my index of three.js exercises that I maded in my <a href="https://www.udemy.com/course/react-three-fiber/">R3F(React Three Fiber) Course in udemy</a>, and other sources, please check everything out!
            </p>
            <ul>
                { 
                    pages.map( page=>{
                        return ( 
                            <li onClick={handleClick}> <Link to={page.link} data-id={page.link} >{page.text}</Link> </li>
                        )
                    } ) 
                }
            </ul>

        </div>
    )
}