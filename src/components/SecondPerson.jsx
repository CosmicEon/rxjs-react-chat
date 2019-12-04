import React, { useState, useLayoutEffect } from 'react';
import Message from './Message';
import chatStore from '../store/chat';

const SecondPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState); // subscribes for the setter
    chatStore.init()
  }, [])

  const onFormSubmit = e => {
    e.preventDefault();

    const message = {
      person: 'second-person',
      text: e.target.elements['message-input'].value.trim(),
    };

    chatStore.sendMessage(message)
    document.getElementById('message-form').reset()
  }

  const onClearChat = () => {
    chatStore.clearChat()
  }

  return (
    <div className='container'>
      <h2 style={{ float: 'right' }}>Cortana</h2>
      <div className="chat-box">
        {chatState.data.map((message, ind) => (
          <Message index={ind}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </Message>
        ))}
      </div>
      <form id="message-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="message-input"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button>
      </form>
      <button className="clear-button" onClick={onClearChat}>
        Clear Chat
      </button>
    </div>
  );
}

export default SecondPerson;