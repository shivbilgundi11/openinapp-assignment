import React from 'react'

const Backup = () => {
  return (
    <div>
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
    </div>
  );
}

export default Backup