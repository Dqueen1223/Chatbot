import React, { useState } from 'react';

/**
 * @name ChatBot
 * @description displays chatbot and its messages.
 * @returns component
 */
const Chatbot = () => {
  const [lastOption, setLastOption] = useState([]);
  const [previousOption, setPreviousOption] = useState([]);
  const [option, setOption] = useState([]);

  const handleClick = (Choice) => {
    setPreviousOption(option);
    setOption(Choice);
  };

  return (
    <div className="chatbox">
      <p>
        Hello user, how may I assist you today?
      </p>
      {(option === 'About Me?' || previousOption === 'About Me?') && (
      <div>
        <p className="user">
          About you?
        </p>
        <p>
          I knew the moment I solved my first problem that programming was for me, solving difficult
          problems with a team of people is very inspiring and something I am proud of accomplishing
          .
          <br />
          I am eager to learn much more about programming and work on many other projects.
        </p>
      </div>
      )}
      {(option === 'I want to talk to the bot' || previousOption === 'I want to talk to the bot') && (
      <>
        <>
          <p className="user">I want to talk to the bot</p>
          <p>
            Beep Boop beepidy boop.
          </p>
        </>
        {option === 'I want to talk to the bot' && (
        <>
          <button onClick={() => handleClick('About Alfred?')} type="button">About Alfred?</button>
        </>
        )}
      </>
      )}
      {(option === 'About Alfred?' || previousOption === 'About Alfred?') && (
      <div>
        <p className="user">
          About Alfred?
        </p>
        <p>
          Alfred was a bot designed by me, sadly all he can say is beep boop.
        </p>
      </div>
      )}
      {option === 'Skills' && (
        <>
          <p className="user">What are your skills?</p>
          <p>
            I am currently adept in C#, and Javascript using React and ASP.Net, I am always learning
            more about them and plan to learn Java and Python.
            I am also familiar with scrum techniques, as I have worked with them in the past.
          </p>
        </>
      )}
      {lastOption === 'Alfreds Skills?' && (
      <>
        <p className="user">Alfreds Skills?</p>
        <p>
          01010011 01100001 01100100 01101100 01111001 00100000 01101110 01101111 00100000
          01101111 01101110 01100101 00100000 01101011 01101110 01101111 01110111 01110011
          00100000 01110111 01101000 01100001 01110100 00100000 01001001 00100111 01101101
          00100000 01110011 01100001 01111001 01101001 01101110 01100111
        </p>
      </>
      )}
      {option.length === 0 && (
      <>
        <button onClick={() => setOption('About Me?')} type="button">About Me?</button>
        <button onClick={() => setOption('I want to talk to the bot')} type="button">I want to talk to the bot</button>
      </>
      )}
      {option === 'About Me?' && (<button onClick={() => handleClick('Skills')} type="button">Skills</button>)}
      {option === 'About Alfred?' && lastOption.length === 0 && (<button onClick={() => { setLastOption('Alfreds Skills?'); }} type="button">Alfreds Skills?</button>)}
    </div>
  );
};

export default Chatbot;
