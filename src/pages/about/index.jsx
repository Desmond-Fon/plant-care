import aboutImg from '../../assets/aboutImg.svg'
import { Link } from 'react-router-dom';


const About = () => {
    return (<div className="px-[20px] lg:px-[120px]">
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[56px]'>
            <div className='lg:w-1/2'>
                <h1 className="text-[36px] lg:text-[48px] pb-[20px] hidden lg:block"><span className="font-bold">About</span> Us</h1>
                <p className='text-[18px] lg:text-[24px] text-tertiary'>
                    Welcome to our Plant Disease Detection and Management System, your reliable partner in maintaining the health of your crops and gardens. Our platform leverages advanced machine learning algorithms to help you quickly identify and manage plant diseases, ensuring your plants thrive with minimal intervention.
                </p>
            </div>
            <div className='lg:w-1/2'>
                <img src={aboutImg} alt="" />
            </div>
            <h1 className="text-[36px] lg:text-[48px] lg:hidden"><span className="font-bold">About</span> Us</h1>

        </div>

        <div className='mt-16'>
            <h1 className="text-[36px] lg:text-[48px] pb-[20px]">Our <span className="font-bold">Mission
            </span></h1>
            <p className='text-[18px] lg:text-[24px] text-tertiary'>
                We aim to empower farmers, gardeners, and plant enthusiasts with the tools and knowledge they need to effectively detect and manage plant diseases. By providing a user-friendly platform for disease detection, we hope to reduce crop loss, improve yields, and promote sustainable agricultural practices.


            </p>
        </div>
        <div className='mt-16'>
            <h1 className="text-[36px] lg:text-[48px] pb-[20px]">Why <span className="font-bold">Choose Us?
            </span></h1>
            <p className='text-[18px] lg:text-[24px] text-tertiary'>
                Our platform is designed for ease of use, allowing anyone to quickly diagnose plant health issues with just a few clicks. Whether you are a seasoned farmer or a hobbyist gardener, our system provides the insights you need to take proactive measures in protecting your plants.


            </p>
        </div>
        <div className='mt-16'>
            <h1 className="text-[36px] lg:text-[48px] pb-[20px] text-center"><span className="font-bold">Explore
            </span> More</h1>
            <p className='text-[18px] lg:text-[24px] lg:px-[20%] text-center text-tertiary'>
                To learn more about how to use our system and get started with detecting plant diseases, please visit the <Link to={'/detect'} className='underline text-primary hover:text-secondary'>Analyze</Link> page.
            </p>
        </div>
    </div>);
}

export default About;