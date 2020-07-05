import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/add';

class ToDo extends Component{

 ToDoList = () => {
const [item,setItem] = useState("buy an apple");
return(
    
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>todo list</h1>
            <br />
            <input  />
        </div>

    </div>
)
     }
}

export default ToDo