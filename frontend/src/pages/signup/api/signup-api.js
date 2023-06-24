import axios from "axios";

function createUser(url, userData) {
    let result = { "isExistNull": false, "errStr": "No Error" };

    if (Object.values(userData).some(item => item === null)) {
        console.error("null is exsting of the values");
        result.isExistNull = true;
        result.errStr = "null is exsting of the values";
    } else {
        userData["username"] = userData["firstName"] + userData["lastName"];
        delete userData["firstName"]; delete userData["lastName"];
        const config = { "Content-Type": 'application/json' }
        axios.post(url, userData, config)
            .then((result) => { console.log("enrollerUser success:\n", result); })
            .catch((err) => { console.log("enrollUser Error:\n", err); })
    }

    return result;
}

export default createUser;