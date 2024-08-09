import React from "react";
import { EnvelopeIcon, TicketIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function Contact() {
   return (
       <section className="grid h-screen px-8 py-10">
          <div className="container mx-auto my-auto grid items-center place-items-center gap-y-10 gap-x-28 grid-cols-1 lg:grid-cols-2">
             <div className="w-full lg:max-w-lg">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                   <h4 className="text-2xl font-semibold text-blue-gray-900 mb-6">
                      Contact us
                   </h4>
                   <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                      <input type="hidden" name="access_key" value="cd3ce095-624d-4676-9677-456310286cf6"/>
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
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
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
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
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
                             className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                         />
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
                      <div className="flex items-start">
                         <input
                             type="checkbox"
                             id="privacy-policy"
                             className="h-4 w-4 text-gray-600 border-gray-300 rounded"
                         />
                         <label
                             htmlFor="privacy-policy"
                             className="ml-2 text-sm text-gray-500"
                         >
                            You agree to our{" "}
                            <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-gray-900"
                            >
                               Privacy Policy
                            </a>
                            .
                         </label>
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
                <h2 className="text-3xl lg:text-4xl font-semibold text-blue-gray-900 mb-4">
                   Get in Touch
                </h2>
                <p className="text-lg lg:text-xl font-normal text-gray-500 max-w-md mb-16">
                   Need more information? Check what others are saying about our product.
                   They are very happy with their purchase.
                </p>
                <div className="flex items-center gap-5 mb-4">
                   <PhoneIcon className="h-5 w-5 text-gray-700" />
                   <p className="text-lg font-medium text-gray-900">+1(424) 535 3523</p>
                </div>
                <div className="flex items-center gap-5 mb-4">
                   <EnvelopeIcon className="h-5 w-5 text-gray-700" />
                   <p className="text-lg font-medium text-gray-900">hello@mail.com</p>
                </div>
                <div className="flex items-center gap-5">
                   <TicketIcon className="h-5 w-5 text-gray-700" />
                   <p className="text-lg font-medium text-gray-900">Open Support Ticket</p>
                </div>
             </div>
          </div>
       </section>
   );
}

export default Contact;







