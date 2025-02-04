import '../../Stylesheet/shared/Header.css'

/*-------- Assets -------- */
import logo from '../../assets/img/logo192.png'
import logoCompleta from '../../assets/img/logoCompleta.png'

/* -------- Component -------- */
export function Header() {

    return (
      <header>
        
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Exercises</h1>
        </div>

        <a href="https://github.com/kkphoenixgx"> <img className='kkpPhoto' src={logoCompleta} alt="kkphoenix"/> </a>

      </header>
    )
}