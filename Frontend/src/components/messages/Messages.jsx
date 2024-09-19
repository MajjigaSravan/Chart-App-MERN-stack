import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";


const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
  //console.log("messages :",messages);

  // console.log("Message IDs:", messages.map(msg => msg._id));
	
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				// messages.map((message) => (
				// 	<div key={message._id} ref={lastMessageRef}>
				// 		<Message  message={message} />
				// 	</div>
				// )) 
        messages.map((message, idx) => {
          // Assign the ref to the last message only
          const isLastMessage = idx === messages.length - 1;
          return (
            <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
              <Message  message={message} />
            </div>
          );
        })
        }

			{/* {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} */}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

// import React from 'react'
// import Message from './Message'
// import useGetMessages from '../../hooks/useGetMessages'
// import MessageSkeleton from '../skeletons/MessageSkeleton';

// const Messages = () => {
//   const {loading,messages}=useGetMessages();
//   console.log("messages:",messages);
//   console.log(messages.map(message => message._id));

//   return (
//     <div className='px-4 flex-1 overflow-auto'>

//         { !loading && messages.length >0 && messages.map((message)=>(
//           <Message key={message._id} m={message}/>
//         ))}

//         {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}

//         {!loading && messages.length===0 && (
//           <p className='text-center'>Send a message to start the conversation</p>
//         )}

//     </div>
//   )
// }

// export default Messages