import axios from "axios";
import qs from "qs";

function loginAPI(standardState, setStateFunc, url, logInData) {
    if (Object.values(logInData).some(item => item === null)) {
        console.error("null is exsting of the values");
        standardState.isExistNull = true;
        standardState.errStr = "Exist the empty item";
        let result = { ...standardState };
        setStateFunc(result);
    } else {
        const config = { "Content-Type": 'application/x-www-form-urlencoded' };
        logInData["grant_type"] = "";
        logInData["scope"] = "";
        logInData["client_id"] = "";
        logInData["client_secret"] = "";
        logInData["username"] = logInData["firstName"] + logInData["lastName"];
        axios.post(url, qs.stringify(logInData), config)
            .then((result) => {
                console.log("login success:\n", result);
            })
            .catch((err) => {
                console.log("login Error:\n", err);
                standardState.isExistNull = true;
                standardState.errStr = err.message;
                let result = { ...standardState };
                setStateFunc(result);
            })
    }
}

export default loginAPI;
