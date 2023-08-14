import axios from "axios";
import qs from "qs";

function kakaoLoginAPI(url, redirect_url) {
    url = url + "/kakao/auth?redirect_url=" + redirect_url;
    console.log("url : ", url);
    axios.get(url)
        .then((result) => {
            console.log("success");
            console.log(result);
            return result;
        })
        .catch((err) => {
            console.error("error");
            console.log(err);
        })
}

export default kakaoLoginAPI