import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";
import Uploaded from "./components/Uploaded";
import Uploading from "./components/Uploading";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Upload />} />
                <Route path="/uploading/:fileUri" element={<Uploading />} />
                <Route path="/uploaded/:fileUri" element={<Uploaded />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;