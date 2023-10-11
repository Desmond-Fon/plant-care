import { useState } from "react";
import pic1 from '../assets/events.png'
import pic2 from '../assets/partner.png'

const MyDiv = () => {
    // eslint-disable-next-line no-unused-vars
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolled, setScrolled] = useState(false)

    const onScroll = (event) => {
        const { scrollTop } = event.target;
        setScrollPosition(scrollTop);

        if (scrollTop >= (event.target.clientHeight / 2.0)) {
            // Change the content of the div
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };

    return (
        <div className=' w-[60%]'>
            <h1>Hellooooo world</h1>
            <div onScroll={onScroll} className='flex justify-between items-center overflow-scroll h-[200px]  px-4 mt-10 scrollable-div scroll-ml-auto'>
                <div className='flex justify-between items-center flex-col gap-5 w-[50%] text-left  h-[100%]'>
                    <p className={`${!scrolled ? '' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis consectetur beatae, veniam iusto pariatur impedit officia fuga quae ex vel dolore molestias! Nesciunt provident alias pariatur magnam, tempore quam.</p>
                    <p className={`${scrolled ? '' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis consectetur beatae, veniam iusto pariatur impedit officia fuga quae ex vel dolore molestias! Nesciunt provident alias pariatur magnam, tempore quam.</p>
                </div>
                <div className='w-[50%] h-[100%]'>
                    <img src={`${!scrolled ? pic2 : ''}`} alt="" className="object-cover h-[100%]" />
                    <img src={`${scrolled ? pic1 : ''}`} alt="" className="object-cover h-[100%]" />
                </div>
            </div>
        </div>
    );
};

export default MyDiv;
