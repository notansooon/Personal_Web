import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";

export function NewsWire() {
    return (
        <>
            <div className="container mx-auto grid h-full min-h-[85vh] w-full grid-cols-1 items-center gap-x-24 gap-y-6 p-8 lg:grid-cols-2">
                <img
                    src="https://www.material-tailwind.com/image/blog-5.jpeg"
                    alt="blog"
                    className="col-span-1 h-full w-full rounded-lg object-cover shadow-md lg:h-[25rem]"
                />
                <div className="col-span-1">
                    <Typography
                        color="blue-gray"
                        className="mb-4 font-bold uppercase"
                    >
                        business
                    </Typography>
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="mb-3 !text-2xl !leading-snug lg:!text-3xl"
                    >
                        Autodesk looks to future of 3D with Project Escher
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mb-4 w-full !text-gray-500"
                    >
                        Warner Music Group announced today it&apos;s acquiring the selected
                        assets of the music platform Songkick, including its app for finding
                        concerts and the company&apos;s trademark. Songkick has been
                        involved in a lawsuit against the major…{" "}
                        <Button variant="text" size="lg" className="!py-2 !px-4">
                            Read More
                        </Button>
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default NewsWire;

