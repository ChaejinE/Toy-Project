import '../signin/signin.css'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    let navigate = useNavigate();

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-2 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                                    <p className="text-white-50 mb-5">Please enter your name, email and password!</p>

                                    <div class="row h-100">
                                        <div class="col-md-6 mb-1">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1">First name</label>
                                                <input type="text" id="form3Example1" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-1">
                                            <div class="form-outline">
                                                <label class="form-label" htmlfor="form3Example2">Last name</label>
                                                <input type="text" id="form3Example2" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline form-white mb-2">
                                        <label className="form-label" htmlfor="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline form-white mb-2">
                                        <label className="form-label" htmlfor="typePasswordX1">Password</label>
                                        <input type="password" id="typePasswordX1" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline form-white mb-2">
                                        <label className="form-label" htmlfor="typePasswordX2">Validation Password</label>
                                        <input type="password" id="typePasswordX2" className="form-control form-control-lg" />
                                    </div>

                                    <button className="btn btn-outline-light btn-mg px-3 col-md-6 mb-4" type="submit">Sign Up</button>

                                    <div>
                                        <p className="mb-0">Do you have an account?
                                            <div onClick={() => { navigate("/") }}>
                                                <p className="text-white-50 fw-bold pointer">Sign In</p>
                                            </div>
                                        </p>
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

export default SignUp;