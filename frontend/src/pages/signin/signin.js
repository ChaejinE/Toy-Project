import './signin.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import loginAPI from "./api/signin-api"
import MyModal from '../utils/modal';

function SignIn() {
    const bakcend_url = "http://localhost:8000/api/user/login";
    let navigate = useNavigate();
    let logInData = {
        "firstName": null, "lastName": null, "password": null
    };
    let [signInResult, setSingInResult] = useState({ "isExistNull": false, "errStr": "" });
    let [modal, setModal] = useState(false);
    let [modalData, setModalData] = useState({ "title": "", "content": "" });

    /* eslint-disable */
    useEffect(() => {
        if (signInResult.isExistNull) {
            modalData.title = "Sign In Error";
            modalData.content = signInResult.errStr;
            let copy = { ...modalData };
            setModalData(copy);
        }
    }, [signInResult]);

    useEffect(() => {
        modalData.title && modalData.content ? setModal(true) : null;
    }, [modalData]);

    useEffect(() => {
        if (!modal && modalData.title && modalData.content) {
            for (let key in modalData) {
                modalData[key] = "";
            }
            let copy = { ...modalData };
            setModalData(copy);
        }
    }, [modal])

    return (
        <section className="vh-100 gradient-custom" >
            {modal ? <MyModal show={modal} title={modalData.title} content={modalData.content} setModal={setModal} /> : null}
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                                    <div className="row h-100">
                                        <div className="col-6 mb-1">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1">First name</label>
                                                <input onChange={(e) => { logInData.firstName = e.target.value; }} type="text" id="form3Example1" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-6 mb-1">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                <input onChange={(e) => { logInData.lastName = e.target.value; }} type="text" id="form3Example2" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        <input onChange={(e) => { logInData.password = e.target.value; }} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button onClick={() => { loginAPI(signInResult, setSingInResult, bakcend_url, logInData) }} className="btn btn-outline-light btn-lg px-5" type="submit">Sign In</button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>
                                </div>

                                <div className="mb-0">Don't you have an account?
                                    <div onClick={() => { navigate("/sign-up") }}>
                                        <p className="text-white-50 fw-bold pointer">Sign Up</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SignIn;