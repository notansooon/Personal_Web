import {
    Card,
    CardBody,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

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

const members = [
    {
        img: `https://www.material-tailwind.com/img/avatar1.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
        desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar2.jpg`,
        name: "Jordan Michael",
        title: "Front-End Developer",
        desc: "And I love you like Kanye loves Kanye. We need to restart the human foundation.",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar5.jpg`,
        name: "Nora Hazel",
        title: "UI/UX Designer",
        desc: "If you have the opportunity to play this game of life you need to appreciate every moment.",
    },
];

export function People() {
    return (
        <section className="py-8 px-8 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-10 lg:mb-20">
                    <IconButton size="lg">
                        <UserGroupIcon className="h-6 w-6" />
                    </IconButton>
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
                <div className="col-span-2 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {members.map((props, key) => (
                        <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default People;