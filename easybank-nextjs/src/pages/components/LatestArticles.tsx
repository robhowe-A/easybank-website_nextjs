import styles from '@/styles/LatestArticles.module.css'

export default function LatestArticles() {
    return (
        <section id={styles.latestArticles}>
            <div>
                <h2>Latest Articles</h2>
                <ul>
                    <li className={styles.latestArticle}>
                        <picture><img src={"/images/image-currency.jpg"} alt="source" /></picture>
                        <div className={styles.artDesc}>
                            <hgroup>
                                <p>By Claire Robinson</p>
                                <h3><a href="#">Receive money in any currency with no fees</a></h3>
                            </hgroup>
                            <p>
                                The world is getting smaller and we&apos;re becoming more mobile. So why should you be
                                forced to only receive money in a single …
                            </p>
                        </div>
                    </li>
                    <li className={styles.latestArticle}>
                        <picture><img src={"/images/image-restaurant.jpg"} alt="source" /></picture>
                        <div className={styles.artDesc}>
                            <hgroup>
                                <p>By Wilson Hutton</p>
                                <h3><a href="#">Treat yourself without worrying about money</a></h3>
                            </hgroup>
                            <p>
                                Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …
                            </p>
                        </div>
                    </li>
                    <li className={styles.latestArticle}>
                        <picture><img src={"/images/image-plane.jpg"} alt="source" /></picture>
                        <div className={styles.artDesc}>
                            <hgroup>
                                <p>By Wilson Hutton</p>
                                <h3><a href="#">Take your Easybank card wherever you go</a></h3>
                            </hgroup>
                            <p>
                                We want you to enjoy your travels. This is why we don&apos;t charge any fees on purchases
                                while you&apos;re abroad. We&apos;ll even show you …
                            </p>
                        </div>
                    </li>
                    <li className={styles.latestArticle}>
                        <picture><img src={"/images/image-confetti.jpg"} alt="source" /></picture>
                        <div className={styles.artDesc}>
                            <hgroup>
                                <p>By Claire Robinson</p>
                                <h3><a href="#">Our invite-only Beta accounts are now live!</a></h3>
                            </hgroup>
                            <p>
                                After a lot of hard work by the whole team, we&apos;re excited to launch our closed beta.
                                It&apos;s easy to request an invite through the site ...
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}