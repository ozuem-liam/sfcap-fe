import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export const Container = styled("div")`
  @media (max-width: 1000px) {
    .wbus-ssr2271643 {
      color: #373b3f;
      width: 100%;
      padding: 33px 0 83px;
      font-size: 12px;
      background-color: #ffffff;
      background-image: url(https://rep.webullfintech.com/o.png);
    }
    .wbus-ssr2271646 {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid #eaf1f5;
      padding-left: 20px;
      justify-content: space-between;
    }
  }
  .wbus-ssr2271643 {
    color: #373b3f;
    width: 100%;
    padding: 33px 0 83px;
    font-size: 12px;
    background-color: #ffffff;
    background-image: url(https://rep.webullfintech.com/o.png);
  }
  .wbus-ssr2271645 {
    width: 100%;
    margin: 0;
  }
  .wbus-ssr2271646 {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eaf1f5;
    padding-bottom: 20px;
    justify-content: space-between;
  }
  .wbus-ssr2271646 > div > p {
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
    text-align: left;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 19px;
    padding-bottom: 22px;
  }
  .wbus-ssr2271646 > div > a {
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    display: block;
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    font-family: sans-serif;
    line-height: 19px;
    padding-bottom: 17px;
  }

  .wbus-ssr2271651 {
    padding: 10px;
  }
  .wbus-ssr2271651 > p {
    width: 100%;
    color: #575d62;
    font-size: 14px;
    padding: 10px;
    font-family: sans-serif;
    line-height: 21px;
    padding-bottom: 21px;
  }
  .wbus-ssr2271651 > p > a {
    text-decoration: none;
  }

  .wbus-ssr2271653 {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 28px;
  }
  .wbus-ssr2271654 {
    color: #000000;
    cursor: pointer;
    display: flex;
    position: relative;
    font-size: 14px;
    text-align: left;
    font-family: sans-serif;
  }
  .wbus-ssr2271654 > div {
    padding-right: 11px;
  }
  .wbus-ssr2271654 img {
    width: 34px;
    cursor: pointer;
    height: 22px;
    margin-right: 10px;
  }
  .wbus-ssr2271657 {
    width: 100%;
    color: #717273;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    white-space: pre-line;
  }
  .wbus-ssr2271657 > a {
    color: #007cff;
    text-decoration: none;
  }
`;

const FooterComponent = () => {
  return (
    <Container>
      <Row className='wbus-ssr2271646'>
        <Col lg='3' md='4' sm='6' xs='12'>
          <p role='heading' aria-level='3' aria-label='FAQ'>
            FAQ
          </p>
          <a aria-label='Read SF Capital Market Fee Schedule Details' href='#'>
            Fee Schedule
          </a>
          <a aria-label='View all account related FAQ' href='#'>
            Account
          </a>
          <a aria-label='View all margin trading related FAQ' href='#'>
            Margin Trading
          </a>
          <a aria-label='How to File an Inquiry' href='#'>
            How to File an Inquiry
          </a>
          <a aria-label='Customer Relationship Summary' href='#'>
            Customer Relationship Summary
          </a>
        </Col>
        <Col lg='3' md='4' sm='6' xs='12'>
          <p role='heading' aria-level='3' aria-label='About SF Capital Market'>
            About SF Capital Market
          </p>
          <a
            aria-label='Read SF Capital Market&#x27;s Company Introduction'
            href='#'
          >
            Our Story
          </a>
          <a
            aria-label='Read SF Capital Market&#x27;s recruitment information'
            href='#'
            rel='nofollow'
          >
            Careers
          </a>
          <a
            aria-label='Read our company events and press release articles'
            href='#'
          >
            Blog
          </a>
          <a
            aria-label='Check SF Capital Market&#x27;s membership with FINRA'
            href='#'
            target='_blank'
            rel='noreferrer noopener'
          >
            BrokerCheck
          </a>
          <a
            aria-label='our execution quality'
            href='/execution'
            target='_blank'
            rel='nofollow'
          >
            Our Execution Quality
          </a>
        </Col>
        <Col lg='3' md='4' sm='12' xs='12'>
          <p role='heading' aria-level='3' aria-label='Terms Conditions'>
            Terms &amp; Conditions
          </p>
          <a aria-label='Read our privacy policy' href='/privacy-policy'>
            Privacy Policy
          </a>
          <a
            aria-label='Read our business continuity plan disclosure'
            href='/terms-and-conditions'
          >
            Terms &amp; Conditions
          </a>
        </Col>
        <Col lg='3' md='4' sm='12' xs='12'>
          <p role='heading' aria-level='3' aria-label='Contact us'>
            Contact us
          </p>
          <a
            aria-label='send an email to SF Capital Market customer service team'
            rel='nofollow'
            href='mailto:support@sfcapitalmarket.com'
          >
            support@sfcapitalmarket.com
          </a>
          <a
            aria-label='call our customer service'
            href='tel:+1 (888) 828-0618'
            rel='nofollow'
          >
            +1 (888) 828-0618
          </a>
          <div className='wbus-ssr2271660'>
            <a
              aria-label='quick access to our Facebook account'
              href='#'
              target='_blank'
              rel='noreferrer'
            ></a>
            <a
              aria-label='quick access to our Twitter account'
              href='#'
              className='wbus-ssr2271661 wbus-ssr2271664'
              target='_blank'
              rel='noreferrer'
            ></a>
            <a
              aria-label='quick access to our instagram account'
              className='wbus-ssr2271669 wbus-ssr2271670'
              href='#'
              target='_blank'
              rel='noreferrer'
              style={{ marginRight: "0" }}
            ></a>
          </div>
        </Col>
    
      <Col lg='12' md='12' sm='12' xs='12'>
      <div className='wbus-ssr2271651'>
        <p>
          Securities trading is offered to self-directed customers by SF Capital
          Market Financial LLC, a broker dealer registered with the Securities
          and Exchange Commission (SEC). SF Capital Market Financial LLC is a
          member of the Financial Industry Regulatory Authority (
          <a
            aria-label='quick access to FINRA Broker Check'
            href='https://brokercheck.finra.org/firm/summary/289063'
            target='_blank'
            rel='noreferrer'
          >
            FINRA
          </a>
          ), Securities Investor Protection Corporation (
          <a
            aria-label='quick access to SIPC broker list'
            href='https://www.sipc.org/list-of-members/?query=webull'
            target='_blank'
            rel='noreferrer'
          >
            SIPC
          </a>
          ), The New York Stock Exchange (
          <a
            aria-label='quick access to NYSE membership introduction'
            href='https://www.nyse.com/markets/nyse/membership'
            target='_blank'
            rel='noreferrer'
          >
            NYSE
          </a>
          ),
          <a
            aria-label='quick access to Nasdaq membership introduction'
            href='http://www.nasdaqtrader.com/Trader.aspx?id=Membership'
            target='_blank'
            rel='noreferrer'
          >
            NASDAQ
          </a>
          and Cboe EDGX Exchange, Inc (
          <a
            aria-label='quick access to CBOE membership introduction'
            href='https://www.cboe.com/us/equities/membership/'
            target='_blank'
            rel='noreferrer'
          >
            CBOE EDGX
          </a>
          ).
        </p>
        <p>
          SF Capital Market Financial LLC is a member of SIPC, which protects
          securities customers of its members up to $500,000 (including $250,000
          for claims for cash). An explanatory brochure is available upon
          request or at
          <a
            aria-label='quick access to SIPC website'
            href='https://www.sipc.org/'
            target='_blank'
            rel='noreferrer noopener'
          >
            www.sipc.org
          </a>
          . Our clearing firm, Apex Clearing Corp., has purchased an additional
          insurance policy..{" "}
        </p>
        <p>
          Our clearing firm Apex Clearing Corp has purchased an additional
          insurance policy. The coverage limits provide protection for
          securities and cash up to an aggregate of $150 million, subject to
          maximum limits of $37.5 million for any one customer’s securities and
          $900,000 for any one customer’s cash. Similar to SIPC protection, this
          additional insurance does not protect against a loss in the market
          value of securities.
        </p>
        <p>
          Cryptocurrency execution and custody services are provided by Apex
          Crypto LLC (NMLS ID 1828849) through a software licensing agreement
          between Apex Crypto LLC and SF Capital Market Pay LLC. Cryptocurrency
          trading is offered through an account with Apex Crypto. Apex Crypto is
          not a registered broker-dealer or FINRA member and your cryptocurrency
          holdings are not FDIC or SIPC insured. Please ensure that you fully
          understand the risks involved before trading. Not all coins provided
          by Apex Crypto LLC and SF Capital Market Pay LLC are available to New
          York residents. Please visit
          <a
            aria-label='read crypto trading risk disclosures'
            href='#'
            target='_blank'
            rel='noreferrer noopener'
          >
            www.sfcapitalmarket.com/cryptocurrency{" "}
          </a>{" "}
          to see a list of crypto available to trade.
        </p>
        <p>
          All investments involve risk, and not all risks are suitable for every
          investor. The value of securities may fluctuate and as a result,
          clients may lose more than their original investment. The past
          performance of a security, or financial product does not guarantee
          future results or returns. Keep in mind that while diversification may
          help spread risk, it does not assure a profit or protect against loss
          in a down market. There is always the potential of losing money when
          you invest in securities or other financial products. Investors should
          consider their investment objectives and risks carefully before
          investing.
        </p>
        <p>
          Options trading entails significant risk and is not appropriate for
          all investors. Option investors can rapidly lose the value of their
          investment in a short period of time and incur permanent loss by
          expiration date. Losses can potentially exceed the initial required
          deposit. You need to complete an options trading application and get
          approval on eligible accounts. Please read the
          <a
            aria-label='quick link to read Characteristics and Risks of Standardized Options agreement'
            href='https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf'
            target='_blank'
            rel='noreferrer noopener'
          >
            Characteristics and Risks of Standardized Options
          </a>
          before trading options.
        </p>
        <p>
          No content on the SF Capital Market Financial LLC website shall be
          considered as a recommendation or solicitation for the purchase or
          sale of securities, options, or other investment products. All
          information and data on the website is for reference only and no
          historical data shall be considered as the basis for judging future
          trends.
        </p>
        <p>
          Investors should be aware that system response, execution price,
          speed, liquidity, market data, and account access times are affected
          by many factors, including market volatility, size and type of order,
          market conditions, system performance, and other factors.
        </p>
        <p>
          Free trading of stocks, ETFs, and options refers to $0 commissions for
          SF Capital Market Financial LLC self-directed individual cash or
          margin brokerage accounts and IRAs that trade U.S. listed securities
          via mobile devices, desktop or website products. Relevant regulatory
          and exchange fees may apply. Please refer to our
          <a
            aria-label='quick access to read our fee schedule details'
            href='https://www.sfcapitalmarket.com/pricing'
            target='_blank'
            rel='noreferrer noopener'
          >
            Fee Schedule
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className='wbus-ssr2271653'>
        <div className='wbus-ssr2271654'>
          <div>Language</div>
          <div role='listbox' aria-expanded='true'>
            <img
              alt=''
              src='https://wbstatic.webullfintech.com/v1/webull-us-g/assets/385cb87759961b9d55a45ba6a778c11f.png'
            />
          </div>
        </div>
        <div className='wbus-ssr2271657'>
          © 2022 SF Capital Market Financial LLC, All rights reserved. Member
          <a
            aria-label='quick access to FINRA Broker Check'
            href='https://rcheck.finra.org/firm/summary/289063'
            target='_blank'
            rel='noreferrer noopener'
          >
            FINRA
          </a>
          /
          <a
            aria-label='quick access to SIPC broker list'
            href='https://www.sipc.org/list-of-members/?query=webull'
            target='_blank'
            rel='noreferrer noopener'
          >
            SIPC
          </a>
          /
          <a
            aria-label='quick access to NYSE membership introduction'
            href='https://www.nyse.com/markets/nyse/membership'
            target='_blank'
            rel='noreferrer noopener'
          >
            NYSE
          </a>
          /
          <a
            aria-label='quick access to Nasdaq membership introduction'
            href='http://www.nasdaqtrader.com/Trader.aspx?id=Membership'
            target='_blank'
            rel='noreferrer noopener'
          >
            NASDAQ
          </a>
          /
          <a
            aria-label='quick access to CBOE membership introduction'
            href='https://www.cboe.com/us/equities/membership/'
            target='_blank'
            rel='noreferrer noopener'
          >
            CBOE EDGX
          </a>
            <img
                height='1'
                width='1'
                style={{ display: "none" }}
                alt=''
                src='https://insight.adsrvr.org/track/pxl/?adv=mf10ptp&amp;ct=0:3fz9ryo&amp;fmt=3'
            />
        </div>
      </div>
      </Col>
      </Row>

    </Container>
  );
};

export default FooterComponent;
