import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'

const Footer = () => {
    return (<>
        <div className='flex justify-between items-start py-[140px] px-[120px] text-[20px]'>
            <Link to={'/'} className='w-1/2'><img src={logo} alt="" /></Link>
            <div className='w-1/2 flex justify-start gap-[85px] items-start'>
                <div className=''>
                    <h1 className='pb-[57px]'>Team</h1>

                    <div>
                        <ul className='flex flex-col gap-[33px] items-start'>
                            <li>Gardening</li>
                            <li>Edible</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='pb-[57px]'>Services</h1>

                    <div>
                        <ul className='flex flex-col gap-[33px] items-start'>
                            <li>Project</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='pb-[57px]'>Terms of use</h1>

                    <div>
                        <ul className='flex flex-col gap-[33px] items-start'>
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