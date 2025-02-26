import { useState } from "react"
import "./InvestmentCalculator.css"

export default function InvestmentCalculator() {
  const [investMoney, setInvestMoney] = useState("")
  const [rate, setRate] = useState("")
  const [goal, setGoal] = useState("")
  const [tableData, setTableData] = useState([])

  const handleClick = () => {
    let year = new Date().getFullYear() + 1
    let money = parseFloat(investMoney)
    let rateValue = parseFloat(rate)
    let goalValue = parseFloat(goal)

    if (isNaN(money) || isNaN(rateValue) || isNaN(goalValue) || money <= 0 || rateValue <= 0) {
      alert("Vui lòng nhập số hợp lệ!");
      return
    }

    let newData = []
    while (money < goalValue) {
      let endYearMoney = Math.round(money * (1 + rateValue / 100))
      newData.push({
        year: year,
        money: money,
        rate: rateValue,
        endYear: endYearMoney,
      });
      money = endYearMoney
      year++;
    }

    setTableData(newData)
  };

  return (
    <div className="container">
      
      <h2>Investment Calculator</h2>
      
      <div className="input-container">
        <label>Input Your Invest Money: </label>
        <input type="number" value={investMoney} onChange={(e) => setInvestMoney(e.target.value)} />
      </div>

      <div className="input-container">
        <label>Input Rate (%): </label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>

      <div className="input-container">
        <label>Input Your Goal: </label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>

      <button onClick={handleClick} className="button">Click</button>

      {tableData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate (%)</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td>{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
