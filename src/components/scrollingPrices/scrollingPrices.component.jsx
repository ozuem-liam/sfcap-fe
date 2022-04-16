import React, { useEffect } from "react";

const ScrollingPrices = () => {
  useEffect(() => {
    const script = document.createElement("script");
    //script.async = true;
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    document
      .querySelector("div.tradingview-widget-container")
      .appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default ScrollingPrices;
