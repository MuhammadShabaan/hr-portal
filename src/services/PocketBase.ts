import Pocketbase from "pocketbase";

const API_BASE_URL = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    if (BASE_URL) {
        return BASE_URL;
    } else {
        throw new Error("Environment variable 'VITE_API_BASE_URL' is not defined in .env file");
    }
}

const pb = new Pocketbase(API_BASE_URL());
export default pb;
