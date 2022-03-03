

import React, {useState, useEffect} from 'react'

const Users = () => {

    const[myUsers, setMyUsers] = useState([]);

    const fetchUsersData = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            console.log(response);
            return response.json();
        }).
        then((result) => {
            console.log(result);
            setMyUsers(result);

        });
    }

    useEffect(() => {
       fetchUsersData();
       document.title = "Users List from fetch API"
    }, []);

  return (
        <div className="row txt-sm bdr-btm g-0">
             <table>
             {
                 
                myUsers.map((myUser) => 
                    <tr key={myUser.id}>
                        <td>{ myUser.id }</td>
                        <td><img src={myUser.thumbnailUrl} alt="" /></td>
                        <td>{ myUser.title }</td>
                        
                    </tr>     
                )
                
            }
            
            </table>
        </div>
  );
}

export default Users;
