import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/components/leaderboard.module.css";
import { Link } from "react-router-dom";

const Leaderboard = () => {
    const { getLeaderboard } = useContext(AuthContext);

    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        getLeaderboard().then(leaderboard => {
            setLeaderboard(leaderboard)
        })
    }, [])

    return <div className={styles.leaderboard}>
        <p className={styles.title}>Leaderboard ✨</p>
        {leaderboard.map((user, index) =>
            <Link className={styles.users} key={user._id} to={`/user/${user._id}`}>
                <p>{index + 1}. {user.name}</p>
                <p>{user.score}</p>
            </Link>
        )}
    </div>;
}

export default Leaderboard;