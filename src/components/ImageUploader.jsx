import { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedImage);

        try {
            const response = await axios.post(
                'https://plant.id/api/v3/health_assessment',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Api-Key': '9nFpMKyxq7jy9QWRpGXJ36FTJOILfFL4wJpxhVZQRRODScFhWd',
                    },
                }
            );

            // Handle the response from the API
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload</button>
            <img src="http://plant.id/media/imgs/d6557f4a6e514019887a2bca0b4b2bd0.jpg" alt="" />
        </div>
    );
};

export default ImageUploader;
