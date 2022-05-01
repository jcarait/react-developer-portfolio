const Header = ({ currentPage, handlePageChange }) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a 
                    href="#home"
                    onCLick={() => handlePageChange("Home")}
                    className={ currentPage === 'Home' ? 'nav-link active' : 'nav-link' }
                    >
                        Home
                    </a>
            </li>
            <li className="nav-item">
                <a 
                    href="about"
                    onCLick={() => handlePageChange("About")}
                    className={ currentPage === 'About' ? 'nav-link active' : 'nav-link' }
                    >
                        About
                    </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#projects"
                    onCLick={() => handlePageChange("Projects")}
                    className={ currentPage === 'Projects' ? 'nav-link active' : 'nav-link' }
                    >
                        Projects
                    </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact"
                    onCLick={() => handlePageChange("Contact")}
                    className={ currentPage === 'Contact' ? 'nav-link active' : 'nav-link' }
                    >
                        Contact
                    </a>
            </li>
        </ul>
    )
}

export default Header