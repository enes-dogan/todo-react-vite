import { useState } from 'react';
import './styles.css';

// eslint-disable-next-line no-unused-vars
export default function App(params) {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem.trim()) {
      setTodos((todosParam) => {
        // setTodos first parameter is assigned to the state value
        // which is the current value for whatever the current state is (empty initially)
        return [
          // we return setTodos because if we use 2nd time it doesn't work otherwise
          ...todosParam,
          { id: crypto.randomUUID(), title: newItem, completed: false },
        ];
      });
    }

    setNewItem('');
  }

  function toggleTodo(id, completed) {
    setTodos((todosParam) => {
      return todosParam.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((todosParam) => {
      return todosParam.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={newItem}
            onChange={function (event) {
              setNewItem(event.target.value);
            }}
            type='text'
            id='item'
          />
          <button className='btn'>Add</button>
        </div>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && 'No todos'} 
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked)
                  }
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='btn btn-danger'
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
