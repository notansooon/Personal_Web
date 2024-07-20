import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Sector = () => {
    return (
        <section className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center gap-4">
                <SectorCard />
                <SectorCard />
                <SectorCard />
            </div>
        </section>
    );
}

function SectorCard() {
    return (
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Card className="w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                        Enterprise
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="mt-1 mb-2 text-[20px] font-bold"
                    >
                        Autodesk looks to future of 3D printing with Project Escher
                    </Typography>
                </CardHeader>

                <CardFooter className="pt-0 px-4">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Sector;
