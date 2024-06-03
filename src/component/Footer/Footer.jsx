import behance from '../../../src/assets/img/footerIcons/behance.png'
import linkedin from '../../../src/assets/img/footerIcons/linkdin.png'
import facebook from '../../../src/assets/img/footerIcons/facebook.png'
import instagram from '../../../src/assets/img/footerIcons/instgram.png'
import twitter from '../../../src/assets/img/footerIcons/twitter.png'
import logo from '../../../src/assets/img/logo.png'
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-one">
      <div className='one flex-col'>
            <div className="title-footer">
            <img src={logo} alt="" />
            <span>.agency</span>
            </div>
          <div className='head-office'>
                <h3>Head Office</h3>
                <p>Syria - Latakia - grh2+hjx</p>
                <p>35.5199518</p>
          </div>
            <p></p>
        </div>
        <div className="footer-two">
        <div className='sales flex-col'>
            <div className='flex-col-2'>
                <h4>Sales</h4>
                <span>contact@focal-x.com</span>
                <span>+963 953 666 056</span>
            </div>
          <div className='flex-col-2'>
                <h4>Public Relations</h4>
                <span>pr@focal-x.com</span>
                <span>+963953666052</span>
          </div>
        </div>
        <div className='customer-support flex-col'>
            <div className='flex-col-2'>
                <h4>Customer Support</h4>
                <span>info@focal-x.com</span>
                <span>+963 953 666 054</span>
            </div>
          <div className='flex-col-2'>
                <h4>Human Resources</h4>
                <span>hr@focal-x.com</span>
          </div>
        </div>
        <div className='links flex-col'>
            <span>Useful Links</span>
            <ul>
                <li>Clients & Partners</li>
                <li>Check Certificat ID</li>
                <li>Check for employee</li>
                <li>Our Brand ID guidlines</li>
            </ul>
        </div>
        <div className='connection flex-col'>
            <span>Keep In Touch</span>
            <div className="social-media">
                <a href=""><img src={facebook}/></a>
                <a href=""><img src={behance} /></a>
                <a href=""><img src={linkedin} /></a>
                <a href=""><img src={instagram} /></a>
                <a href=""><img src={twitter}/></a>
            </div>
        </div>
        </div>
      </div>
        <div className="copy-right">
            <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
            <div></div>
        </div>
    </footer>
  )
}
