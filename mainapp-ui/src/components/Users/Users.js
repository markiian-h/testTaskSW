import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Cookies} from "react-cookie";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});


function Users() {
    axios.defaults.xsrfHeaderName = "X-TOKENIZERS";
    axios.defaults.xsrfCookieName = "CSRF-TOKEN";


    const csrfCookie = Cookies;

    const [users, setUsers] = useState([])

    useEffect(() => {
        // axios({
        //     method: "GET",
        //     url: 'http://127.0.0.1:8000/api/users/'
        // }).then(response => {
        //     setUsers(response.data)
        // })
        async function getUsers() {
            const response = await client.get('/users/').then(response => {
                setUsers(response.data)
            });
        }

        getUsers();
    }, [])

    async function deleteUser(id) {
        await client({
            method: 'DELETE',
            url: `/users/${id}`,
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            });
        alert("User deleted!");
        // setUsers();
    }

    async function Create() {
        await client.post(`/users/`, {
                username: 'marko', group: '2'
            },
            {
                headers: {
                    'X-CSRFTOKEN': csrfCookie,
                },
            },).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            });
    }

    return (
        <div className="App">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User nickname</th>
                    <th scope="col">Created</th>
                    <th scope="col">Group</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u => (
                    <tr>
                        <th scope="row">{u.id}</th>
                        <td>{u.username}</td>
                        <td>{u.created}</td>
                        <td>{u.group.name}</td>
                        <td><Link className="btn btn-danger" onClick={() => deleteUser(u.id)}>Delete</Link></td>
                        <td><Link className="btn" onClick={() => Create()}>Create</Link></td>
                    </tr>
                ))}


                </tbody>
            </table>

        </div>
    );
}

export default Users;
