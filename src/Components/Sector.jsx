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
                <SectorCard title="Algorithmic Trading" />
                <SectorCard title="Client Services" />
                <SectorCard title="Academic Research" />
            </div>
        </section>
    );
}

const SectorCard = ({ title }) => {
    return (
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Card className="w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold font-sans"
                    >
                        {title}
                    </Typography>
                </CardHeader>

                <CardBody>
                    <Typography
                        color="blue-gray"
                        className="mt-1 mb-2 text-[16px] font-normal"
                    >
                        {/* Replace this placeholder text with actual content for each sector */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                    </Typography>
                </CardBody>

                <CardFooter className="pt-0 px-4">
                    <Link to={'/Sectors'}>
                        <Button>Read More</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Sector;

