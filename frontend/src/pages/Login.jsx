import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import "../styles/pages/auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitButtionDisabled, setSubmitButtonDisabled] = useState(true);

    const { handleLogin } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleLogin(email, password);
    };

    useEffect(() => {
        if (email.length > 3 && password.length >= 6) {
            return setSubmitButtonDisabled(false);
        }
        setSubmitButtonDisabled(true);
    }, [email, password]);

    return (
        <div className="wrapper">
            <div>
                <img src="/images/auth.jpg" alt="A person authentication on a website" className="auth-image" />
            </div>
            <div className="form-wrapper">
                <h2 className="form__title">Login</h2>
                <p className="caption">Collaborate with everyone to get suggestions of your projects!</p>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form__input"
                            placeholder="mail@website.com"
                            id={"email"}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form__input"
                            placeholder="At least 6 character"
                            id={"password"}
                            required
                        />
                    </div>

                    <button type={"submit"} disabled={submitButtionDisabled} className="btn btn-primary">
                        Login
                    </button>

                    <p className="bottom-caption">
                        <span>Not registered yet? </span>
                        <NavLink to="/register">Register Now!</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;