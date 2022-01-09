import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/index';
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

    const apiUrl = 'http://localhost:8086/api/image';

    return (
        <>
            <div className="uploaded-container">
                <div className='icon-done'></div>

                <div className='uploaded-text'>
                    Uploaded Successfully!
                </div>

                <div>
                    <img className='uploaded-image' src={`${apiUrl}/download/${fileUri}`} alt="uploaded" />
                </div>

                <div className='uploaded-link-container'>
                    <p className='uploaded-link'>{`${apiUrl}/download/${fileUri}`}</p>
                    <button className='copy-button-not-clicked' ref={buttonRef} onClick={() => setTextToCopy(`${apiUrl}/download/${fileUri}`)}></button>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Uploaded;