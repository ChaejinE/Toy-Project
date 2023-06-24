import axios from "axios";

function createUserAPI(standardState, setStateFunc, url, userData) {
    if (Object.values(userData).some(item => item === null)) {
        console.error("null is exsting of the values");
        standardState.isExistNull = true;
        standardState.errStr = "Exist the empty item";
        let result = { ...standardState };
        setStateFunc(result);
    } else {
        userData["username"] = userData["firstName"] + userData["lastName"];
        delete userData["firstName"]; delete userData["lastName"];
        const config = { "Content-Type": 'application/json' };
        axios.post(url, userData, config)
            .then((result) => { console.log("enrollerUser success:\n", result); })
            .catch((err) => { console.log("enrollUser Error:\n", err); })
    }
}

export default createUserAPI;