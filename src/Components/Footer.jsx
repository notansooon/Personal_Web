import {Typography, IconButton, Button} from "@material-tailwind/react";
const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center">
                <div>
                    <a className="flex-none text-xl font-semibold text-black" href="#"
                       aria-label="Brand">Brand</a>
                </div>


                <div className="mt-3">
                    <p className="text-gray-500">We're part of the <a
                        className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                        href="#">Htmlstream</a> family.</p>
                    <p className="text-gray-500 dark:text-neutral-500">© Preline. 2022 Htmlstream. All rights
                        reserved.</p>
                </div>


                <div className="flex gap-2">
                    <a href="#buttons-with-link">
                        
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-youtube text-lg text-gray-500 transition-colors hover:text-blue-gray-900"/>
                        </IconButton>
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-instagram text-lg text-gray-500 transition-colors hover:text-blue-gray-900"/>
                        </IconButton>
                    </a>
                    <a href="#buttons-with-link">
                        <IconButton variant="text" size="sm">
                            <i className="fa-brands fa-github text-lg text-gray-500 transition-colors hover:text-blue-gray-900"/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


