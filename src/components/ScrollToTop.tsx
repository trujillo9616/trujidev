import React, { useEffect, useState } from 'react';

interface ScrollToTopProps {

}

const ScrollToTop: React.FC<ScrollToTopProps> = ({  }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [])

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className='scroll_up'
          data-aos='fade-left'
          data-aos-duration='1200'
        >
          <img src='/img/arrow-up.svg' alt='scroll-up' />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
