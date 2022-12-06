import { useState } from "react";
import React from "react";

let initvalue = {
  text: "",
  id: "",
  status: false,
};

const About = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  // const ref=useRef()
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    if (text === "") {
      return;
    }
    const newData = {
      ...initvalue,
      text,
      id: new Date(),
    };
    setText("")
    setData([...data, newData]);
  };

  const handleDelete = del_id => {
    setData(data.filter(ele => ele.id !== del_id));
  };

  const handletog = (tog_id ,status)=> {
   const updatedData=data.map((ele)=>{
    if(ele.id===tog_id){
      return {...ele,status:!status}
    }
    else {
      return {...ele}
    }
   })
   
   setData(updatedData)
  };

  console.log(data);
  return (
    <div className="w-2/4 m-auto border-8">
      <h1 className="my-5 text-3xl font-bold underline">Todo App</h1>
    
      <h1 className="mx-2 my-4 text-lg font-bold underline"  >Enter Something: - {text}</h1>
      <input
        onChange={handleChange}
        className="mx-4 text-white bg-black border-none rounded " value={text}
      />
      <button onClick={handleAdd} className="px-4 text-white bg-black rounded ">
        Add
      </button>
      <ul className="my-5">
        {data.map((ele) => {
          return (
            <li className="m-4" key={ele.id}>
              <button
               
                className="px-4 text-white bg-black">
                {ele.text}
              </button>{" "}
              <button  onClick={() => handletog(ele.id,ele.status)} className="px-4 mx-4 text-white bg-black">
                {ele.status ? "Done" : "Not Done"}
              </button>
              <button className="px-4 text-white bg-black"
              onClick={()=>handleDelete(ele.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
