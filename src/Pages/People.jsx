import { UserGroupIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardBody,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import DrAli from '../assets/ProfilePicture/ali.jpg'
import BenC from '../assets/ProfilePicture/ben.jpg'
import Alex from '../assets/ProfilePicture/alex.jpg'
import Roshan from '../assets/ProfilePicture/roshan.jpg'
import Forrest from '../assets/ProfilePicture/Forrest.jpg'
import PaulC from '../assets/ProfilePicture/paul.jpg'
import BenF from '../assets/ProfilePicture/ben_f.jpg'
import Jamshid from '../assets/ProfilePicture/Jamshid.jpg'
import Alexander from '../assets/ProfilePicture/Alexander.jpg'
import missing from '../assets/ProfilePicture/profile-svgrepo-com.svg'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import React from "react";


function TeamCard({ img, name, title }) {
    return (
        <Card
            color="transparent"
            shadow={false}
            className="grid grid-cols-12 items-center gap-6"
        >
            <CardHeader
                shadow={false}
                floated={false}
                className="col-span-4 !m-0 h-full max-h-32 w-full"
            >
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover object-center rounded-lg"
                />
            </CardHeader>
            <CardBody className="col-span-8 p-0">
                <Typography variant="h5" color="blue-gray">
                    {name}
                </Typography>
                <Typography
                    variant="small"
                    className="mb-4 mt-2 font-bold uppercase !text-gray-500"
                >
                    {title}
                </Typography>
                <div className="-ml-1 flex items-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-gray-800 hover:text-blue-600"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className="text-2xl text-gray-800 hover:text-blue-400"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-gray-800 hover:text-blue-700"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-gray-800 hover:text-pink-500"/>
                    </a>
                </div>
            </CardBody>
        </Card>
    );
}

const teamData = {
    "Principal Investigators": [
        {img: DrAli, name: "Dr. Ali Habibnia ", title: "Principal Investigator"},
    ],
    "Vice Presidents": [
        {img: BenC, name: "Benjamin Cummings", title: "Vice President"},
        {img: Alex, name: "Alex Jaimes", title: "Vice President"},
        {img: Roshan, name: "Roshan Sanyal", title: "Vice President"},
    ],
    "Algorithmic Development": [
        {img: missing, name: "Max Brenner", title: "Head of Algorithmic Development"},
        {img: Forrest, name: "Forrest Meng", title: "Algorithmic Development"},
        {img: BenF, name: "Ben F", title: "Algorithmic Development"},
    ],
    "Academic Research": [
        {img: PaulC, name: "Paul Chau", title: "Undergraduate Research Assistant" },
        { img: Jamshid, name: "Jamshid", title: "Graduate Research Assistant" },
    ],
    "Client Services": [
        { img: Alex, name: "Alex Jaimes", title: "Project Manager" },
        { img: Roshan, name: "Roshan Sanyal", title: "Project Manager" },
        { img:  Alexander, name: "Alexander Ardiaz", title: "Undergraduate Research Assistant" },
        { img: missing, name: "Anson Jiang", title: "AI/ML Engineer" },
        { img: missing, name: "Aryan Palit", title: "AI/ML Engineer" },

    ],
};

export function People() {
    return (
        <section className="py-10 px-8 bg-gray-100 lg:py-28">
            <div className="container mx-auto">
                <div className="mx-auto mb-10 lg:mb-28 lg:text-center">
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="my-4 text-3xl lg:text-4xl"
                    >
                        Our Awesome Team
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto max-w-4xl !text-gray-500"
                    >
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams. If you have the opportunity to play this game of life you
                        need to appreciate every moment.
                    </Typography>
                </div>

                {Object.keys(teamData).map((division) => (
                    <div key={division} className="mb-16 lg:mb-32">
                        <Typography variant="h4" className="text-center mb-12 text-xl lg:text-2xl font-semibold">
                            {division}
                        </Typography>
                        <div className="grid gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-3">
                            {teamData[division].map((member, index) => (
                                <TeamCard key={index} {...member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default People
