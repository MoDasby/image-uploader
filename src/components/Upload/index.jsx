import { useEffect, useState } from 'react';
import { uploadFile } from '../../utils/api';
import Uploading from '../Uploading/index'
import Footer from '../Footer/index';
import './style.css';

const Upload = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState();

    useEffect(() => {

        async function fetchData() {
            if (file) {
                setIsLoading(true);
                const req = await uploadFile(file);
                const fileUri = req.id;

                window.location.href = `/uploaded/${fileUri}`;
            }
        }

        fetchData();
    }, [file]);

    function dropHandler(e) {
        e.preventDefault();

        const data = new FormData();

        const image = e.dataTransfer.items[0].getAsFile();

        if (image.type.startsWith("image/") === false) {
            document.querySelector(".modal").setAttribute("class", "modal-active");

            return;
        }

        data.append("file", image);
        setFile(data);
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function onChangeHandler(e) {
        e.preventDefault();

        const data = new FormData();

        const image = e.target.files[0];

        if (image.type.startsWith("image/") === false) {
            document.querySelector(".modal").setAttribute("class", "modal-active");

            return;
        }

        data.append("file", image);
        setFile(data);
    }



    return (
        isLoading ? <Uploading /> :
            <>
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => document.querySelector(".modal-active").setAttribute("class", "modal")}>&times;</span>
                        <p>File must be an image</p>
                    </div>
                </div>

                <div className="container" style={{ height: "470px" }}>
                    <div className="header">
                        Upload your image
                    </div>

                    <div className='subheader'>
                        File should be Jpeg, Png...
                    </div>

                    <div className='drop-zone' onDrop={dropHandler} onDragOver={dragOverHandler}>
                        <div className='icon'>
                        </div>

                        <p>
                            Drag & Drop your image here
                        </p>
                    </div>

                    <span>
                        Or
                    </span>

                    <button onClick={() => document.querySelector("#file-input").click()}>Choose a file</button>

                    <input type='file' id="file-input" onChange={onChangeHandler} accept='image/*' hidden></input>
                </div>

                <Footer />
            </>
    )
}

export default Upload;