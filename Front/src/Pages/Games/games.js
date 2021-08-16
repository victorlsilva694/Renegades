import './games.css';
import HeaderDash from '../Dashboard/Header/HeaderDash';

function Games() {
    const nome = sessionStorage.getItem('nome');
    return (
        <HeaderDash />
    );
}

export default Games;