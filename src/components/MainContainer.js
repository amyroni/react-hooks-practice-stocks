import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(response => response.json())
      .then(data => setStocks(data))
  }, [])

  const stocksToDisplay = stocks.filter(stock => {
    if (selectedType === "All") {
      return stock
    } else {
      return stock.type === selectedType
    }
  })

  if (sortBy) {
    stocksToDisplay.sort(function(a, b) {
      const itemA = a[sortBy];
      const itemB = b[sortBy];
      if (itemA < itemB) {return -1}
      if (itemA > itemB) {return 1}
      else {return 0}
    })
  }

  function handleAdd(stock) {
    const isInPortfolio = portfolio.find(item => item.name === stock.name)
    if (!isInPortfolio) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleRemove(removedStock) {
    const newStocks = portfolio.filter(stock => {
      return stock.id !== removedStock.id
    })
    setPortfolio(newStocks);
  }

  return (
    <div>
      <SearchBar onFilter={setSelectedType} onSort={setSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} onAdd={handleAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
