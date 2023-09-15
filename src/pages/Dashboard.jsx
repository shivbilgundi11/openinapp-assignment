import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import TopCoinCards from "../components/TopCoinCards";
import CoinChart from "../components/CoinChart";
import DemoPieChart from "../components/DemoPieChart";
import Profile from "../components/Profile";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

const Dashboard = () => {
  const [apiData, setAPIData] = useState();
  const [coinHistory, setCoinHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1d`
        );
        setCoinHistory(data.prices);
        setAPIData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        alert("API request limit reached pls request after few-mins...");
        setLoading(false);
      }
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <div className="dashb__container">
          <SideBar />

          <div className="main__dashboard__container">
            {/* Dhashboard-Header */}
            <DashHeader />

            {/* Top-Crypto-Coins */}
            <TopCoinCards data={apiData} />

            {/* History-Chart-Of-A-Single-Chart */}
            <CoinChart coinHistory={coinHistory} />

            <div className="pie__profile__container">
              <DemoPieChart />

              <Profile />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
