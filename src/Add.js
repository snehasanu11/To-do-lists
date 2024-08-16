import React from 'react'

const Add = ({newItem,setNewItem,handleSubmit}) => {
   

    
  return (
    <div className='add'>
        <form onSubmit={handleSubmit}>
            <label>Add Items :
            </label>
            <input type="text" className="input" placeholder='add list items...' value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
            <button type="Submit">Add</button>
        </form>
    </div>
  )
}

export default Add