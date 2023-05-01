const About = () => {
    return (
        <section className={styles.parent}>
            <div className={styles.aboutImage}>
                <Image src='/../public/assets/images/aboutImage.jpg' width='400' height='500' alt='About Image' />
            </div>
            <div className={styles.aboutText}>
                <h1 className={styles.aboutTitle}>
                    About
                </h1>
                <h2 className={styles.aboutInfo}>
                    A passionate guy who likes all things digital, from design to coding to deployment. Majorly interested in AI, IOT and Metaverse fields. Likes reading a lot and 
                </h2>
            </div>
        </section>
    )
}