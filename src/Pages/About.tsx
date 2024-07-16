import React from 'react';

const About = () => {
    return (
        <>
            <ContactUs>

            </ContactUs>
        </>

    );
}


const ContactUs=()=>
{
    return(
        <section className="contact mt-20 xl:mt-36 relative z-20">
            <div className="contact__container container mx-auto bg-pink-100 sm:rounded-[70px] py-20">
                <div className="contact__text max-w-[640px] mx-auto text-center">
                    <h2 className="h2 text-black mb-4">Do you want to join DLQF?</h2>
                    <p className="text-black mb-8 max-w-sm xl:max-w-none mx-auto">Type out some brief content here</p>
                    <button className='mx-auto'>Apply Today
                    </button>
                </div>

            </div>
        </section>
    )

}

export default About;

