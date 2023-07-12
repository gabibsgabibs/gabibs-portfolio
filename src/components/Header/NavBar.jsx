import React from 'react';

function NavBar() {
    return (
      <nav className="h-screen w-screen grid place-items-center text-lg text-white font-medium bg-midblue border-lightblue border-b-[4px] md:flex md:h-full md:border-none xl:text-xl">
        <a className="grid place-items-center border-lightblue border-b-[2px] w-1/2 h-full md:border-none" href="/">Home</a>
        <a className="grid place-items-center border-lightblue border-b-[2px] w-1/2 h-full md:border-none" href="#about">Sobre</a>
        <a className="grid place-items-center border-lightblue border-b-[2px] w-1/2 h-full md:border-none" href="#curriculum">Currículo</a>
        <a className="grid place-items-center w-1/2 h-full" href="/projects">Projetos</a>
      </nav>
  );
}

export default NavBar;