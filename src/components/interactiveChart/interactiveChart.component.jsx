import React, { useEffect } from "react";

const InteractiveChart = () => {
  useEffect(() => {
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = `
        new TradingView.widget({
            "width": 980,
            "height": 610,
            "symbol": "GEMINI:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "details": true,
            "hotlist": true,
            "calendar": true,
            "container_id": "tradingview_f8d95"
          })
        `;
    document
      .querySelector("div.tradingview-widget-container-2")
      .appendChild(script2);
  }, []);
  return (
    <div className="tradingview-widget-container-2">
      <div id="tradingview_f8d95"></div>
    </div>
  );
};

export default InteractiveChart;
