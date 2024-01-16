import React, { useState } from "react";
import "../styles/Contact.css";
import toast from "react-hot-toast";
// import { Button,Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const[disbale,setdisablebtn]=useState(false);

  //  second method for getting data
  // const [inputs,setinputs]=useState({name:"",email:"",message:""})

  // const changeHandler=(e)=>{
  //   // console.log(e.target.name);
  //   // console.log(e.target.email);
  //   // console.log(e.target.message);
  //   // second type to get data
  // setinputs({...inputs,[e.target.name]:e.target.value});
  // console.log(inputs)
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    setdisablebtn(true);

    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      toast.success("Message is sent", {
        style: {
          color: "green", 
          width: "100%", 
          textAlign: "center", 
        },
      });
      setdisablebtn(false);
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      toast.error("Error", {
        style: {
          margin: "10%",
          color: "red",
          width: "100%", // Make the toast message take full width
          textAlign: "center", // Center the text within the toast
        },
      });
    
      console.log(error);
    setdisablebtn(false);

    }

    
  };
  return (
    <div className="contactUs">
      <div className="contactRightbar"></div>
      <div className="contactcontainer">
        <form action="" className="formcontainer" onSubmit={submitHandler}>
          <p variant="h4">Contact us</p>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
          ></textarea>
          <div className="buttons">
            {/* <button disabled={disbale} className={disbale?"disbleBtn":" ","btn-hover color-8"}   className="btn-hover color-8">submit</button> */}
            <button disabled={disbale} className={disbale ? "disbale btn-hover color-8" : "btn-hover color-8"}>Submit</button>

            {/* <button disabled={disbale}   className="btn-hover color-8">submit</button> */}

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
