import {
    Card,
    CardBody,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import '../Components/utils/styles.css'
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Ben from '../ProfilePicture/ben.jpg'
import Ali from '../ProfilePicture/ali.jpg'
import Roshan from '../ProfilePicture/roshan.jpg'
import Ryan from '../ProfilePicture/ryan.jpg'
import Raseen from '../ProfilePicture/Raseen.jpg'
import Gaurav from '../ProfilePicture/Gaurav.jpg'
import Alex from '../ProfilePicture/alex.jpg'
import Paul from '../ProfilePicture/paul.jpg'
import Unknown from '../ProfilePicture/unknown.jpg'
import Ben_f from '../ProfilePicture/ben_f.jpg'
import Team from '../Components/Profile'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import group from '../ProfilePicture/GroupPic.png'


const execu = [
    {
        img: Ali,
        name: "Ali Habibnia",
        title: "Principle Investigator",
        
    },
    {
        img: Ben,
        name: "Ben Cummings",
        title: "VP of Client Services",
        
    },
    {
        img: Alex,
        name: "Alex Jaimes",
        title: "VP of Data Science",
        
    },
    {
        img: Roshan,
        name: "Roshan Sanyal",
        title: "VP of Algorithmic Development",
        
    },
];

const algo = [
    {
        img: Unknown,
        name: "Max Brenner",
        title: "Head of Algorithmic Development",
        
    },
    {
        img: Unknown,
        name: "Forrest Meng",
        title: "Algorithimic Development",
        
    },
    {
        img: Ben_f,
        name: "Ben Facciani",
        title: "Algorithmic Developer",
        
    },
    
];

const academic = [
    {
        img: Unknown,
        name: "Jamshid Ardalankia",
        title: "Graduate Researcher",
        
    },
    {
        img: Paul,
        name: "Paul Chau",
        title: "Undergraduate Research Assistant",
        
    },
    {
        img: Unknown,
        name: "Alexander Ardiaz",
        title: "Undergraduate Researcher",
        
    },
    
];

const services = [
    {
        img: Unknown,
        name: "Anson Jiang",
        title: "ML/AI Engineer",
        
    },
    {
        img: Unknown,
        name: "Aryan Paliet",
        title: "ML/AI Engineer",
        
    },
    {
        img: Alex,
        name: "Alex Jaimes",
        title: "Project Manager",
        
    },
    {
        img: Roshan,
        name: "Roshan Sanyal",
        title: "Project Manager",
        
    },
];









function TeamCard({ img, name, title, desc }) {

    const nav = useNavigate();

    const profileHandler = () => {
        nav(`/ProfilePage/${name}`);
    }

   
   

    
    return (
        <Card color="transparent" shadow={false} onClick={profileHandler}>
            <CardHeader shadow={false} floated={false} className="!m-0 w-40">
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                />
            </CardHeader>
            <CardBody className="!pl-0 text-left">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                    {name}
                </Typography>
                <Typography className="mb-2 font-bold !text-gray-500 text-lg">
                    {title}
                </Typography>
                <Typography className="mb-4 max-w-xs !font-normal !text-gray-500">
                    {desc}
                </Typography>
                <div className="flex items-center gap-1.5">
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-twitter text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-linkedin text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-dribbble text-lg" />
                    </IconButton>
                </div>
            </CardBody>
        </Card>
    );
}



export function People() {
    const scrollHandler = (event) => {
        const value = parseInt(event.target.getAttribute('data-scroll'));
        window.scrollTo({
            top: value,
            behavior: 'smooth'
        })
    }


    return (
        <section className="">

            <Typography
                variant="h1"
                color="black"
                className="text-4xl !leading-snug lg:text-5xl text-center mt-20"
            >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Meet Our Team")
                        .start();
                    }}
                />
            </Typography>



            <div className="container px-5">

    <div className="mb-10 lg:mb-20 responsive-margin-height responsive-margin-height-md">
        <Typography
            variant="h2"
            color="blue-gray"
            className="mt-6 mb-3 text-3xl lg:text-4xl"
        >
            The Adminstrative Team
        </Typography>
        <Typography
            variant="lead"
            className="font-normal !text-gray-500 max-w-xl"
        >
           
        </Typography>
    </div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {execu.map((props, key) => (
            <TeamCard key={key} {...props}  />
        ))}
    </div>

    
    <div className="mt-10 lg:mt-20 flex flex-col">
        <div className="w-full lg:w-auto mb-10 lg:mb-20">
            <Typography
                variant="h2"
                color="blue-gray"
                className="mt-6 mb-3 text-3xl lg:text-4xl"
            >
                Algorithmic Developer
            </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {algo.map((props, key) => (
                <TeamCard key={key} {...props} />
            ))}
        </div>
    </div>

   
    <div className="mt-10 lg:mt-20">
        <div className="mb-10 lg:mb-20">
            <Typography
                variant="h2"
                color="blue-gray"
                className="mt-6 mb-3 text-3xl lg:text-4xl"
            >
                Client Services
            </Typography>
            <Typography
                variant="lead"
                className="font-normal !text-gray-500 max-w-xl"
            >
               
            </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((props, key) => (
                <TeamCard key={key} {...props} />
            ))}
        </div>
    </div>

   
    <div className="mt-10 lg:mt-20 flex flex-col ">
        <div className="w-full lg:w-auto mb-10 lg:mb-20">
            <Typography
                variant="h2"
                color="blue-gray"
                className="mt-6 mb-3 text-3xl lg:text-4xl"
            >
                Academic Researcher
            </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {academic.map((props, key) => (
                <TeamCard key={key} {...props} />
            ))}
        </div>
    </div>

</div>



        </section>
    );
}

export default People;