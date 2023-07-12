import React from "react";

import Header from '../components/Header/Header';
import InitialContent from '../components/InitialContent/InitialContent';
import About from '../components/About/About';

function Home() {
	return (
    <div className='bg-white dark:bg-darkblue'>
      <Header />
			<InitialContent />
      <About />
    </div>
  );
}

export default Home;
