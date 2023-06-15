import React, { useEffect, useState, useRef } from 'react'
//import socketIOClient from "socket.io-client";
import axios from 'axios';
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import {  useParams, useLocation } from 'react-router-dom';
import { message } from 'antd';
//import UserLogin from './UserLogin';
/*
import {
    doc,
    setDoc,
    collection,
    serverTimestamp,
    query,
    onSnapshot,
    orderBy,

} from 'firebase/firestore';
*/
//import db from "./firebaseConfig/firebaseConfig.js"


export default function ChatContainer() {

    //let socketio = socketIOClient("http://localhost:5001")
    const [chats, setChats] = useState([])
    const { IDChat } = useParams();
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)

    const id = info.IDpersona
    const foto = info.Foto
    const nombre = info.NombreCompleto
    const carnet = info.Carnet
    const [items, setItems] = useState([]);
    // const [user, setUser] = useState(localStorage.getItem("user"))
    // const avatar = localStorage.getItem('avatar')
    // const chatsRef = collection(db, "Messages")
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [items])

    useEffect(() => {
        axios.post(`http://localhost:4000/chat/LeerMensajesPorIDChat`, {
          IDChat:IDChat
        }
        , {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
            .then((response) => {
                console.log("chats",response.data)
                setItems(response.data);
            })
    }, [IDChat]);

    // useEffect(() => {
    //     socketio.on('chat', senderChats => {
    //         setChats(senderChats)
    //     })
    // })


    // useEffect(() => {

    //     const q = query(chatsRef, orderBy('createdAt', 'asc'))

    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         const fireChats = []
    //         querySnapshot.forEach(doc => {
    //             fireChats.push(doc.data())
    //         });
    //         setChats([...fireChats])
    //     })
    //     return () => {
    //         unsub()
    //     }

    // }, [])

    // function addToFirrebase(chat) {
    //     const newChat = {
    //         foto,
    //         createdAt: serverTimestamp(),
    //         user,
    //         message: chat.message
    //     }

    //     const chatRef = doc(chatsRef)
    //     setDoc(chatRef, newChat)
    //         .then(() => console.log('Chat added succesfully'))
    //         .catch(console.log)
    // }


    // function sendChatToSocket(chat) {
    //     socketio.emit("chat", chat)
    // }

    function addMessage(chat) {
        // hacer que llame a la ruta
        const newChat = { ...chat, user: localStorage.getItem("user"), foto }
        // addToFirrebase(chat) // routes
        setChats([...chats, newChat])
        //sendChatToSocket([...chats, newChat])
    }

    function crearMensaje(chat){
        console.log('mensaje contenido', chat)
        // const nuevoMensaje = { ... Mensaje: chat.message, Emisor: carnet, Fecha:new Date().toISOString().slice(0, 19).replace('T', ' '),IDSalaChat:IDChat }
        
        // setItems([...chats, nuevoMensaje])
        mensaje(chat)

    }
    const mensaje = (chat) => {
        axios
        .post(
            'http://localhost:4000/chat/EnviarMensaje',
            {
            Carnet:carnet,
            Mensaje: chat.message,
            Fecha: new Date().toISOString().slice(0, 19).replace('T', ' '),
            IDSalaChat: IDChat
            },
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
        .then(response => {
            console.log(response.data);
            
        })
        .catch(error => {
            console.log(error);
        });
        
    };

    // function logout() {
    //     localStorage.removeItem("user")
    //     localStorage.removeItem("foto")
    //     setUser("")
    // }

    function ChatsList() {
        console.log("mensaje",typeof(message))
        return (<div style={{ height: '75vh', overflow: 'scroll', overflowX: 'hidden' }}>
            {
                items.map((chat, index) => {
                    if (chat.Emisor === id) return <ChatBoxSender key={index}   user={chat.NombreCompleto}  msg={chat.Mensaje}/>
                    return <ChatBoxReciever key={index}  user={chat.NombreCompleto}  msg={chat.Mensaje}/>
                })
            }
            <div ref={messagesEndRef} />
        </div>)

    }

    return (
        <div>
            {
                
                    <div>

                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }} >
                            <h4>Username: {nombre}</h4>
                            {/* <strong>Remember to Subscribe to  <a href='https://www.youtube.com/channel/UCmoQtgmJ2SHEAPCAR1Q8TBA'> My Channel</a></strong> */}
                            {/* <p onClick={() => logout()} style={{ color: "blue", cursor: 'pointer' }} >Log Out</p> */}
                        </div>
                        <ChatsList
                        />

                        <InputText addMessage={crearMensaje} />
                    </div>
                     
            }


        </div>
    )
}