/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, {useRef, useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { LandingPageContainer } from "./landingPage.styles.jsx"
import Aos from "aos";
import "aos/dist/aos.css"
import NavbarComponent from "../../components/navBar/navBar.component"
import FooterComponent from "../../components/footer/footer.component"

const LandingPage = () => {
    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();
    const imageFourRef = useRef();
    const [imageOneIsVisible, setImageOneIsVisible] = useState(false);
    const [imageTwoIsVisible, setImageTwoIsVisible] = useState(false);
    const [imageThreeIsVisible, setImageThreeIsVisible] = useState(false);
    const [imageFourIsVisible, setImageFourIsVisible] = useState(false);
    const [imageContentFixed, setImageContentFixed] = useState(false);

    const mediaQuery = window.matchMedia('(min-width: 1000px)');

    const changeScrollingImage = () => {
        if (mediaQuery.matches) {
            if(window.scrollY >= 2500 && window.scrollY < 4704) {
                setImageContentFixed(true)
            }
            if(window.scrollY > 2027 && window.scrollY < 2822) {
                setImageOneIsVisible(true)
                setImageTwoIsVisible(false)
                setImageThreeIsVisible(false)
                setImageFourIsVisible(false)
            } else if (window.scrollY > 2822 && window.scrollY < 3632) {
                setImageOneIsVisible(false)
                setImageTwoIsVisible(true)
                setImageThreeIsVisible(false)
                setImageFourIsVisible(false)
            } else if (window.scrollY > 3632 && window.scrollY < 4247) {
                setImageOneIsVisible(false)
                setImageTwoIsVisible(false)
                setImageThreeIsVisible(true)
                setImageFourIsVisible(false)
            } else if (window.scrollY > 4247 && window.scrollY < 4704) {
                setImageOneIsVisible(false)
                setImageTwoIsVisible(false)
                setImageThreeIsVisible(false)
                setImageFourIsVisible(true)
            } else {
                setImageOneIsVisible(false)
                setImageTwoIsVisible(false)
                setImageThreeIsVisible(false)
                setImageFourIsVisible(false)
                setImageContentFixed(false)
            }
        } else {
            document.getElementById("display-div1").classList.add("display-content");
            document.getElementById("display-div2").classList.add("display-content");
            document.getElementById("display-div3").classList.add("display-content");
            document.getElementById("display-div4").classList.add("display-content");
        }
    }

    window.addEventListener('scroll', changeScrollingImage);

    function load() {
        window.location.href = "signup";
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <LandingPageContainer>
            <NavbarComponent />
            <section className="banner">
                <div className="wrap">
                    <video autoPlay muted webkit-playsinline="true" x-webkit-airplay="true" preload="load" poster="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/57d117f954c4afcd824cb140ce5c1838.jpg" width="100%" loop>
                        <source src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/42326db913184d3e7eed58e69c32a4ae.mp4"/>
                    </video>
                    
                    <div className="topWrap">
                        <div data-aos="fade-up" className="wb-animate-wrap animate-top1 bannerTitle" role="heading" aria-level="1">
                            Enjoy Tech. Enjoy Investing.
                        </div>
                        <div data-aos="fade-up" className="wb-animate-wrap animate-top2 bannerDesc">
                            0 Commissions and no deposit minimums. Everyone gets smart tools for smart investing.
                        </div>
                        <div data-aos="fade-up" className="wb-animate-wrap animate-top2 openBtn" role="button" aria-label="Get Started"><Link className="btn-link" to="signup">Get Started</Link></div>
                    </div>
                </div>
            </section>


            <div className="part2">
                <p data-aos="fade-up" className="wb-animate-wrap animate-top2 title" role="heading" aria-level="2">Trading Privileges</p>
                <p data-aos="fade-up" className="wb-animate-wrap animate-top2 desc">Diversifying your portfolio with a comprehensive suite of investment products including stocks, fractional shares, options, ETFs, and ADRs.</p>
                <div data-aos="fade-up" className="part2Content">
                    <div className="wb-animate-wrap animate-feat1 feat1" style={{height:"333px"}}>
                        <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/cdc36ef247a881c0159e7218118e3bfa.png" alt="stocks"/>
                        <div role="heading" aria-level="3">Stocks</div>
                        <p className="shares">Invest in thousands of companies and 
                            <a href='https://www.webull.com/fractionalshares'> fractional shares with as little as $5 </a> 
                            using our trading tools and analytics to create your own financial portfolio.
                        </p>
                        </div>
                        <div className="wb-animate-wrap animate-feat2 feat2" style={{height:"333px"}}>
                            <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/a1568e16db1b21caac3be543fb4d8fed.png" alt="options"/>
                            <div role="heading" aria-level="3"> Options</div>
                            <p> Options provide a strategic alternative to just investing in equity.</p>
                            <a href="/options" aria-label="Quick access to apply for options trading">Get Started</a>
                            </div>
                            <div className="wb-animate-wrap animate-feat3 feat3" style={{height:"333px"}}>
                                <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/cc026886997a4740b3d492e7ee677697.png" alt="etfs"/>
                                <div role="heading" aria-level="3">ETFs</div>
                                <p>Diversify your holdings by investing into a group of stocks with the same convenience as trading a single stock.</p>
                            </div>
                            <div className="wb-animate-wrap animate-feat4 feat4" style={{height:"333px"}}>
                                <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/7684e83f6e3f227d534e6f19917a1b2e.png" alt="adrs"/>
                                <div role="heading" aria-level="3">ADRs</div>
                                <p>Invest in foreign companies to diversify your portfolio or take advantage of global opportunities.</p>
                            </div>
                            </div>
                            </div>

                            <div className="iraWrap">
                                <p data-aos="fade-up" className="wb-animate-wrap animate-top2 title" role="heading" aria-level="2">
                                    Account Types
                                </p>
                                <p data-aos="fade-up" className="wb-animate-wrap animate-top2 desc">
                                    Different types of brokerage accounts to satisfy your different investment objectives.
                                </p>
                                <div className="iraWrapContent">
                                    <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/9811759e59f7e891f3734bd3b9d8e048.png" alt="Open an IRA"/>
                                    <div className="accountright">
                                        <div className="accountWrap">
                                            <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/592acb6691a366813a7d47901c042539.png" alt="ira"/>
                                            <div className="iraInfo">
                                                <p className="iraTitle" role="heading" aria-level="3">IRA</p>
                                                <p className="iraDesc">Save for retirement with SF Capital Market Traditional, Roth or Rollover IRA.</p>
                                                <p className="leanrMore">More</p>
                                            </div>
                                        </div>
                                        <div className="accountWrap accountWrap2">
                                            <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/eb464f533d24bea790334f8b6c39284a.png" alt="ira"/>
                                            <div className="iraInfo">
                                                <p className="iraTitle" role="heading" aria-level="3">Individual Brokerage Account</p>
                                                <p className="iraDesc">Individual brokerage account is the general account which allows you to buy and sell securities and assets.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                                <section className="part3">
                                    <div className="wbus-ssr2271631">
                                        <div className={imageContentFixed ? "image-content image-content-fixed" : "image-content"}>
                                            <div id="display-div1" className={imageOneIsVisible ? "wbus-ssr2271634 display-content" : "wbus-ssr2271634"}>
                                                <p role="heading" aria-level="2">
                                                    Full Extended Hours Trading
                                                </p>
                                                <p>
                                                    SF Capital Market supports full extended hours trading, which includes full pre-market (4:00 AM - 9:30 AM ET) and after hours (4:00 PM - 8:00 PM ET) sessions.
                                                </p>
                                            </div>
                                        </div>

                                        <div className={imageContentFixed ? "image-content image-content-fixed" : "image-content"}>
                                            <div id="display-div2" className={imageTwoIsVisible ? "wbus-ssr2271634 display-content" : "wbus-ssr2271634"}>
                                                <p role="heading" aria-level="2">
                                                    In-depth Analysis Tools
                                                </p>
                                                <p>
                                                    SF Capital Market provides intuitive and powerful advanced charts, multiple technical indicators, and premier Level 2 Advance (Nasdaq TotalView) to help users analyze companies, trends, and seize trading opportunities.
                                                </p>
                                                <span className="wbus-ssr2271636" role="button" aria-label="Quick access to learn more about Level 2 market data">
                                                    Learn more
                                                </span>
                                            </div>
                                        </div>

                                        <div className={imageContentFixed ? "image-content image-content-fixed" : "image-content"}>
                                            <div id="display-div3" className={imageThreeIsVisible ? "wbus-ssr2271634 display-content" : "wbus-ssr2271634"}>
                                                <p role="heading" aria-level="2">
                                                    Free Access to SF Capital Market Desktop
                                                </p>
                                                <p>
                                                    Everyone has access to our advanced and fully customizable desktop platform. You can consolidate your watchlists, analyze charts, place orders, and check your positions across all of SF Capital Market&#x27;s platforms (mobile, PC, and web). Stay current with the markets and manage your investments wherever you are.
                                                </p>
                                            </div>
                                        </div>

                                        <div className={imageContentFixed ? "image-content image-content-fixed" : "image-content"}>
                                            <div id="display-div4" className={imageFourIsVisible ? "wbus-ssr2271634 display-content" : "wbus-ssr2271634"}>
                                                <p role="heading" aria-level="2">Stay Connected 24/7</p>
                                                <p>
                                                    Our customer service reps are ready 24/7 to help guide you through our multiple platforms and answer all your questions!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="scroll" id="scroll-image">
                                        <img ref={imageOneRef} src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/1847f17aa70513069a88b59701124edc.png" alt="stock online" width="600" height="650" style={{marginTop:"10px", paddingTop:"20px"}}/>
                                        <img ref={imageTwoRef} src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/3c8d564ece805585cded436ca030eeec.png" alt="stock trading apps" width="600" height="650" style={{marginTop:"10px", paddingTop:"20px"}}/>
                                        <img ref={imageThreeRef} src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/9c5e2c9ee67eee9ecb3a655f54162656.png" alt="online stock trading" width="600" height="650" style={{marginTop:"10px", paddingTop:"20px"}}/>
                                        <img ref={imageFourRef} src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/5fbfdc19b4ef44dfaa73fd19896a531f.png" alt="stock broker" height="650" width="600" style={{marginTop:"10px", paddingTop:"20px"}}/>
                                    </div>
                                </section>
                                
                                <section>
                                <div className="part5">
                                    <div className="partContent part5Content">
                                        <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/bb22435e4a889a1376e56b97878ac976.png" alt="stock trading"/>
                                        <div>
                                            <div data-aos="fade-up" className="wb-animate-wrap animate-top-pricing1 hoursTitle" role="heading" aria-level="2">
                                                Open a SF Capital Market <br/> Account Now!
                                            </div>
                                            <p data-aos="fade-up" className="wb-animate-wrap animate-top-pricing1 part5Des">
                                                Open your SF Capital Market individual brokerage account and IRAs now!
                                            </p>
                                            <p data-aos="fade-up" className="wb-animate-wrap animate-top-pricing1 part5Des">
                                                In order to verify your identity, a government issued ID card with your photo, name, and date of birth is required to open an account with SF Capital Market. Please have the documents prepared in advance.
                                            </p>
                                            <button data-aos="fade-up" className="wb-animate-wrap animate-top-pricing1 openAccountBtn" onClick={load} aria-label="Open an Account">
                                                Open an Account
                                            </button>
                                            <p data-aos="fade-up" className="wb-animate-wrap animate-top-pricing1 part5Tips">
                                                *SF Capital Market Financial LLC is member of FINRA, SIPC, NASDAQ and NYSE.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="part6">
                                    <div>
                                        <img src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/ce30e362661a6fd51a1c149b40d9515c.png" alt=""/>
                                        <p>
                                            SF Capital Market Financial LLC is registered with and regulated by the Securities and Exchange Commission (SEC) and the Financial Industry Regulatory Authority (FINRA). It is also a member of the SIPC, which protects (up to $500,000, which includes a $250,000 limit for cash) against the loss of cash and securities held by a customer at a financially-troubled SIPC-member brokerage firm.
                                        </p>
                                        <div className="part6Tips">
                                            <div role="button" aria-label="About SIPC">
                                                About SIPC
                                            </div>
                                            <div role="button" aria-label="About FINRA">
                                                About FINRA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <FooterComponent />
        </LandingPageContainer>
    )
}

export default LandingPage;