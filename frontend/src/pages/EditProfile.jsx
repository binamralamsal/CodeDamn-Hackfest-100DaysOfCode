import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const EditProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("")
    const [submitButtionDisabled, setSubmitButtonDisabled] = useState(true);

    const { handleEditProfile, user } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        handleEditProfile(name, email, avatar);
    };

    const generateAvatar = () => {
        setAvatar(
            `https://avatars.dicebear.com/api/micah/${Math.floor(Math.random() * 10000) + 1
            }.svg`
        );
    };

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setAvatar(user.avatar);
    }, [])

    useEffect(() => {
        if (name.length > 3 && email.length > 3) {
            return setSubmitButtonDisabled(false);
        }
        setSubmitButtonDisabled(true);
    }, [name, email]);

    return (
        <div className="wrapper">
            <div>
                <img src="/images/auth.jpg" alt="A person authentication on a website" className="auth-image" />
            </div>
            <div className="form-wrapper">
                <h2 className="form__title">Edit Profile</h2>
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
                    <button type={"submit"} disabled={submitButtionDisabled} className="btn btn-primary">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile