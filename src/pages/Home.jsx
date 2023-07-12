import React from "react";

import Header from '../components/Header/Header';
import InitialContent from '../components/InitialContent/InitialContent';

function Home() {
	return (
    <div className='bg-white dark:bg-darkblue'>
      <Header />
			<InitialContent />
    </div>
  );
}

export default Home;
