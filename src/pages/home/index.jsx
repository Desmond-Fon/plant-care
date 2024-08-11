import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img5.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import ellipse1 from '../../assets/curveBottom.svg'
import ellipse2 from '../../assets/curveTop.svg'
import slide1 from '../../assets/slide1.svg'
import slide2 from '../../assets/slide5.svg'
import slide3 from '../../assets/slide3.svg'
import slide4 from '../../assets/slide4.svg'
import slidee from '../../assets/slidee.svg'
import { Link } from 'react-router-dom'


const Home = () => {
    return (<div className="px-[20px] lg:px-[120px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[56px]">
            <div className="lg:w-1/2">
                <h1 className="lg:text-[48px] text-[36px] text-center lg:text-left">Welcome to <span className="font-bold">Plant Planet</span></h1>

                <p className='text-[24px] lg:pl-1 lg:text-[32px] text-tertiary pt-4 pb-[40px] text-center lg:text-left'>At Plant Planet, we combine technology and nature to help you create the perfect plant haven. Whether you are a seasoned gardener or just starting, our platform offers the tools you need to ensure your plants are healthy and beautiful.</p>

                <div className='flex justify-center items-center lg:justify-start'>
                    <Link to={'/detect'} className='py-[15px] text-[20px] text-white px-[55px] rounded-[20px] bg-primary'>Begin Analysis</Link>
                </div>
            </div>
            <div className="lg:w-1/2 flex gap-[20px]">
                <div className='flex flex-col gap-[20px]'>
                    <img src={img1} alt="" /><img src={img2} alt="" />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <img src={img3} alt="" /><img src={img4} alt="" />
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center mt-[80px] pb-[40px]'>
            <div className='h-[4px] rounded-[10px] w-[70%] bg-[#1B4332]'></div>
        </div>

        <div className=''>
            <h1 className="text-[36px] lg:text-[48px] text-center pb-[20px]">Why <span className="font-bold">Choose Us?
            </span></h1>
            <p className='text-[24px] lg:text-[28px] text-tertiary'>
                Our platform is designed for ease of use, allowing anyone to quickly diagnose plant health issues with just a few clicks. Whether you are a seasoned farmer or a hobbyist gardener, our system provides the insights you need to take proactive measures in protecting your plants.
            </p>
            <ul className='text-[24px] lg:text-[28px] text-tertiary list-disc pl-4 lg:pl-0 px-4 mt-5'>
                <li>AI-Powered Disease Detection: Instantly identify plant diseases with our advanced machine learning technology.
                </li>
                <li>Personalized Plant Recommendations: Get suggestions on the best plants that match your space and aesthetics.
                </li>
                <li>Expert Care Tips: Receive tailored advice to keep your plants thriving year-round.
                </li>
            </ul>
        </div>

        <div className='flex justify-center items-center mt-[80px] pb-[40px]'>
            <div className='h-[4px] rounded-[10px] w-[70%] bg-[#1B4332]'></div>
        </div>

        <div className='flex flex-col items-center'>
            <h2 className='text-[36px] lg:text-[48px]'><span className='font-bold'>Top</span> Picks</h2>
            <p className='text-[24px] text-center lg:text-left lg:text-[28px] text-tertiary pt-[24px] pb-[40px]'>Trained to identify 35 000+ plant diseases</p>

            <div className='relative flex flex-col lg:flex-row justify-between items-center gap-10'>
                <img src={ellipse1} className='absolute z-10 hidden lg:block -top-12 w-full' alt="" />
                <img src={slide1} alt="" />
                <img src={slide2} alt="" />
                <img src={slide3} alt="" />
                <img src={slide4} className='hidden lg:block' alt="" />
                <img src={slidee} className='lg:hidden' alt="" />
                <img src={ellipse2} className='absolute z-10 hidden lg:block -bottom-10 w-full' alt="" />
            </div>
        </div>

        <div className='flex justify-center items-center mt-[80px] pb-[40px]'>
            <div className='h-[4px] rounded-[10px] w-[70%] bg-[#1B4332]'></div>
        </div>
    </div>);
}

export default Home;