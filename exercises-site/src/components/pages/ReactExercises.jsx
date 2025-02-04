import '../../Stylesheet/pages/ReactExercises.css'
import reactLogo from "../../assets/img/logo192.png"

import { Link } from 'react-router-dom'
import { Emitter } from '../../utils/eventHandle'

export const ReactExercise = () => {

  let pages = [
    { link: "/react-exercises/exercise1", text: "Exercise 1" }
  ]

  const handleClick = (event) => {
    let name = event.target.innerText
    let path = event.target.dataset.id

    Emitter.emit('pageChange', { 'name': name, 'path': path })
  }

  return (
    <div className="reactExercise">
      <div className="h1-container">
        <img src={reactLogo} alt="react logo spinning" />
        <h1>React Exercises Index</h1>
        <img src={reactLogo} alt="react logo spinning" />
      </div>
      <p>
        Welcome to the react exercises page, feel free to checkout all static pages exercises that I have made in my courses.
      </p>
      <ul>
        { 
          pages.map(page => {
            return ( 
              <li onClick={handleClick} key={page.link}>
                <Link to={page.link} data-id={page.link}>{page.text}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
