import React from 'react';
import{ Row, Col } from "react-bootstrap";
import {PricingPageContainer} from "./pricingPage.styles"

import NavbarComponent from "../../components/navBar/navBar.component"
import FooterComponent from "../../components/footer/footer.component"

const PricingPage = () => {
    function load() {
        window.location.href = "signup";
    }
    return (
        <PricingPageContainer>
            <NavbarComponent />
            <Row>
                <Col lg="6" md="6" sm="12" xs="12">
                    <div className="wbus-ssr1694">
                        <h1 className="wbus-ssr1690" aria-level="1">SF Capital Market Financial Fee Schedule</h1>
                        <p className="wbus-ssr1692">SF Capital Market believes that technology empowers traders to be more profitable helping to grow our user’s economic freedom. Technology also enables us to provide transparent and straightforward prices with 0 commission trades and no deposit minimums.</p>
                        <p className="wbus-ssr1693">We make money the same way every other broker makes money, but with one less revenue line item: commissions. In order to keep the lights on, we optimize the back-end revenue streams that every other broker (traditional or non) utilize to generate revenue. Simply put, these are stock loans, interest on free credit balances, margin interest and payment for order flow. More information on this can be found in our <a href="https://pic.webull.com/PDFs/Disclosure of Payment for Order flow and Order Routing Information (Rule 606 and 607).pdf" target="_blank" rel="noreferrer">SEC Rule 606 disclosure</a>.</p>
                        <div className="wbus-ssr1695" role="button" aria-label="Open an Account" onClick={load}>Open an Account</div>
                    </div>

                    <div className="wbus-ssr1691" style={{backgroundImage:"url(https://webullmarket.com/asset/webull/webull-us-g/assets/f277e8632c9a040c4cae782855f8a30a.png)"}}></div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                    <div className='wbus-ssr1696'>
                    <h1 className="wbus-ssr1697" aria-level="2">Tiered Margin Interest Rates</h1>
                    <h2 className="wbus-ssr1698">Annual Margin Rate</h2>
                    <p className="wbus-ssr1699">SF Capital Market provides up to 4x day-trade buying power and 2x overnight buying power with a margin account. You must have at least $2,000 to qualify.<br/>Interest on margin trading is calculated on a daily basis and paid on a monthly basis. The margin rate is variable and is determined by the size of the margin loan.</p>
                    <div className="wbus-ssr1700"></div>
                    <div className="wbus-ssr1701">
                        <p>Debit Balance</p>
                        <div></div>
                        <p>Annual Margin Rate</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$0~25,000.00</p>
                        <div></div>
                        <p>6.99%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$25,000.01~100,000.00</p>
                        <div></div>
                        <p>6.49%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$100,000.01~250,000.00</p>
                        <div></div>
                        <p>5.99%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$250.000.01~500,000.00</p>
                        <div></div>
                        <p>5.49%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$500,000.01~1,000,000.00</p>
                        <div></div>
                        <p>4.99%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>$1,000,000.01~3,000,000.00</p>
                        <div></div>
                        <p>4.49%</p>
                    </div>
                    <div className="wbus-ssr1702">
                        <p>＞$3,000,000.00</p>
                        <div></div>
                        <p>3.99%</p>
                    </div>
                    <h2 className="wbus-ssr1698" style={{paddingTop:"50px"}}>Short Selling Fees</h2>
                    <p className="wbus-ssr1699">For a short position, you need to borrow shares of a company before you sell them. The cost associated with a short sale is the fee for borrowing the stocks of said company. The stock loan rate changes on a daily basis based on market condition. Just as interest on margin trading, it is calculated on a daily basis and charged daily. The formula is:<br/>Daily Margin Interest (Short Position) = The Daily Market Value of the Borrowed Stocks when Market Closes* Stock Loan Rate for That Stock/360.</p>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                <div className="wbus-ssr1703">
                    <h1 className="wbus-ssr1705" aria-level="2">Fees Charged By Regulatory Agencies &amp; Exchanges</h1>
                    <h2 className="wbus-ssr1706">SF Capital Market does not charge commissions for trading stocks, ETFs and options listed on U.S. exchanges. However, fees are still applied by certain regulatory agencies, some of which are passed from the broker dealer to clients as a pass through transaction. SF Capital Market does not profit from these fees.</h2>
                    <div className="wbus-ssr1708"></div>
                    <div className="wbus-ssr1709">
                        <p>Trading Privileges</p>
                        <div>
                            <p>Charged By</p>
                            <p>Types</p>
                            <p>Fees</p>
                            <p>Rule</p>
                        </div>
                    </div>
                    <div className="wbus-ssr1710">
                        <p>Stock/ETF</p>
                        <div>
                            <div className="wbus-ssr1711">
                                <p>SF Capital Market as a pass through transaction</p>
                                <p>Regulatory Transaction Fee</p>
                                <p>$0.0000051*Total $ Trade Amount (Min $0.01)</p>
                                <p>Sells Only</p>
                            </div>
                            <div className="wbus-ssr1711">
                                <p>Financial Industry Regulatory Authority (FINRA)</p>
                                <p>Regulatory Fee</p>
                                <p>$0.000119 * Total Trade Volume Min $0.01 per - Max $5.95 per</p>
                                <p>Sells Only</p>
                            </div>
                        </div>
                    </div>
                    <div className="wbus-ssr1710">
                        <p>Options</p>
                        <div>
                            <div className="wbus-ssr1711">
                                <p>SF Capital Market as a pass through transaction</p>
                                <p>Regulatory Transaction Fee</p>
                                <p>$0.0000051*Total $ Trade Amount (Min $0.01)</p>
                                <p>Sells Only</p>
                            </div>
                            <div className="wbus-ssr1711">
                                <p>Financial Industry Regulatory Authority (FINRA)</p>
                                <p>Trading Activity Fee</p>
                                <p>$0.002 * No. of Contracts (Min $0.01)</p>
                                <p>Sells Only</p>
                            </div>
                            <div className="wbus-ssr1711">
                                <p>Options Exchanges</p>
                                <p>Options Regulatory Fee</p>
                                <p>$0.033 * No. of Contracts</p>
                                <p>Buys &amp; Sells</p>
                            </div>
                            <div className="wbus-ssr1711">
                                <p>Options Clearing Corp (OCC)</p>
                                <p>Clearing Fee</p>
                                <p>$0.02 * No. of Contracts (Max $55 per Trade)</p>
                                <p>Buys &amp; Sells</p>
                            </div>
                        </div>
                    </div>
                    <ul className="wbus-ssr1704">
                        <li>Regulatory Transaction Fee: The Securities and Exchange Commission (SEC) assesses transaction fees on national securities exchanges and self-regulatory organizations at a rate consistent with Section 31 of the Securities Exchange Act of 1934. National securities exchanges and self-regulatory organizations offset the transaction fees by charging their member broker-dealers such as SF Capital Market, and we, in turn, offset this fee by charging you a Regulatory Transaction Fee for covered sell transactions. The fee is ultimately intended to cover the costs incurred by the government, including the SEC, for supervising and regulating the securities markets and securities professionals. The SEC recalculates the amount of this fee periodically – at least annually but sometimes more often. <a href="https://www.sec.gov/news/press-release/2020-7" target="_blank" rel="noreferrer">Learn more&gt;</a><br/>Effective February 25, 2021, the SEC Fee rate will be reduced from $22.10 to $5.10 for every $1,000,000 in sale proceeds.</li>
                        <li>Finra Trading Activity Fee: The Trading Activity Fee will be assessed at a rate consistent with Section 1 of Schedule A of FINRA’s By-Laws for trading activity. Current rates are: $0.000119 per share for each sale of a covered equity security, with a maximum charge of $5.95 per trade; $0.002 per contract for each sale of an option contract.<a href="https://www.finra.org/rules-guidance/rulebooks/corporate-organization/section-1-member-regulatory-fees" target="_blank" rel="noreferrer">Learn more&gt;</a></li>
                        <li>Options Exchange Fee: The Options Regulatory Fee is a fee assessed by exchanges on their members. It is collected by The Options Clearing Corp (OCC) on behalf of the U.S. options Exchanges. <a href="https://www.sifma.org/wp-content/uploads/2017/09/sifma-lotcorf.pdf" target="_blank" rel="noreferrer">Learn more&gt;</a></li>
                        <li>OCC Clearing Fee: The Clearing Fee is charged by The Options Clearing Corp (OCC) who provides central counterparty (CCP) clearing and settlement services to 16 exchanges.<a href="https://www.theocc.com/membership/schedule-of-fees/" target="_blank" rel="noreferrer">Learn more&gt;</a></li>
                        <li>Our clearing firm, Apex, will withhold the above regulatory fees where applicable. All fees in the table above are subject to change without notice as per our clearing partner, Apex Clearing.</li>
                    </ul>
                </div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                <div className="wbus-ssr1712">
                    <h1 className="wbus-ssr1713" aria-level="2">Other Relevant Fees</h1>
                    <h2 className="wbus-ssr1714">Deposit &amp; Withdrawal Fees</h2>
                    <div className="wbus-ssr1715"></div>
                    <div className="wbus-ssr1716">
                        <p>Action</p>
                        <p>Region</p>
                        <p>Fees</p>
                        <p>Charged By</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>ACH Deposit</p>
                        <p>U.S. Bank Account</p>
                        <p>$0.00</p>
                        <p>-</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>ACH Withdrawal</p>
                        <p>U.S. Bank Account</p>
                        <p>$0.00</p>
                        <p>-</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>Deposit via Wire Transfer</p>
                        <p>U.S. Bank Account</p>
                        <p>$8 per Deposit</p>
                        <p>Apex (Clearing Firm)</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>Withdraw via Wire Transfer</p>
                        <p>U.S. Bank Account</p>
                        <p>$25 per Withdrawal</p>
                        <p>Apex (Clearing Firm)</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>Deposit via Wire Transfer(International)</p>
                        <p>Non-U.S. Bank Account</p>
                        <p>$12.5 per Deposit</p>
                        <p>Apex (Clearing Firm)</p>
                    </div>
                    <div className="wbus-ssr1717">
                        <p>Withdraw via Wire Transfer(International)</p>
                        <p>Non-U.S. Bank Account</p>
                        <p>$45 per Withdrawal</p>
                        <p>Apex (Clearing Firm)</p>
                    </div>
                    <ul className="wbus-ssr1724">
                        <li>An ACH transfer is free of charge, but if an ACH transaction is returned due to insufficient funds, a non-transactional account, levies, or for any other reason you will be charged a $5 reversal fee by our clearing firm.</li>
                        <li>$5 ACH reversal fee is also applied to a returned/reversed ACH withdrawal.</li>
                        <li>All fees in the table above are subject to change without notice as per our clearing partner, Apex Clearing.</li>
                        <li>Additional wire transfer fees charged by any originating, intermediary, or recipient bank may apply. Please contact your bank for details.</li>
                        <li>Please make sure that the beneficiary owner of the bank account is the SF Capital Market account owner. You must provide your full name and SF Capital Market account number in the description/comment of your wire transfer, or the transfer will be returned. If your wire transfer was returned due to non-identical, or wrong beneficiary owner or wrong information, the wire transfer fees charged by any originating, intermediary, or recipient bank may still apply.</li>
                    </ul>
                    <h2 className="wbus-ssr1714" style={{paddingTop:"50px"}}>Stock Transfer Fees</h2>
                    <div className="wbus-ssr1715"></div>
                    <div className="wbus-ssr1720">
                        <p>Transfer direction</p>
                        <div>
                            <p>Charged By</p>
                            <p>Fees</p>
                        </div>
                    </div>
                    <div className="wbus-ssr1721">
                        <p>Transfer to SF Capital Market</p>
                        <div>
                            <div className="wbus-ssr1722">
                                <p>Apex (Clearing Firm)</p>
                                <p>$0.00</p>
                            </div>
                            <div className="wbus-ssr1722">
                                <p>Contra Broker</p>
                                <p>Please contact the contra Broker for details.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wbus-ssr1721">
                        <p>Transfer from SF Capital Market</p>
                        <div>
                            <div className="wbus-ssr1722">
                                <p>Apex (Clearing Firm)</p>
                                <p>$75 per Outgoing Stock Transfer</p>
                            </div>
                            <div className="wbus-ssr1722">
                                <p>Contra Broker</p>
                                <p>Please contact the contra Broker for details.</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="wbus-ssr1714" style={{paddingTop:"60px"}}>Postage</h2>
                    <div className="wbus-ssr1715"></div>
                    <div className="wbus-ssr1718">
                        <p>Action</p>
                        <p>Charged By</p>
                        <p>Fees</p>
                    </div>
                    <div className="wbus-ssr1719">
                        <p>Paper Confirm Fee</p>
                        <p>Apex (Clearing Firm)</p>
                        <p>$2/Confirm</p>
                    </div>
                    <div className="wbus-ssr1719">
                        <p>Paper Statements Fee</p>
                        <p>Apex (Clearing Firm)</p>
                        <p>$5/Statement</p>
                    </div>
                    <div className="wbus-ssr1719">
                        <p>Paper Prospectus Fee</p>
                        <p>Apex (Clearing Firm)</p>
                        <p>$2.5/Mail</p>
                    </div>
                    <p className="wbus-ssr1726">Note: Per regulatory requirements, we must provide statements and confirms to clients. Normally this is sent electronically to the email address provided by clients in their account opening application. However, if the email address fails to receive the email, we are required to send paper statements, confirms, and prospectus to the mailing address on file. This will incur the above paper material delivery fees, charged by Apex, our clearing firm.</p>
                    <p className="wbus-ssr1725"><span>* SF Capital Market reserves the right to change or modify the fee schedule at own discretion.</span><span>Updated on: Feb 23, 2021</span></p>
                </div>
                </Col>
        </Row>
            <FooterComponent />
        </PricingPageContainer>
    );
}

export default PricingPage;