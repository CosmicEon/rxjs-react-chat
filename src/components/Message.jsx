import React, { useEffect, useRef } from 'react';


const Message = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  }, []);

  return (
    <div key={props.index} ref={ref}>
      {props.children}
    </div>
  )
}

export default Message;