import React from 'react'

function SignupForm() {
  return (
    <div className="col-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h5>Signup Form</h5>
            </div>
            <div className="card-body">
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Username</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Confirm Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="small text-muted">Address</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="card-footer">
                <button type='button' className='btn btn-success'><i class="bi bi-plus-circle"></i> Signup</button>
            </div>
        </div>
    </div>
  )
}

export default SignupForm