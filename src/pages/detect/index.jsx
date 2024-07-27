import ImageUploader from "../../components/ImageUploader";

const Detect = () => {
    return ( <div className="px-[120px]">
        <div className='flex justify-between items-center gap-[56px]'>
            <div className='w-1/2'>
                <h1 className="text-[48px] pb-[20px]"><span className="font-bold">About</span> Us</h1>
                <p className='text-[24px]'>
                    Started as a small plant nursery plant planet is now offering home delivery service of various plant varities in 35+ cities. <br /> <br /> We work in the motto clean air with healthy plants. All the plants are grown with natural manure. <br /> <br /> Hope to hear more from you <br /><br /> Team Plant.
                    <br />
                </p>
            </div>
            <div className='w-1/2'>
                <ImageUploader />
            </div>
        </div>    </div> );
}
 
export default Detect;