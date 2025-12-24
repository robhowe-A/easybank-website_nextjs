import styles from '@/styles/Hero.module.css'

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <figure>
                <img src={"/images/image-mockups.png"} alt=""></img>
            </figure>
            <div>
                <h1>Next generation digital banking</h1>
                <p>
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more. <br />
                <button>Request Invite</button>
                </p>
            </div>
            
        </section>
    )
}