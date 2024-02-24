import { useState } from "react";
const Users = ({name, location}) => {
    const [abc] = useState(0);
    const [abcd] = useState(5);
    return (
        <div className="userDetails">
            <h1>My name is {name}</h1>
            <p>my value is of abc is: {abc}</p>
            <p>my value is of abcd is: {abcd}</p>
            <span>My Location is {location}</span>
        </div>
    );
}
export default Users;