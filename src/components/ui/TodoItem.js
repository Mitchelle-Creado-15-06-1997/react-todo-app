import React from 'react';
import CheckBox from './CheckBox';
export default function TodoItem(props) {
    const {data, delTodo, dateChange, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const handleDelete = () => delTodo(data.id);
    const addDate = (event) => dateChange(data.id, event.target.value);
    
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const btnStyle = {
        float: 'right', 
        marginLeft: "10px",
        border: "0"
    }
    
    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> 
                    {data.text}  on
                    <button onClick={handleDelete} style={btnStyle}>
                        x
                    </button>
                    <input type="date" value={data.date} onChange={addDate} data-date-format="dd-mm-yyy" style={btnStyle} placeholder="Enter date"/>
                </label>
            </div>
        </li>
    );
}


  
