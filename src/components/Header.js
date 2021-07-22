import logo from './../images/header-logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
            <img 
                className="header__logo" 
                src={logo} 
                alt="логотип" 
                />
            </div>
        </header>
    );
}

export default Header;