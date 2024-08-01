import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import Apl12 from './LabPicture/4.12.jpg'
import Forrest_spot from './LabPicture/Forrest_Spot.jpg'
import Join from './LabPicture/Join.jpg'
import Apl19 from './LabPicture/4.19.jpg'
import LinkedInArrowLink from "./LinkedInArrow";
import {ArrowSmallRightIcon} from "@heroicons/react/20/solid";
import React from "react";



function BlogPostCard({ img, title, desc }) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mb-6 h-52">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-0">
                <Typography
                    as="a"
                    href="#"
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 normal-case"
                >
                    {title}
                </Typography>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>
                <Button
                    color="gray"
                    variant="text"
                    size="sm"
                    className="flex items-center"
                >
                    Read More on LinkedIn
                    <ArrowSmallRightIcon
                        className="ml-2 h-3.5 w-3.5"
                        strokeWidth={3}
                    />
                </Button>
            </CardBody>
        </Card>
    );
}

const posts = [
    {
        img: Forrest_spot,
        title: "DLQF Spotlight",
        desc: "Forrest Meng is a dedicated industry professional and senior at Virginia Tech who joined the Dataism Laboratory last semester. With robust quantitative abilities and a proven track record, Forrest has swiftly integrated into our team dynamics. ",
    },
    {
        img: Apl19,
        title: "Portfolio Optimization",
        desc: "Gurkirat Singh, Alexander Ardaiz, Benjamin Cummings, and Sahith Kancharla delved into the intricacies of Machine Learning, particularly in the context of Portfolio Optimization. ",
    },
    {
        img: Join,
        title: "Unlock Your Future in Quantitative Finance",
        desc: "Join the Dataism Laboratory for Quantitative Finance this next semester at Virginia Tech to stand out in your quantitative finance job search. ",
    },
    {
        img: Apl12,
        title: "Initial Coin Offering",
        desc: "Two of our assistant researchers explored the intricacies of decentralized finance through a quantitative finance lens.",
    },
];

export function BlogPreview() {
    return (
        <div style={{backgroundColor: 'FFE6E6'}}  className="lg:py-28 py-10 px-8 mt-4 w-screen sm:mt-20 md:mt-12 lg:mt-16 xl:mt-20">
            <div className="container mx-auto lg:mb-20 mb-10 text-center">
                <Typography
                    variant="h1"
                    className="mb-2 !text-2xl lg:!text-4xl"
                >
                    Check out what&apos;s new
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-xl !font-normal !text-gray-500"
                >
                    Check out the latest DLQF announcements and updates
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                {posts.map((props) => (
                    <BlogPostCard {...props} />
                ))}
            </div>
        </div>
    );
}



