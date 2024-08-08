import { useState } from 'react';
import axios from 'axios';
import { useAppToast } from '../lib/UseAppToast';
import { PhotoIcon } from '@heroicons/react/16/solid'
import CustomModal from './Modal';

const ImageUploader = () => {
    const toast = useAppToast();
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(!show);
    };

    const [loader, setLoader] = useState(false);
    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedImage);
        setLoader(true);
        try {
            const response = await axios.post(
                'https://plant.id/api/v3/health_assessment?details=local_name,description,url,treatment,classification,common_names,cause',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Api-Key': '9nFpMKyxq7jy9QWRpGXJ36FTJOILfFL4wJpxhVZQRRODScFhWd',
                    },
                }
            );
            toast({
                status: "success",
                description: response.message || "Assessment Successful",
            });
            handleShow()
            // Handle the response from the API
            console.log(response.data);
            setLoader(false);
        } catch (error) {
            console.error(error);
            setLoader(false);
        }
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {show && <CustomModal
                isOpen={show}
                onClose={handleClose}
                className="lg:w-[80%] h-full"
            >
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id laborum soluta deserunt! Saepe magni sit placeat debitis aut, illum soluta corporis quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id laborum soluta deserunt! Saepe magni sit placeat debitis aut, illum distinctio nihil nobis deleniti expedita enim iusto soluta corporis quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id laborum soluta deserunt! Saepe magni sit placeat debitis aut, illum distinctio nihil nobis deleniti expedita enim iusto soluta corporis quaerat?</p>
            </CustomModal>}
            <div className='flex flex-col items-center gap-10'>
                {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
                <div className="text-center border-primary border-[2px] border-dashed p-16 rounded-[8px]">
                    {image ? (
                        <img src={image} alt="Uploaded preview" className="mx-auto h-20 w-26 object-cover rounded-md" />
                    ) : (
                        <PhotoIcon aria-hidden="true" className="mx-auto h-20 w-20 text-gray-300" />
                    )}
                    <div className="mt-4 mb-2 flex text-[16px] leading-6">
                        <label
                            className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-secondary"
                        >
                            <span className="px-2">Upload a file</span>
                            <input
                                type="file" accept="image/*" onChange={handleImageChange} className="sr-only"
                            />
                        </label>
                        <p className="pl-2">or drag and drop</p>
                    </div>
                    <p className="text-[16px] leading-5">PNG, JPG, GIF up to 10MB</p>
                </div>
                <button onClick={handleImageUpload} className='py-[10px] text-white px-[55px] rounded-[20px] bg-primary'>{loader ? (
                    <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                    </svg>
                ) : (
                    <>
                        Upload
                    </>
                )}</button>
            </div>
            
        </>
    );
};

export default ImageUploader;
