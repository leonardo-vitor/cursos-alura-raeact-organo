import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-size'>
                <div className='social-media'>
                    <img src='/images/fb.png' alt='Logo Facebook' />
                    <img src='/images/tw.png' alt='Logo Twitter' />
                    <img src='/images/ig.png' alt='Logo Instagram' />
                </div>

                <div className='logo'>
                    <img src='/images/logo.png' alt='Logo Organo' />
                </div>

                <div className='developed-by'>
                    <p>Desenvolvido por <strong>Leonardo Vitor dos Santos</strong>, através do curso Introdução ao React | ALura</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;