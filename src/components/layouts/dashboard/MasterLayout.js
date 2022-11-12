import React from 'react'
import '../../../assets/vendor/css/core.css'
import '../../../assets/vendor/css/theme-default.css'
import '../../../assets/css/demo.css'
import '../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../../assets/vendor/libs/apex-charts/apex-charts.css'

// import '../../../assets/vendor/js/helpers.js'
// import '../../../assets/js/config'
// import '../../../assets/vendor/libs/jquery/jquery.js'
// import '../../../assets/vendor/libs/popper/popper.js'
// import '../../../assets/vendor/js/bootstrap.js'
// import '../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
// import '../../../assets/vendor/js/menu.js'
// import '../../../assets/vendor/libs/apex-charts/apexcharts.js'
// import '../../../assets/js/main.js'
// import '../../../assets/js/dashboards-analytics.js'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
function MasterLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <Sidebar />
            <div className="layout-page">
                <Navbar />

                <div class="content-wrapper">
                    <div class="container-xxl flex-grow-1 container-p-y">
                        <main>
                        {/* here is alla dynamic data */}
                            <Outlet />
                        </main>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MasterLayout