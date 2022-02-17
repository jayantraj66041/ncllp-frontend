import React, { useEffect, useState } from 'react'

function Table() {
    const [data, setData] = useState({});

    const deleteButton = (k) => {
        console.log(k);
        fetch(`https://ncllp.herokuapp.com/api/action/${k}/`, {
            method: "DELETE",
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        });
    }

    const logoutButton = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    // const [editModalData, setEditModalData] = useState({});
    const [pk, setPk] = useState(null);
    const [editUsername, setEditUsername] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editAddress, setEditAddress] = useState("");
    const editModalButton = (k) => {
        fetch(`https://ncllp.herokuapp.com/api/action/${k}/`, {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }).then(resp => {
            resp.json().then(result => {
                setEditUsername(result.username);
                setEditEmail(result.email);
                setEditAddress(result.address);
                setPk(result.pk);
            })
        });
    }

    const updateModalButton = (pk) => {
        fetch(`https://ncllp.herokuapp.com/api/action/${pk}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({username: editUsername, email: editEmail, address: editAddress})
        }).then((resp) => {
            console.log("Done");
        });
    }

    useEffect(() => {
        fetch("https://ncllp.herokuapp.com/api/dashboard/", {
            method: "GET",
            headers: { "Content-Type": "application/json", 'Authorization': "Bearer " + localStorage.getItem('token') }
        })
            .then(resp => {
                resp.json().then(result => {
                    setData(result);
                    console.log(data);
                })
            })
    }, [data])
    return (
        <div className="col-10 mx-auto">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7">
                            <p><strong>Username:</strong> {data.username}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                            <p><strong>Address:</strong> {data.address}</p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <button onClick={() => logoutButton()} className="btn btn-primary btn-lg mt-4"><i className='bi bi-power'></i> LogOut</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table mt-2 table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users && (data.users).map(d =>
                        <tr key={d.pk}>
                            <td>{d.pk}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                            <td>{d.address}</td>
                            <td>
                                <button type='button' onClick={(e) => editModalButton(d.pk)} data-bs-toggle="modal" data-bs-target="#editModal" className="btn btn-info me-2">Edit</button>
                                <button type='button' onClick={(e) => deleteButton(d.pk)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="modal fade" id='editModal' data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-2">
                                <label htmlFor="" className="small text-muted">Username</label>
                                <input type='text' onChange={e => setEditUsername(e.target.value)} className="form-control" value={editUsername}/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="small text-muted">Email</label>
                                <input type='email' onChange={e => setEditEmail(e.target.value)} className="form-control" value={editEmail}/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="small text-muted">Address</label>
                                <input type='text' onChange={e => setEditAddress(e.target.value)} className="form-control" value={editAddress}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={(e) => updateModalButton(pk)} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table