import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from "react";
import {Link} from "react-router-dom";
import Sectors from '../Pages/Sectors'

const Sector = () => {
    return (
        <section className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4">
                <SectorCard title="Algorithmic Trading" description=' Revolutionizing financial predictions and
                strategies through advanced AI and ML algorithms.' />
                <SectorCard title="Client Services" description="Providing innovative, tailored solutions for optimal
                performance in investment banking" />
                <SectorCard title="Academic Research" description="Advancing financial research with pioneering studies
                and interdisciplinary collaboration"/>
            </div>
        </section>
    );
}

const SectorCard = ({ title, description}) => {
    return (
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Card className="w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Typography
                        variant="h4"

                        className="font-semibold font-sans text-blue-950"
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

                    </Typography>
                </CardBody>

                <CardFooter className="pt-0 px-4">
                    <Link to={'/Sectors'}>
                        <Button>Learn More</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Sector;

