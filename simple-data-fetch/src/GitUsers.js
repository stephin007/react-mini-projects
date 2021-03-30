import React, { useState, useEffect } from 'react'

const url = "https://api.github.com/users";

const GitUSers = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json()
        // console.log(users) uncomment this line to see the results in the console
        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
      <>
            <h3>Github Users</h3>
            <p>This is the list of the first Github Users</p>
            <ul className="users">
                {
                    users.map((user) => {
                        const { id, login, avatar_url, html_url } = user
                        return <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>More</a>
                            </div>
                        </li>
                    })
                }
            </ul>
      </>
    );
}

export default GitUSers
