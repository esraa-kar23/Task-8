import './Hostingprice.css'

export default function Hostingprice() {
    return (
        <>
            <section className='hosting'>
                <h2>Hosting Pricing</h2>
                <div className="cards">
                    <div className="card">
                        <span>Basic</span>
                        <p>for very small businesses and freelancers.</p>
                        <ul>
                            <li>Disk Space: <strong>500 M.B</strong></li>
                            <li>Bandwidth: <strong>500 G.B</strong></li>
                            <li>SubDomains: <strong>Unlimited</strong></li>
                            <li>Parked Domains: <strong>Unlimited</strong></li>
                            <li>E-mail Accounts: <strong>Unlimited</strong></li>
                            <li>Cpanel (control panel): <strong>Yes</strong></li>
                            <li>Money Back Guarantee: <strong>14 Days</strong></li>
                        </ul>
                        <button>You will have 1 Gift</button>

                    </div>
                    <div className="card card-2">
                        <span>Pro</span>
                        <p className="pro">for Individuals that need sharingvlogs or need huge portfolio.</p>
                        <ul>
                            <li>Disk Space: <strong>3000 M.B</strong></li>
                            <li>Bandwidth: <strong>3 TERA</strong></li>
                            <li>SubDomains: <strong>Unlimited</strong></li>
                            <li>Parked Domains: <strong>Unlimited</strong></li>
                            <li>E-mail Accounts: <strong>Unlimited</strong></li>
                            <li>Cpanel (control panel): <strong>Yes</strong></li>
                            <li>Money Back Guarantee: <strong>14 Days</strong></li>
                        </ul>
                        <button>1 Gift per/mo for year</button>

                    </div>
                    <div className="card card-3">
                        <span>Business</span>
                        <p>for Team that need sharing and reporting.</p>
                        <ul>
                            <li>Disk Space: <strong>5000 M.B</strong></li>
                            <li>Bandwidth: <strong>5 TERA</strong></li>
                            <li>SubDomains: <strong>Unlimited</strong></li>
                            <li>Parked Domains: <strong>Unlimited</strong></li>
                            <li>E-mail Accounts: <strong>Unlimited</strong></li>
                            <li>Cpanel (control panel): <strong>Yes</strong></li>
                            <li>Money Back Guarantee: <strong>14 Days</strong></li>
                        </ul>
                        <button>3 Gifts per/mo for year</button>

                    </div>
                    <div className="card card-4">
                        <span>Enterprise</span>
                        <p>for large companies that need
                            admins & security</p>
                        <ul>
                            <li>Disk Space: <strong>10000 M.B</strong></li>
                            <li>Bandwidth: <strong>10 TERA</strong></li>
                            <li>SubDomains: <strong>Unlimited</strong></li>
                            <li>Parked Domains: <strong>Unlimited</strong></li>
                            <li>E-mail Accounts: <strong>Unlimited</strong></li>
                            <li>Cpanel (control panel): <strong>Yes</strong></li>
                            <li>Money Back Guarantee: <strong>14 Days</strong></li>
                        </ul>
                        <button>Just Call Us</button>
                    </div>
                </div>
                <div className='spans' style={{ color: "#fff", lineHeight: "25px" }}>
                    <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
                    <p>Go Online, choose your plan and Contact us on: <span className='one'>contact@focal-x.com <span className='span'>|</span> </span> <span className='two'> +963 935 033 139</span></p>
                </div>
            </section>
        </>
    )
}
