import Footer from '../Footer/index';
import './style.css';

const Uploading = () => {
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