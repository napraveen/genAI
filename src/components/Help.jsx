import React from 'react';

import { useState } from 'react';
import arrowMark from '../images/arrowmark.png';
const Help = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };
  const questionsAndAnswers = [
    {
      question: 'What is Gen AI?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
    {
      question: 'lorem ipsum dolor sit amet?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
    {
      question: 'lorem ipsu dolor sit met lorem ipsum?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
    {
      question: 'lorem ipsum dolor sit amet lorem psum dolr site amet lorem?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
    {
      question: 'lorem ipsum dolor sit amet loremr ipsum?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
    {
      question: 'lorem ipsum dolor sit amet?',
      answer:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.',
    },
  ];
  return (
    <div>
      <div className="home-help">
        <h2 id="need-help">Need Help?</h2>
        <p id="need-help-desc">
          Don't worry, we got you. Here are some answers for<br></br> your
          questions.
        </p>

        <div className="home-help-dropdown-container">
          {questionsAndAnswers.map((qa, index) => (
            <div className="home-help-dropdown" key={index}>
              <div
                className="home-help-dropdown-q"
                onClick={() => toggleDropdown(index)}
              >
                <p>{qa.question}</p>
                <img src={arrowMark} alt="" className='arrowmark'/>
              </div>
              {dropdownOpen === index && (
                <p className="home-help-dropdown-a">{qa.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
