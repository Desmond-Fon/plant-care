import { useState } from 'react';
import axios from 'axios';
import { useAppToast } from '../lib/UseAppToast';

const ImageUploader = () => {
    const toast = useAppToast();
    const [selectedImage, setSelectedImage] = useState(null);
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
    };

    return (
        <div className='flex flex-col items-center gap-10'>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <img src="http://plant.id/media/imgs/d6557f4a6e514019887a2bca0b4b2bd0.jpg" alt="" />
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
    );
};

export default ImageUploader;
