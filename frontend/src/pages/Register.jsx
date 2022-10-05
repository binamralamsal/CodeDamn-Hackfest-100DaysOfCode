import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("")
    const [submitButtionDisabled, setSubmitButtonDisabled] = useState(true);

    const { handleRegister } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        handleRegister(name, email, password, avatar);
    };

    const generateAvatar = () => {
        setAvatar(
            `https://avatars.dicebear.com/api/micah/${Math.floor(Math.random() * 10000) + 1
            }.svg`
        );
    };

    useEffect(() => {
        generateAvatar();
    }, [])

    useEffect(() => {
        if (name.length > 3 && email.length > 3 && password.length >= 6) {
            return setSubmitButtonDisabled(false);
        }
        setSubmitButtonDisabled(true);
    }, [name, email, password]);

    return (
        <div className="wrapper">
            <div>
                <img src="/images/auth.jpg" alt="A person authentication on a website" className="auth-image" />
            </div>
            <div className="form-wrapper">
                <h2 className="form__title">Register</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <div className="form__avatarWrap">
                            <img src={avatar} className="form__avatar" />
                            <button onClick={generateAvatar} type="button" className="btn btn-primary form__avatarBtn">Generate Random</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="form__input"
                            placeholder="eg: John Smith"
                            id={"name"}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form__input"
                            placeholder="website@example.com"
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register