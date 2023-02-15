import {
  Agent,
  Circle,
  Collapse,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Cash() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide CMS Service and Increase Customer Footfall `}
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/businessman-in-blue-dress-saving-gold-coins-into-piggy-bank-with-bar-chart-and-green-arrow-up-6767678-5587454.png?f=webp"
          }
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://static.vecteezy.com/system/resources/previews/009/315/254/original/3d-money-coin-hand-holding-holding-money-in-business-hand-concept-online-payment-and-payment-3d-render-concept-finance-investment-money-saving-on-hand-isolated-free-png.png"
          h1={`Cash Management Service`}
          li1={`RapiPay’s cash management service (CMS) allows retailers to convert their shops into a cash deposit centre and help their customers with the timely payment of their loan EMIs conveniently. RapiPay’s CMS service is efficient, speedy, and safe to use.`}
          li2={`Our cash management service is functional on all days and lets retailers help customers with their EMI payments even on public holidays and non-banking hours. A retailer can accept cash from his customer and credit the EMI in the respective biller’s account immediately using the RapiPay web portal and app.`}
          li3={`Cash management service allows retailers to grow their business and increase their monthly earnings by getting an attractive commission on every cash deposit.`}
        />

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Benefits of Providing
                <br />
                <strong>RapiPay’s CMS Service</strong>
              </h1>
              <div className="col-lg-10 d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_06-min.png"
                  }
                  h6={"Attractive commission"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Service-Page-Icons-32.png"
                  }
                  h6={"150+ billers payments accepted"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_05-min.png"
                  }
                  h6={"Access to more customers  "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Real-time-dashboard-min.png"
                  }
                  h6={"Real-time dashboard "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Cash-flow-min.png"
                  }
                  h6={"Maintain healthy cash flow "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-13.png"
                  }
                  h6={"Dedicated customer service team"}
                />
              </div>
            </div>
          </div>
        </>

        <div className="dbos-testimonial">
          <h1 className="text-center">
            What Our Retailers <strong>Say</strong>
          </h1>
          <div className="d-flex flex-wrap justify-content-around ">
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/J-Spandanaa.png"
              }
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with Rapipay CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/J-Spandanaa.png"
              }
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with Rapipay CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/J-Spandanaa.png"
              }
              h5={`​J Spandana​​`}
              h6={"Andhra Pradesh​"}
              p={`I can accept loan EMIs for many banks/NBFCs as more than 100 billers are available with Rapipay CMS service. My shop has become a popular cash deposit point in my area and my business is growing too.​`}
            />
          </div>
        </div>

        <div className="bg-white py-5 my-5">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"What is a CMS service? "}
            id={"one"}
            content={`CMS stands for cash management service that enables a retailer to accept cash from his customer and deposit the same in the respective biller account digitally in real time. These payments are generally loan EMIs that a customer has taken from a bank/NBFC/MFI. `}
          />
          <Collapse
            idcall={"#two"}
            head={"Which companies’ EMIs I can accept via RapiPay CMS? "}
            id={"two"}
            content={`RapiPay is facilitating cash management service in association with Airtel Payments Bank and Fingpay. A retailer can accept payments from a customer for more than 150 billers which can be credited digitally to the biller’s account in real time. `}
          />
          <Collapse
            idcall={"#three"}
            head={
              "How is the cash management service of RapiPay is better than its competitors? "
            }
            id={"three"}
            content={`RapiPay is India’s fastest-growing assisted payment services company with a PAN India presence and regional offices in all major metro cities. Our retailers get all the required help via our dedicated sales and customer support team. RapiPay provides its retailers state-of-the-art web portal and the app that is safe, secure, and easy-to-use platform. `}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
