import React from 'react';
import { useEffect, useRef } from 'react';
import './style.css';
import IconButton from "../utils/IconButton";
import {FaEnvelope, FaFacebook, FaLinkedin, FaWeibo, FaWhatsapp} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


function Contact() {



  return (
    <>


      <div className="container mx-auto p-2 pt-[150px] text-white">
        <h1 className="text-5xl text-center mb-10 font-bold">Contact</h1>
        <div className="mb-8 font-serif">

          <p className=" text-2xl text-white mb-4">Please feel free to contact us if you want to collaborate with us or
            join the team.</p>
          <div className="inputbox">
            <input required="required"/>
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input required="required"/>
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input required="required" style={{paddingBottom: 150}}/>
            <span>Message</span>
          </div>


          <div class="btn">
            <button> Send</button>
          </div>


        </div>

        <div className="flex h-screen items-center justify-center font-sans font-semibold gap-4">
          <IconButton color="bg-blue-500" text="LinkedIn">
            <FaLinkedin size={30}></FaLinkedin>
          </IconButton>

          <IconButton color="bg-blue-500" text="Facebook">
            <FaFacebook size={30}></FaFacebook>
          </IconButton>

          <IconButton color="bg-green-500" text="Whatsapp">
            <FaWhatsapp size={30}></FaWhatsapp>
          </IconButton>

          <IconButton color="bg-red-500" text="Weibo">
            <FaWeibo size={30}></FaWeibo>
          </IconButton>

          <IconButton color="Black" text="Twitter">
            <FaXTwitter size={30}></FaXTwitter>
          </IconButton>

          <IconButton color="bg-red-500" text="Mail">
            <FaEnvelope size={30}></FaEnvelope>
          </IconButton>

        </div>

        <div
            className="w-full bg-cover bg-center h-96 text-white flex items-center justify-center"
            //style={{ backgroundImage: `url(${pamplinHallImage})` }}
        >
          <div>
            <section className="bg-opacity-80 bg-gray-900 p-6 rounded-lg shadow-lg inset-0 font-serif">
              <h2 className="text-2xl font-bold ">Our Location</h2>
              <address className="not-italic mb-4">
                Pamplin Hall, 880 West Campus Drive<br/>
                Blacksburg, VA 24060<br/>
                United States
              </address>
              <p className="mb-4">Email: <a href="mailto:habibnia@vt.edu" className="text-blue-500">habibnia@vt.edu</a>
              </p>
              <p className="mb-4">Directions: Enter Pamplin Hall and head to room 3016</p>

            </section>


          </div>
          <iframe
              className="w-full h-64"
              src={`https://www.google.com/maps?q=37.22876,-80.42462&hl=es;z=14&output=embed`}
              allowFullScreen
              title="Pamplin Hall Location"
          ></iframe>

        </div>

      </div>
    </>
  );
}

export default Contact;
