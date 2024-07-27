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
import { Link } from 'react-router-dom'


const Home = () => {
    return (<div className="px-[120px]">
        <div className="flex justify-between items-center gap-[56px]">
            <div className="w-1/2">
                <h1 className="text-[48px] ">Customize your place with the <span className="font-bold">best</span> possible plant solutions</h1>

                <p className='text-[32px] text-tertiary pt-4 pb-[40px]'>Recommendations that are healthy <br />and match your aesthetics</p>

                <Link to={'/detect'} className='py-[10px] text-white px-[55px] rounded-[20px] bg-primary'>Begin Analysis</Link>
            </div>
            <div className="w-1/2 flex gap-[20px]">
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

        <div className='flex flex-col items-center'>
            <h2 className='text-[48px]'><span className='font-bold'>Top</span> Picks</h2>
            <p className='text-[32px] text-tertiary pt-[24px] pb-[40px]'>Trained to identify 1500+ plant diseases</p>

            <div className='relative flex justify-between items-center gap-10'>
                <img src={ellipse1} className='absolute z-10 -top-12 w-full' alt="" />
                <img src={slide1} alt="" /><img src={slide2} alt="" /><img src={slide3} alt="" /><img src={slide4} alt="" />
                <img src={ellipse2} className='absolute z-10 -bottom-10 w-full' alt="" />
            </div>
        </div>

        <div className='flex justify-center items-center mt-[80px] pb-[40px]'>
            <div className='h-[4px] rounded-[10px] w-[70%] bg-[#1B4332]'></div>
        </div>
    </div>);
}

export default Home;