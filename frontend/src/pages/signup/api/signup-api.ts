// import axios from "axios"; 

function createUser(url: string, userData: Object) {
    let result = { "isExistNull": false, "errStr": "No Error" };

    if (Object.values(userData).some(item => item === null)) {
        console.error("null is exsting of the values");
        result.isExistNull = true;
        result.errStr = "null is exsting of the values";
    }

    // axios.post(url, userData)
    //     .then((result) => { console.log("enrollerUser success:\n", result); })
    //     .catch((err) => { console.log("enrollUser Error:\n", err); })

    return result;
}

export default createUser;