import './App.css';
import {useCallback, useState} from "react";

function App() {
  const useInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
      setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
  };

  const [todos, setTodos] = useState([
    {id:1, content: 'react를 배워봅시다.' },
    {id:2, content: 'useState를 배워봅시다'},
    {id:3, content: '자바스크립트를 배워봅시다' },
  ]);

  const [content, onChangeContent, setContent] = useInput('');

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
    };
    setTodos([...todos, newTodo]);
    setContent('');
  };

  return (
    <div className="App">
      <div className="input-group">
        <input type="text" name="title" className="add-input input-body" value={content} onChange={onChangeContent} />
        <button className="add-button" type="submit" onClick={addTodoHandler}>추가하기</button>
      </div>
      <h1 className='title'>Todo List</h1>
      <div className='todo-container'>
        {todos.map((todo)=>
          <div className='todo-card' key={todo.id}>{todo.content}</div>
        )}
      </div>
    </div>
  );
}

export default App;
