import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemove }) {
  const stocksArray = stocks.map(stock => {
    return <Stock key={`portfolio-${stock.id}`} stock={stock} onClick={onRemove} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksArray}
    </div>
  );
}

export default PortfolioContainer;
