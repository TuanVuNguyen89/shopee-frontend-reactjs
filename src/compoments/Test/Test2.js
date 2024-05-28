import { UploadImage, TestUploadImage } from '../../services/TestService'
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

const Test2 = (props) => {
    const [listImage, setListImage] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await TestUploadImage();

        setListImage(response.DT);
    }

    return (
        <div>
            {
                listImage.map((item, index) => {
                    let imageBase64 = '';
                    if (item.image) {
                        imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                    }

                    return (
                        <div>
                            <span> ProductId: {item.productId} </span>
                            <span> Img: </span>
                            <img src={imageBase64} alt={`Product ${item.productId}`} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Test2;
