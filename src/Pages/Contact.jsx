import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import locationImage from "../assets/Images/Screenshot 2024-07-20 at 1.45.48 PM.png";

export function Contact() {
    return (
        <section className="px-8 bg-gray-100 py-8 lg:py-16 pb-16 lg:pb-28">
            <div className="container mx-auto text-center">
                <div className="container relative z-10 my-auto mx-auto grid text-left">
                    <h1 className="text-4xl font-black leading-snug lg:text-5xl">
                        Meet Our Teams
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                    <img
                        src={locationImage}
                        alt="map"
                        className="w-auto h-auto bg-cover lg:max-h-[510px]"
                    />
                    <form
                        action="#"
                        className="flex flex-col gap-4 lg:max-w-sm"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 text-left font-medium text-gray-900 ">
                                    First Name
                                </label>
                                <Input
                                    size="lg"
                                    placeholder="First Name"
                                    name="first-name"
                                    className="focus:border-t-gray-900 border-blue-950"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <label className="mb-2 text-left font-medium text-gray-900 ">
                                    Last Name
                                </label>
                                <Input
                                    size="lg"
                                    placeholder="Last Name"
                                    name="last-name"
                                    className="focus:border-t-gray-900 border-blue-950"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 text-left font-medium text-gray-900">
                                Your Email
                            </label>
                            <Input
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                className="focus:border-t-gray-900 border-blue-950"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <label className="mb-2 text-left font-medium text-gray-900">
                                Your Message
                            </label>
                            <Textarea
                                rows={6}
                                placeholder="Message"
                                name="message"
                                className="focus:border-t-gray-900 border-blue-950"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <Button className="w-full bg-blue-950" color="gray">
                            Send message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;





