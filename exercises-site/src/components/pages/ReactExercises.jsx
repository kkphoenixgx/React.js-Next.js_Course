import '../../Stylesheet/pages/ReactExercises.css'

import reactLogo from "../../assets/img/logo192.png"

export const ReactExercise = ()=>{
    return (
        <div className="reactExercise">
          <div className="h1-container">
            <img src={reactLogo} alt="react logo spinning" />
            <h1>React Exercises Index</h1>
            <img src={reactLogo} alt="react logo spinning" />
          </div>
          <p>Wellcome to the react exercises page, fell free to checkout all static pages exercises that I have made in my courses </p>
          <ul>
            <li><a href="/react-exercises/exercise1">Exercise 1</a></li>
          </ul>
        </div>
    )
}