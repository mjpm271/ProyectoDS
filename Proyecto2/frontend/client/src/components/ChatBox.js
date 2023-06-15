import React from 'react'
import {Avatar, Image} from 'antd'


export default function ChatBoxReceiver({user,  msg}) {
    // console.log('prop persona:', user.Persona.Persona)
    // const Persona1 = JSON.parse(user.Persona.Persona)
    // console.log('prop mensaje:', msg)
    return (
        <div style={{display:'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
            
            <p style={{padding:10, backgroundColor:'#dcf8c6', borderRadius:10, maxWidth:'60%'}}>
                <strong style={{fontSize:13}}>
                    {user}
                </strong>
                <br></br>
                {msg}
            </p>
        </div>
    )
}

export function ChatBoxSender({user ,msg}) {
    // console.log('prop persona:', user.Persona.Persona)
    // const Persona1 = JSON.parse(user.Persona.Persona)
    // console.log('prop mensaje:', msg)
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
            
            
            <p style={{ padding: 10, backgroundColor: '#4E5485', borderRadius: 10, maxWidth: '60%' , color:'white'}}>
                <strong style={{ fontSize: 13 }}>
                    {user}
                </strong>
                <br></br>
                {msg}
            </p>
        </div>
    )
}