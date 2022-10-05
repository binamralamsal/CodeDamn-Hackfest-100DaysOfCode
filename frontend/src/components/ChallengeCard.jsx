import styles from "../styles/components/leaderboard.module.css"

const ChallengeCard = () => {
    return <div className={styles.leaderboard}>
        <p className={styles.title}>Challenge 🚀</p>
        <p>If you made the decision to commit to the challenge, Click here to tweet it to the world, making yourself accountable and taking your resolve to the next level!</p>
        <a target="_blank" className={`btn btn-primary ${styles.button}`} href="https://twitter.com/intent/tweet?text=I%27m%20publicly%20committing%20to%20the%20100DaysOfCode%20Challenge%20starting%20today!%20Learn%20More%20and%20Join%20me!%20hey%20@ka11away&url=https://100DaysOfCode.com&hashtags=100DaysOfCode">Tweet</a>
    </div>
}

export default ChallengeCard;