import React from 'react'
import {Avatar, Image} from 'antd'


export default function ChatBoxReceiver({user, msg}) {
    console.log('prop persona:', user.Persona.Persona)
    const Persona1 = JSON.parse(user.Persona.Persona)
    console.log('prop mensaje:', msg)
    return (
        <div style={{display:'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Avatar
                size={50}
                src={<Image
                    src={Persona1.photo}
                    style={{
                        objectFit: 'cover',
                        width: 45,
                        height: 45,
                        borderRadius: '100%'
                    }}
                    preview= {false}
                />}
            />
            <p style={{padding:10, backgroundColor:'#dcf8c6', borderRadius:10, maxWidth:'60%'}}>
                <strong style={{fontSize:13}}>
                    {Persona1.name}
                </strong>
                <br></br>
                {msg}
            </p>
        </div>
    )
}

export function ChatBoxSender({user, msg}) {
    console.log('prop persona:', user.Persona.Persona)
    const Persona1 = JSON.parse(user.Persona.Persona)
    console.log('prop mensaje:', msg)
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <Avatar
                size={50}
                src={<Image
                    src={Persona1.photo}
                    style={{
                        objectFit: 'cover',
                        width: 45,
                        height: 45,
                        borderRadius: '100%'
                    }}
                    preview={false}
                />}
            />
            <p style={{ padding: 10, backgroundColor: '#fff', borderRadius: 10, maxWidth: '60%' }}>
                <strong style={{ fontSize: 13 }}>
                    {Persona1.name}
                </strong>
                <br></br>
                {msg}
            </p>
        </div>
    )
}