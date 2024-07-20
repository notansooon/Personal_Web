import React from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";

export function NewsWire() {
    return (
        <>
            <div className="container mx-auto grid h-full min-h-[70vh] w-full grid-cols-1 items-center gap-x-12 gap-y-4 p-6 lg:grid-cols-2">
                <img
                    src="https://www.material-tailwind.com/image/blog-5.jpeg"
                    alt="blog"
                    className="col-span-1 h-full w-full rounded-lg object-cover shadow-sm lg:h-[20rem]"
                />
                <div className="col-span-1">
                    <Typography
                        color="blue-gray"
                        className="mb-2 font-semibold uppercase text-sm"
                    >
                        business
                    </Typography>
                    <Typography
                        variant="h3"
                        color="blue-gray"
                        className="mb-2 !text-xl !leading-snug lg:!text-2xl"
                    >
                        Autodesk looks to future of 3D with Project Escher
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mb-3 w-full !text-gray-600 text-sm"
                    >
                        Warner Music Group announced today it&apos;s acquiring the selected
                        assets of the music platform Songkick, including its app for finding
                        concerts and the company&apos;s trademark. Songkick has been
                        involved in a lawsuit against the major…{" "}
                        <Button variant="text" size="sm" className="!py-1 !px-3">
                            Read More
                        </Button>
                    </Typography>

                </div>
            </div>
        </>
    );
}

export default NewsWire;

