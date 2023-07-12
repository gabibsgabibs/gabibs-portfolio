import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/Context";
import { SunIcon } from "./Assets/SunIcon";
import { MoonIcon } from "./Assets/MoonIcon";
import { MenuIcon } from "./Assets/MenuIcon";
import NavBar from "./NavBar";

function Header() {
	const { toggleDarkMode, isDark } = useContext(ThemeContext);
	const [isMenuOpen, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu(!isMenuOpen);
		console.log("entrou no handle menu");
	};

	return (
		<header>
			<nav className="bg-midblue fixed top-0 left-0 right-0 h-20 flex justify-around place-items-center text-white border-lightblue border-b-[4px] z-1">
				<a className="text-4xl font-semibold" href="/" >
					&lt;GB/&gt;
				</a>
        <div className="hidden md:flex w-1/2">
          <NavBar />
        </div>
				<div className="flex justify-around place-items-center w-1/4 md:w-fit">
					<button onClick={toggleDarkMode}>
						{isDark ? <MoonIcon /> : <SunIcon />}
					</button>
					<button className="md:hidden" onClick={handleMenu}>
						<MenuIcon />
					</button>
				</div>
			</nav>
			<div className="mt-20 z-0 md:hidden">{isMenuOpen ? <NavBar /> : null}</div>
		</header>
	);
}

export default Header;
