const { default: Link } = require("next/link")

const Contact = () => {
    return (
        <section className={parent}>
            <div className={contactIcons}>
                <Link href='https://linkedin.com/'>
                    <i class='fa-brands fa-linkedin fa-4x'/>
                </Link>
                <Link href='mailto:sarthakkarandikar03@gmail.com'>
                    <i class='fa-brands fa-envelope fa-4x'/>
                </Link>
            </div>
        </section>
    )
}