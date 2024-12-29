
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactSection = () => {


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_serviceID, import.meta.env.VITE_templateID, e.target, import.meta.env.VITE_EMAILKEY)
            .then(() => {

                Swal.fire({
                    title: 'Successful',
                    text: 'Email Send Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then(() => {
                    e.target.reset()
                })
            }, (error) => {
                Swal.fire({
                    title: 'FAILED...',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    }


    return (
        <section className='section' id='contactSection'>
            <div className="my-container">
                <SectionTitle bgTitle={'contact'} title={'get in touch'} />
                <div className='flex flex-col md:flex-row justify-between items-end gap-10'>
                    <div className='flex-1 w-full'>
                        <p className='section-desc mt-12 xl:mt-20 mb-12'>
                            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 10:00 p.m. ET, Saturday through Thursday
                        </p>
                        <form onSubmit={sendEmail} className='flex flex-col justify-between'>
                            <input required className='mb-5 lg:mb-8 border w-full p-3 text-sm font-semibold' type="text" name="from_name" id="name-input" placeholder='Your Name' />
                            <input required className='mb-5 lg:mb-8 border w-full p-3 text-sm font-semibold' type="email" name="reply_to" id="email-input" placeholder='Your Email' />
                            <textarea required className='mb-5 lg:mb-8 border p-3 text-sm font-semibold' name="message" id="message-input" cols="30" rows="5" placeholder='Message'></textarea>
                            <input type="submit" value="Submit message" className='my-btn cursor-pointer' style={{ width: '100%' }} />
                        </form>
                    </div>
                    <div className='flex-1 w-full'>
                        <iframe className='h-[350px] md:h-[470px] w-full' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d227.75655234223692!2d89.23353216083389!3d24.027367934902706!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688359407419!5m2!1sen!2sbd" style={{ border: "0", width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;