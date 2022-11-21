import '../Stylesheet/Header.css'

/*-------- Assets -------- */
import logo from '../assets/img/logo192.png'
import mePhoto from '../assets/img/fotoPerfil.jpg'

/* -------- Component -------- */
export function Header() {

    return (
      <header>
        
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Exercises</h1>
        </div>

        <a href="https://github.com/kkphoenixgx"> <img className='kkpPhoto' src={mePhoto} alt="kkphoenix"/> </a>

      </header>
    )
}