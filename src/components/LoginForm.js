import React, {useState} from 'react'
// import { Redirect } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const LogInButton = () => {
        fetch("https://ncllp.herokuapp.com/api/login/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(resp => {
            // console.log("----------------")
            resp.json().then(result => {
                console.log("test");
                localStorage.setItem("token", result.access);
                window.location.href = '/dashboard';
            })
            // localStorage.setItem('token', resp.data.token);
        })
        .catch(error => {
            // console.log(error.json());
        });
        setPassword("");
        setUsername("");
    }
  return (
    <div className="col-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h5>Login Form</h5>
            </div>
            <div className="card-body">
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control"/>
                </div>
            </div>
            <div className="card-footer">
                <button type='button' onClick={LogInButton} className='btn btn-success'><i className="bi bi-key"></i> LogIn</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm