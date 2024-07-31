import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sectors from '../Pages/Sectors';

const Sector = () => {
    return (
        <section className="container -mt-12 mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4 ">
                <SectorCard title="Algorithmic Trading" sector='Algorithmic' description='Revolutionizing financial predictions and strategies through advanced AI and ML algorithms.' />
                <SectorCard title="Client Services" sector='Client' description="Providing innovative, tailored solutions for optimal performance in investment banking." />
                <SectorCard title="Academic Research" sector='Academic' description="Advancing financial research with pioneering studies and interdisciplinary collaboration." />
            </div>
        </section>
    );
}

const SectorCard = ({ title, description, sector }) => {


    const info = [
        {
          sector: 'Algorithmic',
          description: "Algorithmic Development is at the heart of our lab's technological innovations. " +
            "We specialize in creating sophisticated algorithms that enhance data analysis, " +
            "machine learning, and decision-making processes. " +
            "Our team is committed to developing cutting-edge solutions that address complex problems and drive advancements in various sectors."
        },
        {
          sector: 'Client',
          description: 'Our Client Services sector focuses on providing tailored solutions to meet the unique needs of our clients. From consultancy to hands-on support, we offer a range of services designed to optimize performance and drive success. Our team works closely with clients to understand their challenges and deliver customized strategies that align with their goals.'
        },
        {
          sector: 'Academic',
          description: 'In the realm of Academic Research, our lab is dedicated to pioneering advancements in various fields of study. Our researchers delve into theoretical and applied aspects, pushing the boundaries of knowledge and innovation. With a focus on cutting-edge methodologies and collaborative projects, we aim to contribute significantly to academic literature and practical applications.'
        }
    ];


    const obj = info.find(value => (sector === value.sector))

    const [isExpand, setIsExpand] = useState(false);

    const expandHandler = ({target}) => {
        const exp = target.getAttribute('dataExpand');

        if (exp === 'show more') {
            setIsExpand(true);
        }
        else if (exp === 'show less'){
            setIsExpand(false);
        }


    }
    return (
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md ">
            <Card className="w-full bg-white">
                <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent">
                    <Typography
                        variant="h4"
                        className="font-semibold font-sans text-blue-950 ml-5"
                    >
                        {title}
                    </Typography>
                </CardHeader>

                <CardBody>



                    <Typography
                        color="blue-gray"
                        className="mt-1 mb-2 text-[16px] font-normal"
                    >
                        {description}

                        <Typography
                            variant="h4"
                            className="text-[16px] font-normal  text-blue-600 hover:text-blue-950 "

                    >
                        {
                            isExpand ?
                            (<>
                                <br />
                                <p>

                                    {obj.description}

                                <br />
                                <h4 dataExpand="show less"
                                    onClick={expandHandler}
                                    className="text-[16px] font-normal  text-blue-600 hover:text-blue-950 ">
                                        show less
                                </h4>
                                </p>
                            </>)
                            : (<><h4 dataExpand="show more"
                                onClick={expandHandler}> show more</h4></>)



                        }

                    </Typography>

                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 px-4 ">

                </CardFooter>
            </Card>
        </div>
    );
}

export default Sector;


