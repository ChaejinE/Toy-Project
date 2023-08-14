import axios from "axios";

function kakaoAPI(url) {
    url += "/kakao/get/client_id"

    axios.get(url)
        .then((resp) => {
            let baseURL = "https://kauth.kakao.com/oauth/authorize?response_type=code";
            let clientID = "&client_id=" + resp.data.client_id;
            let redirectURL = "&redirect_uri=" + "http://localhost:3000";
            window.location.href = baseURL + clientID + redirectURL;
        })
        .catch((e) => { 
            console.log(e); 
        })
}

export default kakaoAPI;