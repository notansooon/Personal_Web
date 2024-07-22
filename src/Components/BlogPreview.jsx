import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

function BlogPostCard({ img, title, desc }) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mb-6 h-52">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-0">
                <Typography
                    as="a"
                    href="#"
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 normal-case"
                >
                    {title}
                </Typography>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>
                <Button className='bg-blue-950' color="gray">read more</Button>
            </CardBody>
        </Card>
    );
}

const posts = [
    {
        img: "https://www.material-tailwind.com/image/blog-1.png",
        title: "Siri brings hands-free",
        desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
    },
    {
        img: "https://www.material-tailwind.com/image/blog-2.png",
        title: "More Comfort",
        desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
    },
    {
        img: "https://www.material-tailwind.com/image/blog-3.png",
        title: "Train Your Brain",
        desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
    },
    {
        img: "https://www.material-tailwind.com/image/blog-4.png",
        title: "Grow Your Business",
        desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
    },
];

export function BlogPreview() {
    return (
        <section className="lg:py-28 py-10 px-8">
            <div className="container mx-auto lg:mb-20 mb-10 text-center">
                <Typography
                    variant="h1"
                    className="mb-2 !text-2xl lg:!text-4xl"
                >
                    Check out what&apos;s new
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-xl !font-normal !text-gray-500"
                >
                    We get insulted by others, lose trust for those others. We get back
                    freezes every winter
                </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                {posts.map(({ img, title, desc }) => (
                    <BlogPostCard key={title} img={img} title={title} desc={desc} />
                ))}
            </div>
        </section>
    );
}

export default BlogPreview;

