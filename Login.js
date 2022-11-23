import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [first, setfirst] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/").then(
      (ant) => ant.json()).then((json => {
        setfirst(json)
      })
      )
  }, [])
  const navigate = useNavigate();
  return (
    <div>
      {
        first.map(item => {
          return (
            <>
              <div className='container'>
                <div className='row'>
                  {item.name}<br></br>
                  {item.username}<br></br>
                  {item.email}
                </div>
                <div className="b">
                  <button>create</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  );
}
export default Login;