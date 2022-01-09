import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/index';
import './style.css';

const Uploading = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { fileUri } = useParams();

    if (!isLoading) {
        window.location.href = `/uploaded/${fileUri}`;
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    })

    return (
        <>
            <div id="loading-container" className="container">
                <p className="header">Uploading...</p>
                <div className="loading-bar"></div>
            </div>
            
            <Footer />
        </>
    )
}

export default Uploading;