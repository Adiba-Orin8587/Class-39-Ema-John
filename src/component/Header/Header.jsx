import './Header.css'
import logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active li" aria-current="page" href="#">Shop</a>
                        </li>
                        <li className="nav-item li">
                            <a className="nav-link li" href="#">Order</a>
                        </li>
                        <li className="nav-item li">
                            <a className="nav-link li" href="#">Order Review</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link li">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;