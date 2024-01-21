import style from './Navbar.module.css'
import { BrowserRouter as Router,Link} from 'react-router-dom'

function Navbar(){

    return(
        <div className={style.container}>
        <nav className={style.nav}>
            <div className={style.logo}>
            <h1>Sayyed Portfolio</h1>
            </div>
            <Router>
            <ul>
                <Link to='#' className={style.link}>Home</Link>
                <Link to='#' className={style.link}>Skills</Link>
                <Link to='#' className={style.link}>Education</Link>
                <Link to='#' className={style.link}>Contact</Link>
            </ul>
            </Router>
        </nav>
        <hr/>
        </div>
    )
}

export default Navbar