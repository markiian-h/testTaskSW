import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Groups() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/groups/'
        }).then(response => {
            setGroups(response.data)
        })
    }, [])

    return (
        <div className="App">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                {groups.map(g =>(
                    <tr>
                        <th scope="row">{g.id}</th>
                        <td>{g.name}</td>
                        <td>{g.description}</td>
                    </tr>
                ))}

                </tbody>
            </table>

        </div>
    );
}

export default Groups;
