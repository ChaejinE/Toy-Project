import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../signin/signin.css'
import createUserAPI from './api/signup-api'
import MyModal from '../utils/modal';

function SignUp() {
    const bakcend_url = "http://localhost:8000/api/user/create";
    let navigate = useNavigate();
    let userData = { "firstName": null, "lastName": null, "email": null, "password1": null, "password2": null };
    let [singUpResult, setSingUpResult] = useState({ "isExistNull": false, "errStr": "" });
    let [modal, setModal] = useState(false);
    let [modalData, setModalData] = useState({ "title": "", "content": "" });

    /* eslint-disable */
    useEffect(() => {
        if (singUpResult.isExistNull) {
            modalData.title = "Sign Up Error";
            modalData.content = singUpResult.errStr;
            let copy = { ...modalData };
            setModalData(copy);
        }
    }, [singUpResult]);

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
        <div>
            <section className="vh-100 gradient-custom">
                {modal ? <MyModal show={modal} title={modalData.title} content={modalData.content} setModal={setModal} /> : null}
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-2 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                                        <p className="text-white-50 mb-5">Please enter your name, email and password!</p>

                                        <div className="row h-100">
                                            <div className="col-md-6 mb-1">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                                    <input onChange={(e) => { userData.firstName = e.target.value; }} type="text" id="form3Example1" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                    <input onChange={(e) => { userData.lastName = e.target.value; }} type="text" id="form3Example2" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input onChange={(e) => { userData.email = e.target.value; }} type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX1">Password</label>
                                            <input onChange={(e) => { userData.password1 = e.target.value; }} type="password" id="typePasswordX1" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX2">Validation Password</label>
                                            <input onChange={(e) => { userData.password2 = e.target.value; }} type="password" id="typePasswordX2" className="form-control form-control-lg" />
                                        </div>

                                        <button onClick={() => { createUserAPI(singUpResult, setSingUpResult, bakcend_url, userData) }}
                                            className="btn btn-outline-light btn-mg px-3 col-md-6 mb-4" type="button">
                                            Sign Up
                                        </button>

                                        <div className="mb-0">
                                            Do you have an account?
                                            <span onClick={() => { navigate("/") }}>
                                                <p className="text-white-50 fw-bold spanointer pointer">Sign In</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default SignUp;