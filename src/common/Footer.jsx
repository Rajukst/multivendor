import { Container } from "react-bootstrap";

const Footer=()=>{

    return(
        <>
        <Container>
            <div className="footerGrid">
                <article><i className="fa-solid fa-paper-plane me-2"></i> Sign up to Newsletter.</article>
                <div className="subscribe">
                    <input type="email" placeholder="Your email address..." />
                    <button>Subscribe</button>
                </div>
                <div className="social">
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Footer;