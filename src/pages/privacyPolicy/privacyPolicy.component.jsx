import React from 'react';

import {PrivacyPolicyContainer} from "./privacyPolicy.styles"

import NavbarComponent from "../../components/navBar/navBar.component"
import FooterComponent from "../../components/footer/footer.component"

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyContainer>
            <NavbarComponent />
                <section>
                    <h1 className="header">PRIVACY POLICY</h1>

                    <div>
                        <h3>Our Commitment to Privacy</h3>
                        <p>
                        SF Capital Market is committed to maintaining the confidentiality,
                        integrity, and security of personal information about our current and
                        prospective customers. In this policy personal information means
                        “personally identifiable information.” Please note that certain
                        details of this policy may depend on whether you deal with us
                        directly as an individual investor, or whether SF Capital Market
                        provides services to your employer or plan sponsor. The privacy
                        policies are reviewed by Ripple Option Limited periodically. Our
                        printed and online notices are then updated to reflect any changes.
                        </p>
                    </div>

                    <div>
                        <h3>How and why we obtain Personal Information</h3>
                        <p>
                        SF Capital Market takes great care to protect personal information
                        about you and when we use it, we do so with respect for your privacy.
                        We may use personal information about you to service, maintain, and
                        protect your account; process transactions in your account; respond
                        to inquiries from you or your representative; develop, offer, and
                        deliver products and services; or to fulfill legal and regulatory
                        requirements.
                        We may collect public and non-public personal information about you
                        from you or your representative through our website or offline
                        applications or forms (for example, name, address, birth date.)
                        </p>
                    </div>

                    <div>
                        <h3>How we protect information about you</h3>
                        <p>
                        SF Capital Market considers the protection of personal information to
                        be a foundation of customer trust and a sound business practice. We
                        employ physical, electronic and procedural controls and we regularly
                        adapt these controls to respond to changing requirements and advances
                        in technology. At SF Capital Market, we restrict access to personal
                        information to those who require it to develop, support, offer and
                        deliver products and services to you.
                        </p>
                    </div>

                    <div>
                        <h3>How we share information about you with third parties</h3>
                        <p>
                        SF Capital Market does not share personal information about our
                        customers with unaffiliated third parties for use in marketing their
                        products and services. We may share personal information with the
                        following entities:
                        <ul>
                            <li>
                            Unaffiliated service providers (for example, printing and
                            mailing companies, securities clearinghouses, marketing service
                            providers, and other entities who may provide services at
                            Ripple option Limited direction)
                            </li>
                            <li>
                            Government agencies, other regulatory bodies and law
                            enforcement officials (for example, for tax purposes or for
                            reporting suspicious transactions)
                            </li>
                            <li>
                            Other organizations as permitted or required by law (for
                            example for fraud prevention or to respond to a subpoena)
                            </li>
                        </ul>
                        Our service providers are obligated to keep the personal information
                        we share with them confidential and use it only to provide services
                        specified by SF Capital Market.
                        </p>
                    </div>

                    <div>
                        <h3>Your digital privacy</h3>
                        <p>
                        Privacy, security, and service in SF Capital Market online operations
                        are just as critical as in the rest of our business. We use firewall
                        barriers, encryption techniques, and authentication procedures, among
                        other controls, to maintain the security of your online session and
                        to protect SF Capital Market accounts and systems from unauthorized
                        access. When you interact with us by using our websites, online
                        services or mobile applications that are owned and controlled by us
                        ("our digital offerings"), we manage these personal information in
                        accordance with all of the practices and safeguards described
                        previously.
                        </p>
                        <p>
                        When you use our digital offerings, we may collect technical and
                        navigational information, such as device type, browser type, Internet
                        protocol address, pages visited, and average time spent on our
                        digital offerings. We use this information for a variety of purposes,
                        such as maintaining the security of your session, facilitating site
                        navigation, improving SF Capital Market website design and
                        functionality, and personalizing your experience. Additionally, the
                        following policies and practices apply when you are online.
                        </p>
                    </div>

                    <div>
                        <h3>Cookies and similar technologies</h3>
                        <p>
                        SF Capital Market and our third-party service providers may use
                        cookies and similar technologies to support the operation of our
                        digital offerings. Cookies are small amounts of data that a website
                        or online service exchanges with a web browser or application on a
                        visitor's device (for example, computer, tablet, or mobile phone).
                        Cookies help us to collect information about users of our digital
                        offerings, including date and time of visits, pages viewed, and
                        amount of time spent using our digital offerings, or general
                        information about the device used to access our digital offerings.
                        Our cookies are also used for security purposes and to personalize
                        your experience, such as customizing your screen layout. You can
                        refuse or delete cookies. Most browsers and mobile devices offer
                        their own settings to manage cookies. If you refuse a cookie, or if
                        you delete cookies from your device, you may experience some
                        inconvenience in your use of our digital offerings. For example, you
                        may not be able to sign in and access your account, or we may not be
                        able to recognize you, your device, or your online preferences. Both
                        SF Capital Market and third-party service providers we hire may use
                        cookies and other technologies, such as web beacons, pixel tags, or
                        mobile device ID, in online advertising as described below.
                        </p>
                    </div>

                    <div>
                        <h3>How can I contact SF Capital Market?</h3>
                        <p>                        
                        For further queries about your rights, advice and support you can
                        contact us by:
                            <ul>
                                <li>Email</li>
                                <li>Live chat</li>
                                <li>Walking into our office or through trade managers.</li>
                            </ul>
                        </p>
                    </div>
                </section>
            <FooterComponent />
        </PrivacyPolicyContainer>
    );
}

export default PrivacyPolicy;