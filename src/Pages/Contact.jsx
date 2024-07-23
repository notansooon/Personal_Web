import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import locationImage from "../assets/Images/Screenshot 2024-07-20 at 1.45.48 PM.png"
export function Contact() {
    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="container mx-auto text-center">
                
            <div className="container relative z-10 my-auto mx-auto grid text-left">
                    <Typography
                        variant="h1"
                        color="white"
                        className="text-4xl !leading-snug lg:text-5xl"
                    >
                        Meet Our Teams
                    </Typography>
                   
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
                        <Typography
                            variant="small"
                            className="text-left !font-semibold !text-gray-600"
                        >
                            Select Options for Business Engagement
                        </Typography>
                        <div className="flex gap-4">
                            <Button variant="outlined" className="max-w-fit">
                                General inquiry
                            </Button>
                            <Button variant="outlined" className="max-w-fit">
                                Product Support
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    First Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="First Name"
                                    name="first-name"
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Last Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Last Name"
                                    name="last-name"
                                    className="focus:border-t-gray-900"
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
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Message
                            </Typography>
                            <Textarea
                                rows={6}
                                color="gray"
                                placeholder="Message"
                                name="message"
                                className="focus:border-t-gray-900"
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



