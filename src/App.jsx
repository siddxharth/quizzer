import './App.css';
import { Link, Outlet} from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <Link to="/highscores" className='fas fa-hand-point-left fa-lg'>Highscores</Link>
            <div>
                Time: NA
            </div>
        </nav>
    );
}

export default function App() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

