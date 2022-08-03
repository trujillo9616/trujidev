import React, { useEffect } from 'react';
import Routing from './router/Routes';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='shane_tm_all_wrap'>
      <ScrollToTop />
      <Routing />
    </div>
  )
}

export default App;
