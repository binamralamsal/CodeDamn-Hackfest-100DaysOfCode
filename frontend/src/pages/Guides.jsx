import styles from "../styles/pages/guides.module.css";

const Guides = () => {
  return (
    <div>
      <img
        src="/images/banner.jpg"
        alt="100 Days Of Code Banner"
        className={styles.banner}
      />

      <article className={styles.content}>
        <h1 className={styles.contentHeader}>Guides</h1>

        <section className={styles.section}>
          <p>
            Welcome! Here you can learn the rules, get answers to your questions
            by reading the FAQ, and find out more about the community that’s
            growing around the challenge.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Rules</h2>

          <ol className={styles.list}>
            <li>Code minimum an hour every day for the next 100 days.</li>
            <li>
              Tweet your progress every day with the #100DaysOfCode hashtag.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            Publicly commit to the challenge:
          </h2>
          <p>
            If you made the decision to commit to the challenge, Click here to
            tweet it to the world, making yourself accountable and taking your
            resolve to the next level!
          </p>

          <a
            target="_blank"
            className={`btn btn-primary block ${styles.tweetBtn}`}
            href="https://twitter.com/intent/tweet?text=I%27m%20publicly%20committing%20to%20the%20100DaysOfCode%20Challenge%20starting%20today!%20Learn%20More%20and%20Join%20me!%20hey%20@ka11away&url=https://100DaysOfCode.com&hashtags=100DaysOfCode"
          >
            Tweet
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Next Steps</h2>
          <p>
            If you’ve decided to join, here are the steps you need to go
            through:
          </p>

          <ol className={styles.list}>
            <li>
              <a
                href="https://twitter.com/intent/tweet?text=I%27m%20publicly%20committing%20to%20the%20100DaysOfCode%20Challenge%20starting%20today!%20Learn%20More%20and%20Join%20me!%20hey%20@ka11away&url=https://100DaysOfCode.com&hashtags=100DaysOfCode"
                target="_blank"
              >
                Tweet to commit to the challenge!
              </a>
            </li>
            <li>
              Read the original article:{" "}
              <a
                href="https://www.freecodecamp.org/news/join-the-100daysofcode-556ddb4579e4/"
                target="_blank"
              >
                Join the #100DaysOfCode
              </a>
            </li>

            <li>
              Tweet your progress every day with the #100DaysOfCode hashtag.
            </li>

            <li>
              Plan: Formulate what you want to work on during the challenge. It
              might be - learning a framework, or starting a journey of learning
              to code, or improving your skill level with a particular
              technology or a programming language. Don’t spend too much time
              planning, but having a plan like this will help you on your path.
            </li>

            <li>
              From today on, for the next 100 days, tweet your progress every
              day using the #100DaysOfCode hashtag.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Next Steps</h2>
          <p>
            If you’ve decided to join, here are the steps you need to go
            through:
          </p>

          <ul className={styles.list}>
            <li>
              Check out other{" "}
              <a href="https://www.100daysofcode.com/resources" target="_blank">
                resources
              </a>{" "}
            </li>
            <li>
              (Optional, but highly recommended) Fork{" "}
              <a
                href="https://github.com/Kallaway/100-days-of-code"
                target="_blank"
              >
                this Github repo
              </a>{" "}
              and commit to the Log daily. Follow the instructions in the repo.
            </li>
            <li>
              Follow 100DaysOfCode Twitter Bot that retweets all the tweets that
              contain the #100DaysOfCode hashtag. It’s a great way to keep
              yourself motivated and to participate in the community. Thanks
              @amanhimself for creating it!
            </li>
            <li>
              Important: Encourage others who are doing the same challenge on
              Twitter or elsewhere - by giving them props when they are posting
              updates on their progress, supporting them when things get
              difficult. Thus we will grow a community that is helpful and
              effective, which will lead to a higher success rate for each
              person involved. It’s also more likely that you will stick to your
              own commitment, given that you will get acquainted with a couple
              people (probably more :) ) right away.
            </li>
            <li>
              If you find a great, helpful resource that others would benefit
              from, either submit a Pull Request to add it to the repo
            </li>
          </ul>
        </section>

        <a href="https://www.100daysofcode.com/" target="_blank">
          Credit: #100DaysOfCode
        </a>
      </article>
    </div>
  );
};

export default Guides;
