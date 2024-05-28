import { UploadImage, TestUploadImage } from '../../services/TestService'
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

const Test = (props) => {
    const [listImage, setListImage] = useState([]);

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    const handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64 = await getBase64(file);
            //console.log(">>> base64 image", base64);

            let data = {
                productId: 1,
                image: base64
            }

            UploadImage(data);
        }

        //window.location.reload();
    }

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await TestUploadImage();

        setListImage(response.DT);
        //console.log(">>> check listImage 1", listImage);
        //console.log(">>> check image response.DT ", response.DT);
    }

    return (
        <>
            ProductId:
            <input type="email" className="form-control"></input>
            Image:
            <input type="file" className="form-control"
                onChange={(event) => handleOnChangeImage(event)}></input>
        </>
    );
}

export default Test;
