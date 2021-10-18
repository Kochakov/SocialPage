import React from 'react';
import h from "./Header.module.css"


const Header = () => {
    return (
        <header className={h.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png' />
        </header>
    )
}

export default Header;