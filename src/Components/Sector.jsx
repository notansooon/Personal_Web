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
        <section className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4 ">
                <SectorCard title="Algorithmic Trading" description='Revolutionizing financial predictions and strategies through advanced AI and ML algorithms.' />
                <SectorCard title="Client Services" description="Providing innovative, tailored solutions for optimal performance in investment banking." />
                <SectorCard title="Academic Research" description="Advancing financial research with pioneering studies and interdisciplinary collaboration." />
            </div>
        </section>
    );
}

const SectorCard = ({ title, description }) => {

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
                                <p>Algorithmic Development is at the heart of our lab's technological innovations. 
                                We specialize in creating sophisticated algorithms that enhance data analysis, 
                                machine learning, and decision-making processes. 
                                Our team is committed to developing cutting-edge solutions that address complex problems and drive advancements in various sectors.
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


