import React, {useState} from 'react';
// import Alert from './Alert';

function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [address, setAddress] = useState("");

    // const [alert, setAlert] = useState(null);

    // const showAlert = (message, type) => {
    //     setAlert({
    //         msg: message,
    //         type: type
    //     })
    //     setTimeout(() => {
    //         setAlert(null);
    //     }, 3000);
    // }

    const SignUpButton = () => {
        fetch("https://ncllp.herokuapp.com/api/signup/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, email: email, password: password, password2: password2, address: address})
        }).then((resp) => {
            window.location.href = '/login';
        });
        setAddress("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setUsername("");
    }

  return (
    <div className="col-6 mx-auto">
        {/* <Alert alert={alert}/> */}
        <div className="card">
            <div className="card-header">
                <h5>Signup Form</h5>
            </div>
            <div className="card-body">
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Confirm Password</label>
                    <input type="password" onChange={e => setPassword2(e.target.value)} value={password2} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Address</label>
                    <input type="text" onChange={e => setAddress(e.target.value)} value={address} className="form-control"/>
                </div>
            </div>
            <div className="card-footer">
                <button type='button' onClick={SignUpButton} className='btn btn-success'><i className="bi bi-plus-circle"></i> Signup</button>
            </div>
        </div>
    </div>
  )
}

export default SignupForm