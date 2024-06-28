import React from 'react';
import PropTypes from "prop-types";




export const FileUpload = () => {
    return (
        <form className="max-w-lg mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
                Upload file
            </label>
            <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
            />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                A profile picture is useful to confirm you are logged into your account
            </div>
        </form>
    );
};

export const MessageForm = () => {
    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your message
            </label>
            <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
            ></textarea>
        </form>
    );
};


export const InputForm = ()=>{
    return (
        <form className="max-w-md mx-auto">
            <FormField
                id="floating_email"
                type="email"
                label="Email address"
                required
              />
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormField
                    id="floating_first_name"
                    type="text"
                    label="First name"
                    required
                />
                <FormField
                    id="floating_last_name"
                    type="text"
                    label="Last name"
                    required
                />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormField
                    id="floating_phone"
                    type="tel"
                    label="Phone number (123-456-7890)"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};



const FormField = ({ id, type, label, required, pattern}) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input
                type={type}
                name={id}
                id={id}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={required}
                pattern={pattern}
            />
            <label
                htmlFor={id}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );


};

//props validation
FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    pattern: PropTypes.string,
}
