import aboutImg from '../../assets/aboutImg.svg'


const About = () => {
    return (<div className="px-[20px] lg:px-[120px]">
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[56px]'>
            <div className='lg:w-1/2'>
                <h1 className="text-[48px] pb-[20px] hidden lg:block"><span className="font-bold">About</span> Us</h1>
                <p className='text-[18px] lg:text-[24px]'>
                    Started as a small plant nursery plant planet is now offering home delivery service of various plant varities in 35+ cities. <br /> <br /> We work in the motto clean air with healthy plants. All the plants are grown with natural manure. <br /> <br /> Hope to hear more from you <br /><br /> Team Plant.
                    <br />
                </p>
            </div>
            <div className='lg:w-1/2'>
                <img src={aboutImg} alt="" />
            </div>
            <h1 className="text-[48px] lg:hidden"><span className="font-bold">About</span> Us</h1>

        </div>
    </div>);
}

export default About;