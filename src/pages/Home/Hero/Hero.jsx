


import Lottie from "react-lottie";
import animationData from "../../../lotties/8306-programming-animation"
import darkAnimationData from "../../../lotties/dark-programming-animation.json"
import resumePdf from "/Jubayer_Hossain_MERN_Stack_Developer.pdf"

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const darkDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: darkAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section id="home" className={`max-h-screen md:min-h-[800px] md:max-h-screen flex justify-between items-center bg-no-repeat bg-contain px-5`}>
            <div className="my-container py-72 flex flex-col-reverse md:flex-row justify-between items-stretch md:items-center gap-12 lg:gap-0">
                <div className='text-center xl:text-start'>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold'><span className='text-transparent my-stroke'>Jubayer</span> <br /> Hossain</h1>
                    <p className='sub-heading md:text-start'>Front End Developer</p>
                    <a href={resumePdf} download={"Jubayer_Hossain_Resume"}>
                        <button className="my-btn mt-5">my Resume</button>
                    </a>
                </div>
                <div className="light-animation">
                    <div className='hidden xl:block'>
                        <Lottie
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />
                    </div>
                    <div className='hidden xl:hidden lg:block'>
                        <Lottie
                            options={defaultOptions}
                            height={500}
                            width={500}
                        />
                    </div>
                    <div className='lg:hidden block md:hidden pt-16'>
                        <Lottie
                            options={defaultOptions}
                            height={250}
                            width={250}
                        />
                    </div>
                    <div className='hidden md:block lg:hidden pt-16'>
                        <Lottie
                            options={defaultOptions}
                            height={350}
                            width={350}
                        />
                    </div>
                </div>
                <div className="dark-animation">
                    <div className='hidden xl:block'>
                        <Lottie
                            options={darkDefaultOptions}
                            height={600}
                            width={600}
                        />
                    </div>
                    <div className='hidden xl:hidden lg:block'>
                        <Lottie
                            options={darkDefaultOptions}
                            height={500}
                            width={500}
                        />
                    </div>
                    <div className='lg:hidden block md:hidden pt-16'>
                        <Lottie
                            options={darkDefaultOptions}
                            height={250}
                            width={250}
                        />
                    </div>
                    <div className='hidden md:block lg:hidden pt-16'>
                        <Lottie
                            options={darkDefaultOptions}
                            height={350}
                            width={350}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;