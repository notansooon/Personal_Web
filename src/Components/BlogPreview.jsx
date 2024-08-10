import React from "react";
import Apl12 from './LabPicture/4.12.jpg';
import Forrest_spot from './LabPicture/Forrest_Spot.jpg';
import Join from './LabPicture/Join.jpg';
import Apl19 from './LabPicture/4.19.jpg';
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

function BlogPostCard({ img, title, desc, link }) {
    const handleLinkedInRedirect = () => {
        window.open(link, "_blank");
    };

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
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-2xl lg:text-3xl mb-6 font-bold text-blue-gray-900 normal-case">
                    {title}
                </a>
                <p className="mb-6 text-sm lg:text-base font-normal text-gray-500">
                    {desc}
                </p>
                <Button
                    color="gray"
                    variant="text"
                    size="sm"
                    className="flex items-center"
                    style={{ fontSize: 12 }}
                    onClick={handleLinkedInRedirect} // Handle redirection
                >
                    Read More on LinkedIn
                    <ArrowRightIcon
                        className="size-3.5 text-gray-900"
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
        desc: "Forrest Meng is a dedicated industry professional and senior at Virginia Tech who joined the Dataism Laboratory last semester. With robust quantitative abilities and a proven track record, Forrest has swiftly integrated into our team dynamics.",
        link: "https://www.linkedin.com/posts/dataism-laboratory-for-quantitative-finance_dataismlab-quantitativefinance-softwareengineering-activity-7216288103047540737-atWE?utm_source=share&utm_medium=member_desktop", // Replace with actual LinkedIn post link
    },
    {
        img: Apl19,
        title: "Portfolio Optimization",
        desc: "Gurkirat Singh, Alexander Ardaiz, Benjamin Cummings, and Sahith Kancharla delved into the intricacies of Machine Learning, particularly in the context of Portfolio Optimization.",
        link: "https://www.linkedin.com/posts/dataism-laboratory-for-quantitative-finance_machinelearning-portfoliooptimization-finance-activity-7187242156351258624-rw9g?utm_source=share&utm_medium=member_desktop", // Replace with actual LinkedIn post link
    },
    {
        img: Join,
        title: "Unlock Your Future in Quantitative Finance",
        desc: "Join the Dataism Laboratory for Quantitative Finance this next semester at Virginia Tech to stand out in your quantitative finance job search.",
        link: "https://www.linkedin.com/posts/dataism-laboratory-for-quantitative-finance_quantitativefinance-fintech-algorithmictrading-activity-7211175302499053568-770Q?utm_source=share&utm_medium=member_desktop", // Replace with actual LinkedIn post link
    },
    {
        img: Apl12,
        title: "Initial Coin Offering",
        desc: "Two of our assistant researchers explored the intricacies of decentralized finance through a quantitative finance lens.",
        link: "https://www.linkedin.com/posts/dataism-laboratory-for-quantitative-finance_quantitativefinance-fintech-algorithmictrading-activity-7184781283800043520-oiqg?utm_source=share&utm_medium=member_desktop", // Replace with actual LinkedIn post link
    },
];

export function BlogPreview() {
    return (
        <div className="lg:py-28 py-10 px-8 mt-24 sm:mt-24 md:mt-24 lg:mt-16 w-screen">
            <div className="container mx-auto lg:mb-20 mb-10 text-center">
                <h1 className="text-2xl lg:text-4xl mb-2 font-bold text-black">
                    Check out what&apos;s new
                </h1>
                <p className="mx-auto max-w-xl text-gray-500 text-lg lg:text-xl font-normal">
                    Check out the latest DLQF announcements and updates
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                {posts.map((props) => (
                    <BlogPostCard key={props.title} {...props} />
                ))}
            </div>
        </div>
    );
}

export default BlogPreview;

