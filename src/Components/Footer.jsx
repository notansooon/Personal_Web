import { Typography, IconButton } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="px-8 py-28">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {links.map((link, index) => (
                        <ul key={index}>
                            <li>
                                <Typography
                                    as="a"
                                    href="#"
                                    color="white"
                                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                                >
                                    {link}
                                </Typography>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="flex gap-2">
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-twitter text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                        </IconButton>
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-youtube text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                        </IconButton>
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-instagram text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                        </IconButton>
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-github text-lg text-gray-500 transition-colors hover:text-blue-gray-900" />
                        </IconButton>
                    </a>
                </div>
                <Typography
                    color="blue-gray"
                    className="mt-8 !text-sm !font-normal text-gray-500"
                >
                    Copyright &copy; {currentYear} Material Tailwind
                </Typography>
            </div>
        </footer>
    );
}
export default Footer;


