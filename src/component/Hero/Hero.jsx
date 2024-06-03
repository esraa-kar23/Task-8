import './hero.css';

export default function Hero() {
    return (
        <>
            <section className='container'>
                <div className="hero">
                    <div className="hero-one">
                        <div className="hero-title">
                            <h2>Hey !! Mario still here, But don’t forget that</h2>
                            <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                                Branding, Digital Marketing, Web/App Development, Ui/Ux
                                Content creation, Graphic design, Social media and More........
                                So you can take a tour in our website, OR just <span className='start'>press start :)</span>
                            </p>
                        </div>
                        <div className="hero-img">
                            <img className='gameBoy' src="../../../public/gameBoy-min.png" />
                            <img className='pressStart' src="../../../public/pressStart.svg" />
                            <a className='play-mario' href="">start</a>
                            <img className='hero-pattern' src="../../../public/pattren.png" />
                        </div>
                    </div>
                    <img className='footer-svg-hero' src="../../../public/fotter.svg" alt="" />
                    <div className="hero-two">
                        <p>© 2021 - 2022 focal X agency All Right Reserved</p>
                        <div className="social-media">
                            <a href="#"><img src="../../../public/facebook.png" alt="facebook.png" /></a>
                            <a href="#"><img src="../../../public/behance.png" alt="behance.png" /></a>
                            <a href="#"><img src="../../../public/linkedin.png" alt="linkedin.png" /></a>
                            <a href="#"><img src="../../../public/instgram.png" alt="instgram.png" /></a>
                            <a href="#"><img src="../../../public/twitter.png" alt="twitter.png" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Hero-mobile'>
                <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                    Branding, Digital Marketing, Web/App Development, Ui/Ux
                    Content creation, Graphic design, Social media and More........
                    So you can take a tour in our website, OR just <span className='start'>press start :)</span>
                </p>
                <div className='footer-mobile'>
                    <img className='gameFormobile' src="../../../public/gamefor-mobile.png" alt="" />
                    <div className='media'>
                        <div className="social-media">
                            <a href="#"><img src="../../../public/facebook.png" alt="facebook.png" /></a>
                            <a href="#"><img src="../../../public/behance.png" alt="behance.png" /></a>
                            <a href="#"><img src="../../../public/linkedin.png" alt="linkedin.png" /></a>
                            <a href="#"><img src="../../../public/instgram.png" alt="instgram.png" /></a>
                            <a href="#"><img src="../../../public/twitter.png" alt="twitter.png" /></a>
                        </div>
                        <p className='copy-right'>© 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                    <img className='pattern-mobile' src="../../../public/footer-mobile (1).png" alt="" />
                </div>
            </section>
        </>
    )
}
