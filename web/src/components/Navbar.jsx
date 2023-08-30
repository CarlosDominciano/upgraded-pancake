import imgLogo from "../assets/images/logo.png";
import '../assets/css/navbar.css';

function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div>
                        <img className="logo" src={imgLogo} alt="La casa de papel's Logo"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;