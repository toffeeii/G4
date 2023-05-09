import React from 'react';
import './people.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram,  faGithub} from '@fortawesome/free-brands-svg-icons';
import Vidhy from './photos/Vidhy.jpeg'
function Vidhya() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="courses-container"
      style={{
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <button className="back-button" color='black' onClick={handleBack}>{"<"}</button>
      <div className="image-container">
        <img className="profile-image" src={Vidhy} alt="" />
      </div>
      <h1>Vidhya</h1>
      <div className="quote-box">
        <p>"Your quote goes here"</p>
      </div>
      <p>content goes here</p>
      <div className="social-icons">
        <a href="https://in.linkedin.com/in/vidhya-e-n-2585131b9" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com/vidhya_en?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:envidhya99@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/vidhyaen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>

      </div>
    </div>
  );
};

export default Vidhya;
