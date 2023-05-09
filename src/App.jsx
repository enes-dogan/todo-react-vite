import { useState } from 'react';
import './styles.css';

export default function App(params) {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            type='text'
            id='item'
          />
          <button className='btn'>Add</button>
        </div>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox' />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  );
}
