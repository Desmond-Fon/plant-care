import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'

const Footer = () => {
    return (<>
        <div className='flex justify-between items-start py-[60px] lg:py-[140px] px-[20px] lg:px-[120px] text-[20px] flex-col lg:flex-row gap-10'>
            <Link to={'/'} className='flex justify-center items-center lg:block w-full lg:w-1/2'><img src={logo} alt="" /></Link>
            <div className='w-1/2 flex justify-start gap-[50px] lg:gap-[85px] items-start flex-col lg:flex-row'>
                <div className=''>
                    <h1 className='pb-[30px] lg:pb-[57px] text-primary font-semibold'>Team</h1>

                    <div>
                        <ul className='flex flex-col gap-[15px] lg:gap-[33px] items-start'>
                            <li>Gardening</li>
                            <li>Edible</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='pb-[30px] lg:pb-[57px] text-primary font-semibold'>Services</h1>

                    <div>
                        <ul className='flex flex-col gap-[15px] lg:gap-[33px] items-start'>
                            <li>Project</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='pb-[30px] lg:pb-[57px] text-primary font-semibold'>Terms of use</h1>

                    <div>
                        <ul className='flex flex-col gap-[15px] lg:gap-[33px] items-start'>
                            <li>Privacy Policy</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;