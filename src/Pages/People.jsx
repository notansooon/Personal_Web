import {Card, CardBody, CardHeader} from "@material-tailwind/react";
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
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import React from "react";
import {Helmet} from "react-helmet";




function TeamCard({ img, name, title, socialLinks }) {
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
                <h5 className="text-blue-gray-700 font-semibold text-lg">{name}</h5>
                <p className="mb-4 mt-2 font-bold uppercase text-gray-500">{title}</p>
                <div className="-ml-1 flex items-center gap-4">
                    {socialLinks?.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-gray-800 hover:text-blue-700"/>
                        </a>
                    )}
                    {socialLinks?.twitter && (
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className="text-2xl text-gray-800 hover:text-blue-400"/>
                        </a>
                    )}
                    {socialLinks?.facebook && (
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl text-gray-800 hover:text-blue-600"/>
                        </a>
                    )}
                    {socialLinks?.instagram && (
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl text-gray-800 hover:text-pink-500"/>
                        </a>
                    )}
                    {socialLinks?.github && (
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-gray-800 hover:text-gray-600"/>
                        </a>
                    )}
                </div>
            </CardBody>
        </Card>
    );
}

const teamData = {
    "Principal Investigators": [
        {
            img: DrAli,
            name: "Dr. Ali Habibnia",
            title: "Principal Investigator",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ali-habibnia-a970b76/",
                github: "https://github.com/AliHabibnia"
            }
        },
    ],
    "Vice Presidents": [
        {
            img: BenC,
            name: "Benjamin Cummings",
            title: "Vice President",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/benc25/"
            }
        },
        {
            img: Alex,
            name: "Alex Jaimes",
            title: "Vice President",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/alex-jaimes-48281a241/"
            }
        },
        {
            img: Roshan,
            name: "Roshan Sanyal",
            title: "Vice President",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/roshan-sanyal-960b21191/",
            }
        },
    ],
    "Algorithmic Development": [
        
        {
            img: Forrest,
            name: "Forrest Meng",
            title: "Algorithmic Development",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/forrestmeng629/",
                github: "https://github.com/forrestmeng"
                
            }
        },
        {
            img: BenF,
            name: "Ben Facciani",
            title: "Algorithmic Development",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ben-facciani/"
            }
        },
    ],
    "Academic Research": [
        {
            img: PaulC,
            name: "Paul Chau",
            title: "Undergraduate Research Assistant",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/paul-chau-93047924b/"
            }
        },
        {
            img: Jamshid,
            name: "Jamshid ArdalanKia",
            title: "Graduate Research Assistant",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/jamshid-ardalankia-3039581a9/"
            }
        },
    ],
    "Client Services": [
        {
            img: Alex,
            name: "Alex Jaimes",
            title: "Project Manager",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/alex-jaimes-48281a241/"
            }
        },
        {
            img: Roshan,
            name: "Roshan Sanyal",
            title: "Project Manager",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/roshan-sanyal-960b21191/",
            }
        },
        {
            img: Alexander,
            name: "Alexander Ardaiz",
            title: "Undergraduate Research Assistant",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/alexander-ardaiz/"
            }
        },
        {
            img: missing,
            name: "Anson Jiang",
            title: "AI/ML Engineer",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anson-jiang-6834232aa/",
                
            }
        },
        {
            img: missing,
            name: "Aryan Palit",
            title: "AI/ML Engineer",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/aryan-palit-141777279/",
                
            }
        },
    ],
};

export function People() {
    return (
        <><Helmet>
            <meta charSet="utf-8"/>
            <title>People | Dataism Laboratory for Quantitative Finance</title>
            <meta name="description" content="Discover the diverse team behind DLQF, committed to excellence in research and development."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
            <section className="py-10 px-8 bg-gray-100 lg:py-28">
                <div className="container mx-auto">
                    <div className="mx-auto mb-10 lg:mb-28 lg:text-center">
                        <h2 className="my-4 text-3xl lg:text-4xl text-blue-gray-700">Meet Our Team</h2>
                        <p className="mx-auto max-w-4xl text-gray-500">
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. If you have the opportunity to play this game of life you
                            need to appreciate every moment.
                        </p>
                    </div>

                    {Object.keys(teamData).map((division) => (
                        <div key={division} className="mb-16 lg:mb-32">
                            <h4 className="text-center mb-12 text-xl lg:text-2xl font-semibold">{division}</h4>
                            <div className="grid gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-3">
                                {teamData[division].map((member, index) => (
                                    <TeamCard key={index} {...member} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default People;

