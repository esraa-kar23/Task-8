import './OurServices.css'

export default function OurServices() {
    return (
        <>
            <div className="ourServices">
                <h2>Our Services</h2>
                <div className="cards">
                    <div className="card">
                        <span className='span'>Branding</span>
                        <p>The brand is hope,
                            It is also the source of inspiration for everything you do when you
                            deal with your customers and that is the important and emotional
                            thing. Your Brand and Visual identity represents an intrinsic Value
                            to your company.
                        </p>
                        <h3>In focal X agency, we provide:</h3>
                        <ul>
                            <li>Visual identity design.</li>
                            <li>Define Brand Identity.</li>
                            <li>Define Brand personality.</li>
                            <li>Building Your brand strategy.</li>
                            <li>Market research and competitors study.</li>
                        </ul>
                        <h3>We walk with you from A to Z.</h3>
                        <img src="../../../public/pattren.png" alt="" />
                    </div>
                    <div className="card card-2">
                        <span className='span-2'>Marketing</span>
                        <p>Talk to your customers and tell them you and your companys
                            story through us the way you want.
                            Let us plan the content that will bring your audience closer to you
                        </p>
                        <h3>In our marketing agency, we provide:</h3>
                        <ul>
                            <li>E-mail marketing.</li>
                            <li>Affiliate marketing.</li>
                            <li>Influencer marketing.</li>
                            <li>Market research and Analysis.</li>
                            <li>App store optimization ( ASO ).</li>
                            <li>Search engine Marketing ( SEM ).</li>
                            <li>Search engine optimization ( SEO ).</li>
                            <li>Social media marketing & campaigns.</li>
                        </ul>
                        <img className='pattern' src="../../../public/output-onlinepngtools.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
