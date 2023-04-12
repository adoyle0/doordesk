import { Outlet, Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="content-container">
                <header>
                    <h1>DoorDesk</h1>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>[Home]</Link>
                        </li>
                        <li>
                            <Link to={`/blog`}>[Blog]</Link>
                        </li>
                        <li>
                            <Link to={`/projects`}>[Projects]</Link>
                        </li>
                        <li>
                            <Link to={`/games`}>[Games]</Link>
                        </li>
                        <li>
                            <Link to={`/cartman`}>[Cartman]</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Header
