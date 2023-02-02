import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);


  return (
    <div className="app d-flex justify-content-center align-items-center flex-column">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h4  className='text-white' >Whoop, it's Wednesday 🌝 ☕ </h4>
      </div>


      <div className="input">
        <input type="text"
          onChange={(e) => { setText(e.target.value) }}
          value={text}
          placeholder="🖊️ Add item..." />

        <i className="fas fa-plus"
          onClick={(e) => { setTodo([...todo, { id: Date.now(), text, status: false }]) }}
        ></i>
      </div>

      <div className="todos">
        {
          todo.map((obj, key) => {
            if(!obj.status){
              return (
                <div key={key} className="todo">
                  <div className="left">
                    <input value={obj.status}
                      onClick={(e) => {
                        setTodo(todo.filter((obj2) => {
                          if (obj.id == obj2.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        }))
                      }}
                      type="checkbox" name="" id="" />
                    <p className='m-0'>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"
                      onClick={() => {
                        setTodo(todo.filter((obj2) => {
                          if (obj2.id == obj.id) {
                            obj2.status = 'Deleted'
                          }
                          return obj2
                        }))
                      }}
                    ></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>

      {/* active */}
      <div className="subHeading">
        <br />
        <h4 className='text-white' style={{textAlign:"center"}} >Active</h4>
      </div>
      <div className="todos">
        {
          todo.map((obj, key) => {
            if(obj.status == true){
              return (
                <div key={key} className="todo">
                  <div className="left">
                    <input value={obj.status} 
                     type="checkbox"
                     onClick={()=>{
                       setTodo(todo.filter((obj2) => {
                         if (obj2.id == obj.id) {
                           obj2.status = 'Done';
                         }
                         return obj2;
                       }))
                     }}
                      name="" id=""  />
                    <p className='m-0'>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"
                    onClick={()=>{
                      setTodo(todo.filter((obj2)=>{
                        if(obj2.id==obj.id){
                          obj2.status=false
                        }
                        return obj2
                      }))
                    }}
                    ></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>



      {/* Done */}
      <div className="subHeading">
        <br />
        <h4 className='text-white' style={{ textAlign: "center" }} >Done</h4>
      </div>
      <div className="todos">
        {
          todo.map((obj, key) => {
            if (obj.status == "Done") {
              return (
                <div key={key} className="todo">
                  <div className="left">
                    <p className='m-0'>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"
                      onClick={() => {
                        setTodo(todo.filter((obj2) => {
                          if (obj2.id == obj.id) {
                            obj2.status = true
                          }
                          return obj2
                        }))
                      }}
                    ></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>

      {/* Deleted */}
      <div className="subHeading">
        <br />
        <h4 className='text-white' style={{ textAlign: "center" }} >Deleted</h4>
      </div>
      <div className="todos">
        {
          todo.map((obj, key) => {
            if (obj.status == "Deleted") {
              return (
                <div key={key} className="todo">
                  <div className="left">
                    <p className='m-0'>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"
                      onClick={() => {
                        setTodo(todo.filter((obj2) => {
                          if (obj2.id == obj.id) {
                            obj2.status = false
                          }
                          return obj2
                        }))
                      }}
                    ></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default App;