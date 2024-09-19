import React from "react";
import { useAuthContext } from "../../context/Authcontext";
import { extractTime } from "../../utils/etractTime";

import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTIme=extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTIme}</div>
		</div>
	);
};
export default Message;

// import React from 'react'
// import { useAuthContext } from '../../context/Authcontext'
// import useConversation from '../../zustand/useConversation';

// const Message = ({message}) => {
//     const {authUser}=useAuthContext();
//     const {selectedConversation}=useConversation();
//     const fromMe= message.senderId===authUser._id;
//     const chatClassName=fromMe ? 'chat-end' : 'chat-start';
//     const profilepic=fromMe ? authUser.profilepic:selectedConversation?.profilepic;
//     const bubbleBgColor=fromMe? 'bg-blue-500':"";
//   return (
//         <div className={`chat ${chatClassName}`}>
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full">
//                 <img
//                     alt="Tailwind CSS chat bubble component"
//                     src={profilepic} />
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items center '>12:42</div>

//         </div>

//   )
// }

// export default Message