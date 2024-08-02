import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { VscGraphLine } from "react-icons/vsc";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

function FeatureCard({ icon, title, description }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const truncatedDescription = description.slice(0, 100) + "...";

    return (
        <Card color="transparent" className="items-center" shadow={false}>
            <CardHeader
                shadow={false}
                color="gray"
                className="h-12 w-12 grid items-center justify-center !rounded-lg"
            >
                {icon}
            </CardHeader>
            <CardBody className="flex flex-col items-center">
                <Typography variant="h5" color="blue-gray" className="mb-3 text-lg lg:text-xl font-semibold">
                    {title}
                </Typography>
                <Typography className="mb-4 text-center text-sm lg:text-base font-normal !text-gray-500 leading-relaxed">
                    {isExpanded ? description : truncatedDescription}
                </Typography>
                <Button
                    variant="text"
                    color="gray"
                    className="flex items-center gap-2"
                    onClick={toggleExpanded}
                    style={{fontSize:12}}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                    <ArrowRightIcon
                        strokeWidth={3}
                        className="size-3.5 text-gray-900"
                    />
                </Button>
            </CardBody>
        </Card>
    );
}

const features = [
    {
        icon: <VscGraphLine color="black" className='h-6 w-6' />,
        title: "Algorithmic Development",
        description:
            "Our team designs, implements, and refines AI and ML algorithms tailored " +
            "for various financial applications, including trading strategies, risk management," +
            " and market analysis. Our mission is to revolutionize the financial industry by creating cutting-edge " +
            "algorithmic solutions that enable more accurate predictions, smarter trading strategies, and enhanced" +
            " financial decision-making processes. We aim to bridge the gap between theoretical research and practical " +
            "applications, ensuring our algorithms are both scientifically robust and practically effective.",
    },
    {
        icon: <FaHandshake color="black" className="h-6 bg-transparent w-6" />,
        title: "Client Services",
        description:
            "We create tailored trading algorithms and financial models that align with the specific needs and " +
            "strategies of each investment bank, ensuring optimal performance and competitive advantage. Our Client " +
            "Services Sector at DLQF is dedicated to providing innovative and tailored solutions for investment banks." +
            " We specialize in designing, developing, and implementing cutting-edge technologies that enhance the " +
            "operational efficiency, strategic decision-making, and overall performance of our clients in the financial " +
            "industry.",
    },
    {
        icon: <HiOutlineAcademicCap color="black" className="h-6 w-6" />,
        title: "Academic Research",
        description:
            "Our team conducts pioneering research on a wide range of topics within quantitative finance, including " +
            "asset pricing, risk management, market microstructure, financial econometrics, and algorithmic trading. " +
            "Our Academic Research Sector at DLQF is a vibrant hub of innovation and intellectual rigor, dedicated to " +
            "exploring a myriad of topics within the field of quantitative finance. Comprising a dedicated team of " +
            "graduate students and faculty members, our sector is committed to advancing the frontiers of financial " +
            "research through cutting-edge studies and interdisciplinary collaboration.",
    },
];

export function Sector() {
    return (
        <section style={{backgroundColor: 'FFE6E6'}} className="lg:py-28 py-16 -mb-24 px-8 w-screen">
            <div className="container mx-auto mb-24 text-center">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-4 font-bold"
                >
                    Sectors
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-xl text-gray-500 text-lg lg:text-xl"
                >
                    Learn more about the sectors we focus on
                </Typography>
            </div>
            <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
                {features.map(({ icon, title, description }) => (
                    <FeatureCard key={title} icon={icon} title={title} description={description} />
                ))}
            </div>
        </section>
    );
}
export default Sector;





