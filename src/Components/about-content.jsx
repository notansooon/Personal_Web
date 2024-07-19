import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { Typography, Button } from "@material-tailwind/react";
import bgImage1 from '../assets/Images/1712711055874.jpeg'; // replace with your actual path
import bgImage2 from '../assets/Images/1712985343744.jpeg' // replace with your actual path

function Option({ title, children }) {
    return (
        <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
            </Typography>
            <Typography className="font-normal !text-gray-500 md:w-10/12">
                {children}
            </Typography>
        </div>
    );
}

export function AboutContent() {
    return (
        <section className="mx-auto container max-w-5xl px-8 py-10">
            <div className="text-center mb-10 lg:mb-24">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-gray-900 mx-auto">
                    <CursorArrowRaysIcon className="h-6 w-6 text-white" />
                </div>
                <Typography variant="h3" color="blue-gray">
                    How To Handle Components
                </Typography>
                <Typography
                    variant="lead"
                    className="mt-2 max-w-4xl mx-auto !text-gray-500"
                >
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams. Don&apos;t stop.
                </Typography>
            </div>
            <div className="lg:space-y-24 space-y-12">
                <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                    <div
                        className="h-[480px] text-center flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl p-14 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage1})` }}
                    >
                        <Typography variant="h6" className="mb-4" color="white">
                            WEBSITE VISITORS
                        </Typography>
                        <Typography variant="h4" color="white">
                            The Best Productivity Apps on Market
                        </Typography>
                        <Typography
                            color="white"
                            className="mt-2 mb-10 text-base font-normal"
                        >
                            As we live, our hearts turn colder. Cause pain is what we go
                            through as we become older. We get insulted by others, lose trust
                            for those others.
                        </Typography>
                        <Button color="white" className="max-w-fit mx-auto">
                            button
                        </Button>
                    </div>
                    <div className="flex flex-col gap-10 lg:max-w-sm">
                        <Option title="1. Listen to Social Conversations">
                            Gain access to the demographics, psychographics, and location of
                            unique people who talk about your brand.
                        </Option>
                        <Option title="2. Performance Analyze">
                            Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                            Youtube to gain rich insights from easy-to-use reports.
                        </Option>
                        <Option title="3. Social Conversions">
                            Track actions taken on your website that originated from social,
                            and understand the impact on your bottom line.
                        </Option>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                    <div className="lg:row-auto row-start-2 flex flex-col gap-10 lg:max-w-sm">
                        <Option title="1. Always In Sync">
                            Gain access to the demographics, psychographics, and location of
                            unique people who talk about your brand.
                        </Option>
                        <Option title="2. Work With Any Team">
                            Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                            Youtube to gain rich insights from easy-to-use reports.
                        </Option>
                        <Option title="3. A Productivity Platform">
                            Track actions taken on your website that originated from social,
                            and understand the impact on your bottom line.
                        </Option>
                    </div>
                    <div
                        className="h-[480px] text-center flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl p-14 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >
                        <Typography variant="h6" className="mb-4" color="white">
                            SOCIAL ACTIVITIES
                        </Typography>
                        <Typography variant="h4" color="white">
                            Working on Wallstreet is Not So Easy
                        </Typography>
                        <Typography
                            color="white"
                            className="mt-2 mb-10 text-base font-normal"
                        >
                            There&apos;s nothing I really wanted to do in life that I
                            wasn&apos;t able to get good at. I&apos;m not really specifically
                            talented at anything except for the ability to learn.
                        </Typography>
                        <Button color="white" className="max-w-fit mx-auto">
                            button
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutContent;
