import React from 'react';

interface SocialTwoProps {
  socialMedia: { name: string, link: string }[];
}

const SocialTwo: React.FC<SocialTwoProps> = ({ socialMedia }) => {
    return (
      <>
        <ul className='social social-default position-relative'>
          {socialMedia.map((val, idx) => (
            <li key={idx}>
              <a href={val.link} target='_blank' rel='noopener noreferrer'>
                <img 
                  className='svg'
                  src={`/img/svg/social/${val.name}.svg`}
                  alt={val.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </>
    );
}

export default SocialTwo;
