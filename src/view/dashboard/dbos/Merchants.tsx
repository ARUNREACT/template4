import {
  Address,
  Agent,
  Circle,
  Collapse,
  Form,
  Fourboxes,
  Parallelogram,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Merchants() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead merchants">
        <Top1image
          h1={`Introducing Smart POS Solutions for your Business`}
          img={
            "https://static.vecteezy.com/system/resources/previews/015/266/582/original/withdrawal-cash-with-yellow-atm-machine-transaction-banknote-money-bag-check-mark-isolated-3d-illustration-3d-render-png.png"
          }
        />
        <div className="py-5 bg-white four-boxes d-flex flex-wrap justify-content-around px-4">
          <Fourboxes
            classname={"four1"}
            h5={`Level Up`}
            p={`Expand your services do more for your customers.`}
            img={
              "https://cdn3d.iconscout.com/3d/premium/thumb/flying-money-4385660-3640566.png"
            }
          />
          <Fourboxes
            classname={"four2"}
            h5={`Sales Simplified`}
            p={`Contact less cash transactions made easy.`}
            img={
              "https://cdn3d.iconscout.com/3d/premium/thumb/business-goal-3597248-3010228.png?f=webp"
            }
          />
          <Fourboxes
            classname={"four3"}
            h5={`100% Trust`}
            p={`RapiPay is trusted by over 5 Lakh Retailers PAN India.`}
            img={
              "https://cdn3d.iconscout.com/3d/premium/thumb/star-3994352-3307686.png"
            }
          />
          <Fourboxes
            classname={"four4"}
            h5={`Scale Up`}
            p={`Over 2 Crores Monthly Transactions.`}
            img={
              "https://cdn3d.iconscout.com/3d/premium/thumb/start-up-3621170-3049741.png"
            }
          />
        </div>

        <div className="dbos-twoslide">
          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            Use POS for Card transactions At Very Attractive Rates.
          </h2>

          <div>
            <Twoslides
              classname={"col-11 col-xl-10  mx-auto two-slides-one"}
              img1="https://cdn3d.iconscout.com/3d/premium/thumb/edc-machine-6271006-5175088.png?f=webp"
              h1={`Micro POS Solutions and Micro ATM`}
              h5={`A Hybrid compact device for POS transactions as well as for cash withdrawals.`}
              icon={"fa fa-check"}
              li1={`Most Affordable`}
              li2={`Paperless Transactions`}
              li3={`Long lasting Li-ion battery`}
              li4={`Sleek 128x64 px LCD display`}
            />
            <div className="col-11 col-xl-10 mx-auto dbos-bottom">
              <h5 className="fw-bold my-3">Ideal For:</h5>
              <div className="d-flex flex-wrap justify-content-around col-lg-10 my-sm-3">
                <li>Mobile Phone Shops</li>
                <li>Grocery/Kiryana Shops</li>
                <li>Home Delivery Business</li>
                <li>Restaurants</li>
              </div>
              <div className="d-flex flex-wrap justify-content-around col-lg-10 my-sm-3">
                <li>Retail Shops</li>
                <li>Services Collections</li>
                <li>Govt. Institutions</li>
                <li>Banks Entertainment</li>
              </div>

              <h5 className="my-3 mx-4 mx-sm-0 text-center fw-bold">
                For sales enquiry{" "}
                <strong className="">call: 0120-6366034</strong>
              </h5>
            </div>
          </div>

          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            Earn Money For Every Micro ATM Transaction.
          </h2>

          <div>
            <Twoslides
              classname={"col-11 col-xl-10  mx-auto two-slides-one"}
              img1="https://cdn3d.iconscout.com/3d/premium/thumb/pos-machine-5119327-4287944.png"
              h1={`Smart POS Solutions: The Best Android POS For Your Business`}
              h5={`The most good looking Android POS machine with Swipe, Tap and Insert feature`}
              icon={"fa fa-check"}
              li1={`Multiple Payment Applications`}
              li2={`Inbuilt Camera`}
              li3={`Large screen display`}
              li4={`Integrated Receipt Printer`}
            />
            <div className="col-11 col-xl-10 mx-auto dbos-bottom">
              <h5 className="fw-bold my-3">Ideal For:</h5>
              <div className="d-flex flex-wrap justify-content-around col-lg-10 my-sm-3">
                <li>Electronics</li>
                <li>Hospitality Services</li>
                <li>Automobile</li>
                <li>SuperMarkets/Hyper Markets</li>
              </div>
              <div className="d-flex flex-wrap justify-content-around col-lg-10 my-sm-3">
                <li>Gas Stations</li>
                <li>Lifestyle</li>
                <li>Large Business</li>
                <li>Govt. Institutions</li>
                <li>Banks</li>
                <li>Airlines</li>
              </div>

              <h5 className="my-3 mx-4 mx-sm-0 text-center fw-bold">
                For sales enquiry{" "}
                <strong className="">call: 0120-6366034</strong>
              </h5>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
