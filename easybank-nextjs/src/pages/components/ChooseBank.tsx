import styles from '@/styles/ChooseBank.module.css'

export default function ChooseBank() {
    return (
        <section id={styles.chooseBank}>
            <div>
                <hgroup>
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub. Control
                        your finances like never before.
                    </p>
                </hgroup>
                <ul>
                    <li>
                        <img src={"/images/icon-online.svg"} alt="Online banking image" />
                        <h3>Online Banking</h3>
                        <p>
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </li>
                    <li>
                        <img src={"/images/icon-budgeting.svg"} alt="Simple budgeting image" />
                        <h3>Simple Budgeting</h3>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you&apos;re
                            close to hitting your limits.
                        </p>
                    </li>
                    <li>
                        <img src={"/images/icon-onboarding.svg"} alt="Fast onboarding image" />
                        <h3>Fast Onboarding</h3>
                        <p>
                            We don&apos;t do branches. Open your account in minutes online and start taking control
                            of your finances right away.
                        </p>
                    </li>
                    <li>
                        <img src={"/images/icon-api.svg"} alt="Open API image" />
                        <h3>Open API</h3>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}