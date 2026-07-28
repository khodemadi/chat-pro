
import React,{useEffect,useState} from 'react';
import {io} from 'socket.io-client';

const socket=io('http://localhost:5000');

export default function App(){
 const [name,setName]=useState('');
 const [msg,setMsg]=useState('');
 const [messages,setMessages]=useState([]);
 const [users,setUsers]=useState([]);

 useEffect(()=>{
   socket.on('message',(m)=>setMessages(p=>[...p,m]));
   socket.on('onlineUsers',setUsers);
 },[]);

 const join=()=>socket.emit('join',name);
 const send=()=>{
   socket.emit('message',{user:name,text:msg});
   setMsg('');
 };

 return (
  <div style={{padding:20,fontFamily:'sans-serif'}}>
   <h1>Pro Chat</h1>
   <input placeholder="نام" onChange={e=>setName(e.target.value)}/>
   <button onClick={join}>ورود</button>
   <h3>آنلاین: {users.length}</h3>
   <div>
     {messages.map((m,i)=><div key={i}><b>{m.user}</b>: {m.text}</div>)}
   </div>
   <input value={msg} onChange={e=>setMsg(e.target.value)} />
   <button onClick={send}>ارسال</button>
  </div>
 )
}
