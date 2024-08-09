import React from "react";
import { EnvelopeIcon} from "@heroicons/react/24/solid";
import {HomeIcon} from "@heroicons/react/16/solid";
import {FaCompass} from "react-icons/fa";
import {Helmet} from "react-helmet";

export function Contact() {
   return (
       <><Helmet>
          <meta charSet="utf-8"/>
          <title>Contact | Dataism Laboratory for Quantitative Finance</title>
          <meta name="description"
                content="Need to get in touch with? Feel free to contact us"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
       </Helmet>
          <section className="grid h-screen px-8 py-10">
             <div
                 className="container mx-auto my-auto grid items-center place-items-center gap-y-10 gap-x-28 grid-cols-1 lg:grid-cols-2">
                <div className="w-full lg:max-w-lg">
                   <div className="p-6 bg-white shadow-lg rounded-lg">
                      <h4 className="text-2xl text-blue-gray-900 mb-6">
                         Contact us
                      </h4>
                      <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                         <input type="hidden" name="access_key" value="9261d407-c83d-4a6f-9533-5f504c8bdd43"/>
                         <div className="grid gap-4 grid-cols-2">
                            <div className="flex flex-col">
                               <label
                                   htmlFor="first-name"
                                   className="text-sm font-medium text-gray-700"
                               >
                                  First Name
                               </label>
                               <input
                                   type="text"
                                   id="first-name"
                                   name="first-name"
                                   className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                            </div>
                            <div className="flex flex-col">
                               <label
                                   htmlFor="last-name"
                                   className="text-sm font-medium text-gray-700"
                               >
                                  Last Name
                               </label>
                               <input
                                   type="text"
                                   id="last-name"
                                   name="last-name"
                                   className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                            </div>
                         </div>
                         <div className="flex flex-col">
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-700"
                            >
                               Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                         </div>
                         <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-700"
                            >
                               Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            ></textarea>
                         </div>

                         <button
                             type="submit"
                             className="mt-4 w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
                         >
                            Send Message
                         </button>
                      </form>
                   </div>
                </div>
                <div className="w-full lg:pb-0 pb-2">
                   <h2 className="text-3xl lg:text-4xl text-blue-gray-900 mb-4">
                      Get in Touch
                   </h2>
                   <p className="text-lg lg:text-xl font-normal text-gray-500 max-w-md mb-16">
                      Need more information? Feel free to reach out via email or the contact form
                   </p>
                   <div className="flex items-center gap-5 mb-4">
                      <HomeIcon className="h-5 w-5 text-gray-700"/>
                      <p className="text-lg font-medium text-gray-900">Pamplin Hall, 880 West Campus Drive, Blacksburg,
                         VA
                         24060</p>
                   </div>
                   <div className="flex items-center gap-5 mb-4">
                      <FaCompass className="h-5 w-5 text-gray-700"/>
                      <p className="text-lg font-medium text-gray-900">Enter Pamplin Hall and head to room 3016</p>
                   </div>
                   <div className="flex items-center gap-5 mb-4">
                      <EnvelopeIcon className="h-5 w-5 text-gray-700"/>
                      <p className="text-lg font-medium text-gray-900">benc23@vt.edu</p>
                   </div>

                </div>
             </div>
          </section>
       </>
   );
}

export default Contact;







