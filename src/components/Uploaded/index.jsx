import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const Uploaded = () => {
    const { fileUri } = useParams();
    const [textToCopy, setTextToCopy] = useState(null);

    const buttonRef = useRef(null);

    useEffect(() => {
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    buttonRef.current.classList.remove('copy-button-not-clicked');
                    buttonRef.current.classList.add('copy-button-clicked');
                    setTextToCopy(null);
                })
        }
    }, [textToCopy]);

    const apiUrl = 'https://image-uploader-modasby.herokuapp.com/api/image';

    return (
        <>
            <div className="container">
                <div className='icon-done'></div>

                <div className='uploaded-text'>
                    Uploaded Successfully!
                </div>

                <div>
                    <img className='uploaded-image' src={`${apiUrl}/${fileUri}`} alt="uploaded" />
                </div>

                <div className='uploaded-link-container'>
                    <p className='uploaded-link'>{`${apiUrl}/${fileUri}`}</p>
                    <button className='copy-button-not-clicked' ref={buttonRef} onClick={() => setTextToCopy(`${apiUrl}/${fileUri}`)}></button>
                </div>
            </div>
        </>
    );
}

export default Uploaded;