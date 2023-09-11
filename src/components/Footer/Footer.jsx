import './Footer.css'

function Footer() {
    return (
        <footer className="Footer">
            <h3 className="Footer__title">
                MyWebsite
            </h3>
            <p className="Footer__text">
                &copy; {new Date().getFullYear()} All rights reserved
                <br />
                Designed and developed by <a href="#">Anggi</a>
            </p>
            <ul className="Footer__list">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/education">
                        Education
                    </a>
                </li>
                <li>
                    <a href="/experience">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="/skills">
                        Skills
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
