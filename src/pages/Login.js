import React, { useState } from 'react'

export default function Login() { 
    //State
    // const [stateVariableName,setFunction] = useState(initialValue);
    //1. State Variables
    const [email,setEmail] = useState('admin@gmail.com');
    const [password,setPassword] = useState('admin');

    //2. Function definations
    let submit = ()=>{
        console.log('Submitted');

        let data = {
            "email":email,
            "password":password
        }

        fetch('http://65.109.113.62:3000/api/auth/login',{
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log('data',data)
        }).catch((err)=>{
            console.log('err',err)
        });
    }
    

    //3. Return statements
    // Every function return something
    return (
        <main>
            <form className='col-6 offset-3 mt-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
            </form>

        </main>
    )
  }

