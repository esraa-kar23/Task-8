import gameBoy from '../../../src/assets/img/gameBoy-min.png'
import pressStart from '../../../src/assets/img/pressStart.svg'
import heroPattern from '../../../src/assets/img/pattren.png'
import behance from '../../../src/assets/img/behance.png'
import linkedin from '../../../src/assets/img/linkedin.png'
import facebook from '../../../src/assets/img/facebook.png'
import instagram from '../../../src/assets/img/instgram.png'
import twitter from '../../../src/assets/img/twitter.png'
import pattern from '../../../src/assets/img/footer-mobile (1).png'
import footersvg from '../../../src/assets/img/fotter.svg'
import gameFormobile from '../../../src/assets/img/gamefor-mobile.png'
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
                            <img className='gameBoy' src={gameBoy} />
                            <img className='pressStart' src={pressStart} />
                            <a className='play-mario' href="">start</a>
                            <img className='hero-pattern' src={heroPattern} />
                        </div>
                    </div>
                    <img className='footer-svg-hero' src={footersvg} alt="" />
                    <div className="hero-two">
                        <p>© 2021 - 2022 focal X agency All Right Reserved</p>
                        <div className="social-media">
                            <a href="#"><img src={facebook} alt="facebook.png" /></a>
                            <a href="#"><img src={behance} alt="behance.png" /></a>
                            <a href="#"><img src={linkedin} alt="linkedin.png" /></a>
                            <a href="#"><img src={instagram} alt="instgram.png" /></a>
                            <a href="#"><img src={twitter} alt="twitter.png" /></a>
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
                    <img className='gameFormobile' src={gameFormobile} alt="" />
                    <div className='media'>
                        <div className="social-media">
                            <a href="#"><img src={facebook} alt="facebook.png" /></a>
                            <a href="#"><img src={behance} alt="behance.png" /></a>
                            <a href="#"><img src={linkedin} alt="linkedin.png" /></a>
                            <a href="#"><img src={instagram} alt="instgram.png" /></a>
                            <a href="#"><img src={twitter} alt="twitter.png" /></a>
                        </div>
                        <p className='copy-right'>© 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                    <img className='pattern-mobile' src={pattern} alt="" />
                </div>
            </section>
        </>
    )
}
