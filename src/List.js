import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const List = ({lists,setLists,handleCheck,handleDelete}) => {
   

   

    return (
        <div>
            <h2>To-Do Lists</h2>
            <ul>
                {lists.map(list => 
                    <li key={list.id}>
                        <input 
                            type="checkbox" 
                            checked={list.checked} 
                            onChange={() => handleCheck(list.id)}
                        />
                        {list.item}
                        <FaTrashAlt role="button" tabIndex={0} onClick={() => handleDelete(list.id)} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default List;
