import axios from "axios";
import { useNavigate } from "react-router-dom";

function createUserAPI(standardState, setStateFunc, url, userData) {
    if (Object.values(userData).some(item => item === null)) {
        console.error("null is exsting of the values");
        standardState.isExistNull = true;
        standardState.errStr = "Exist the empty item";
        let result = { ...standardState };
        setStateFunc(result);
    } else {
        userData["username"] = userData["firstName"] + userData["lastName"];
        const config = { "Content-Type": 'application/json' };
        axios.post(url, userData, config)
            .then((reponse) => {
                console.log("enrollerUser success:\n", reponse);
                standardState.success = true;
                let result = { ...standardState };
                setStateFunc(result);
            })
            .catch((err) => {
                console.error("enrollUser Error:\n", err.message);
                standardState.isExistNull = true;
                standardState.errStr = err.message;
                let result = { ...standardState };
                setStateFunc(result);
            })
    }
}

export default createUserAPI;