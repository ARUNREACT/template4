import "./Dashboard.styles.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Fourboxes, Numbers, Twoslides } from "../../../component/Layout";
export function Dashboard() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead p-0">
        <div>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6">
                    <h1>Offering Digital Banking as a Service</h1>
                    <p>
                      Effortless,Efficient and Extrordinary Banking Service on a
                      SingleSuper App
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://giraffestudioapps.com/wp-content/uploads/2020/11/ux-ui-design-mockup.png"
                      className="img-fluid "
                      alt="."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6">
                    <h1>
                      New Age <br />
                      New You <br />
                      Neo Banking
                    </h1>
                    <p>
                      Introducing NYE, the New Age Banking.A single app to
                      control all your financial and banking needs
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.pixelsoftwares.com/assets/img/ui-ux/mockup-ui.webp"
                      className="img-fluid mt-4 "
                      alt="."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="digital px-lg-5 p-0">
                  <div className="col-md-6">
                    <h1>Become a Rapipay Direct Business Outlet</h1>
                    <p>
                      Grow your Income and Business with Rapipay Banking Service
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://www.cudedesign.co.uk/wp-content/uploads/2022/01/header-image.png"
                      className="img-fluid"
                      alt="."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <Twoslides
          classname={"col-12  mx-auto two-slides"}
          img={require("../../../asset/sample1/graph3.png")}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-banking-app-5695407-4773611.png"
          h1={`Digital Bank Account`}
          h5={`Digital Banking Services Served in a Single App.`}
          icon={"fa fa-check"}
          li1={`Leading Banks options to choose from`}
          li2={`Open & Manage Multiple Bank accounts`}
          li3={`Instant paperless Account opening`}
          li4={`Attractive Cashback and Rewards`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides-one"}
          img={require("../../../asset/sample1/graph1.png")}
          img1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-banking-4064432-3374140.png?f=webp"
          }
          h1={`Loans`}
          h5={`Personal or Business – Get for any purpose`}
          icon={"fa fa-check"}
          li1={`Quick approval and disbursal`}
          li2={`Paperless and Simple`}
          li3={`Flexi Loan Repayment options`}
          li4={`Customized Loan Amount`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides"}
          img={require("../../../asset/sample1/graph2.png")}
          img1={
            "https://static.vecteezy.com/system/resources/previews/009/315/263/original/3d-hand-holding-mobile-isolated-with-security-on-background-hand-using-funding-business-graph-on-application-under-creative-solution-secure-concept-3d-trading-for-business-investment-free-png.png"
          }
          h1={`Investments`}
          h5={`Invest Smarter with your NYE account`}
          icon={"fa fa-check"}
          li1={`FD, mutual funds, stocks and more`}
          li2={`Easy Portfolio Tracking`}
          li3={`Algorithm based advisory`}
          li4={`Customized recommendation to grow your portfolio`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12  mx-auto two-slides-one"}
          img={require("../../../asset/sample1/graph4.png")}
          img1="https://static.vecteezy.com/system/resources/previews/009/390/934/original/3d-illustration-insurance-png.png"
          h1={`Insurance`}
          h5={`All insurance needs in 𝗼𝗻𝗲 𝗮𝗽𝗽 Protect your belongings and loved ones.`}
          icon={"fa fa-check"}
          li1={`Better Premium Rates`}
          li2={`Insure vehicles, health, travel etc`}
          li3={`Instant Policy Renewal`}
          li4={`No Paperwork. Fully Digital Journey`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
        <Twoslides
          classname={"col-12 mx-auto two-slides last-img"}
          img={require("../../../asset/sample1/graph5.png")}
          img1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/edc-machine-4227805-3517272.png"
          }
          h1={`Grow your Business With RapiPay Digital Banking Services`}
          h5={`Become a RapiPay DBO`}
          icon={"fa fa-check"}
          li1={`Cost-effective MPOS Solutions`}
          li2={`Provide MATM & AEPS Services`}
          li3={`Offer Affordable Insurance Plans`}
          li4={`Bills & Utility Payments`}
          button={"Know More"}
          btnicon={"fa-solid fa-chevron-right"}
        />
      </div>
      <div className="py-5 bg-white four-boxes d-flex flex-wrap justify-content-around px-4">
        <Fourboxes
          classname={"four1"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={
            "https://in.rapipay.com/wp-content/uploads/2022/11/card1_594d8e89fc.png"
          }
        />
        <Fourboxes
          classname={"four2"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/shield-protection-2872545-2389853.png"
          }
        />
        <Fourboxes
          classname={"four3"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={
            "https://static.vecteezy.com/system/resources/thumbnails/015/214/757/small/bank-3d-illustration-icon-png.png"
          }
        />
        <Fourboxes
          classname={"four4"}
          h5={`Excellent Customer Service`}
          p={`Unparalleled customer support`}
          img={
            "https://static.vecteezy.com/system/resources/previews/010/175/187/non_2x/3d-business-wallet-finance-illustration-free-png.png"
          }
        />
      </div>
      <Numbers />
      {/* <div className="vh-100 services">
        <div className="imges"></div>
        <div className="h1">hi is that working</div>
      </div> */}
      <Footer />
    </div>
  );
}
