import React from "react";
import { Link } from 'react-router-dom';
import {MessageForm, InputForm} from '../Components/forms'
import IconButton from "../Components/IconButton";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
       <div className="ml-[100px] flex h-screen items-center  space-x-60 justify-center">
      <div className="flex flex-col mt-[-300px]">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <div className="text-2xl ">
          <p className="">Need to get in touch with us? Fill out</p>
          <p>this form or directly email us at </p>
          <p>idk@gmail.com</p>
          </div>
        <Link to="/Sponsor">Sponsor Us</Link>



      </div>
      <div className="square w-32 h-32 bg-blue-500 flex items-center flex-col justify-center">
        <InputForm />
        {/*<MessageForm /> */}
      </div>
    </div>
    </>
  );
}

export default Contact;
