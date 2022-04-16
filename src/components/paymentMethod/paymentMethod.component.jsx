import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Container = styled.div`
  h2 {
    margin-bottom: 5px;
  }
  p {
    font-size: 1rem;
    color: #00B4AE;
    word-wrap: break-word;
    margin: 5px 0;
  }
  button {
    border: none;
    font-size: 16px;
    background-color: #00B4AE;
    padding: 5px 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    margin-right: 1rem;
    color: white;
  }
`;

const PaymentMethod = ({ title, walletAddress }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <p>{walletAddress}</p>
      <CopyToClipboard text={walletAddress} onCopy={handleCopy}>
        <button>{copied ? "Copied" : "Copy Wallet"}</button>
      </CopyToClipboard>
    </Container>
  );
};

export default PaymentMethod;
