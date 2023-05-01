const Skills = () => {
    return (
        <section className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <button className={styles.skillsOption}>
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs"/>
                    <div class="layer"/>
                </button>
            </div>
        </section>
    )
}