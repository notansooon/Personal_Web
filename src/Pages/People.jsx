import {
    Card,
    CardBody,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
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


const members = [
    {
        img: Ali,
        name: "Ali Habihnia",
        title: "Principle Investigator",
        
    },
    {
        img: Ben,
        name: "Ben Cumming",
        title: "VP of Client Services",
        
    },
    {
        img: Alex,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
    {
        img: Roshan,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
];

const algo = [
    {
        img: Ali,
        name: "Ali Habihnia",
        title: "Principle Investigator",
        
    },
    {
        img: Ben,
        name: "Jordan Michael",
        title: "Front-End Developer",
        
    },
    {
        img: Ben_f,
        name: "Ben Facciani",
        title: "Algorithmic Developer",
        
    },
    {
        img: Roshan,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
];

const acedemic = [
    {
        img: Paul,
        name: "Ali Habihnia",
        title: "Principle Investigator",
        
    },
    {
        img: Ben,
        name: "Jordan Michael",
        title: "Front-End Developer",
        
    },
    {
        img: Alex,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
    {
        img: Roshan,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
];

const services = [
    {
        img: Alex,
        name: "Ali Habihnia",
        title: "Principle Investigator",
        
    },
    {
        img: Roshan,
        name: "Jordan Michael",
        title: "Front-End Developer",
        
    },
    {
        img: Alex,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
    {
        img: Roshan,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        
    },
];









function TeamCard({ img, name, title, desc }) {

    
    return (
        <Card color="transparent" shadow={false}>
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
        <section className="py-8 px-8 lg:py-28">


            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">our team</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                    Each member brings unique skills and perspectives, working collaboratively to achieve excellence.
                    Get to know the people behind our success and discover the stories that inspire our journey.
                </p>

                <div className="flex items-center justify-center">
                    <div className="flex items-center p-1 border border-blue-950 rounded-xl">
                        <button className="px-4 py-2 mx-4 text-sm font-medium text-blue-950 capitalize
                        transition-colors duration-300 md:py-3  focus:outline-none hover:bg-blue-950 hover:text-white
                        rounded-xl md:mx-8 md:px-12" data-scroll='400px' onClick={scrollHandler}>Executive</button>

                        <button className="px-4 py-2 mx-4 text-sm font-medium text-blue-950 capitalize
                        transition-colors duration-300 md:py-3  focus:outline-none hover:bg-blue-950 hover:text-white
                        rounded-xl md:mx-8 md:px-12" data-scroll='1000px' onClick={scrollHandler}>Algorithmic </button>

                        <button className="px-4 py-2 text-sm font-medium text-blue-950 capitalize
                        transition-colors duration-300 md:py-3  focus:outline-none hover:bg-blue-950 hover:text-white
                        rounded-xl md:px-12" data-scroll='1600px' onClick={scrollHandler}>Client Servies</button>

                        <button className="px-4 py-2 text-sm font-medium text-blue-950 capitalize
                        transition-colors duration-300 md:py-3  focus:outline-none hover:bg-blue-950 hover:text-white
                        rounded-xl md:px-12" data-scroll='2200px' onClick={scrollHandler}>Academic Researcher</button>
                    </div>
                </div>
            </div>

            <div className="container ">

    <div className="mb-10 lg:mb-20">
        <Typography
            variant="h2"
            color="blue-gray"
            className="mt-6 mb-3 text-3xl lg:text-4xl"
        >
            The Executive Team
        </Typography>
        <Typography
            variant="lead"
            className="font-normal !text-gray-500 max-w-xl"
        >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
        </Typography>
    </div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {algo.map((props, key) => (
            <TeamCard key={key} {...props} />
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
                We&apos;re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game of life you
                need to appreciate every moment.
            </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {members.map((props, key) => (
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
            {services.map((props, key) => (
                <TeamCard key={key} {...props} />
            ))}
        </div>
    </div>

</div>



        </section>
    );
}

export default People;