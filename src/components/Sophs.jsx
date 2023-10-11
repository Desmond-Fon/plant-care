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
        <div onScroll={onScroll} className='flex justify-between items-center w-[60%] overflow-scroll border-[2px] border-black h-[200px] pt-12 pb-12 px-4 mt-10'>
            <div className='flex justify-between items-center flex-col gap-5 w-[50%] text-left  h-[100%]'>
                <p className={`${!scrolled ? 'border-l-[4px] border-black pl-2' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis consectetur beatae, veniam iusto pariatur impedit officia fuga quae ex vel dolore molestias! Nesciunt provident alias pariatur magnam, tempore quam.</p>
                <p className={`${scrolled ? 'border-l-[4px] border-black pl-2' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis consectetur beatae, veniam iusto pariatur impedit officia fuga quae ex vel dolore molestias! Nesciunt provident alias pariatur magnam, tempore quam.</p>
            </div>
            <div className='w-[50%] h-[600px] bg-red-300'>
                <img src={`${scrolled ? pic1 : pic2}`} alt="" className="object-cover h-[100%]" />
            </div>
        </div>
    );
};

export default MyDiv;
