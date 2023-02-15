import {
  Address,
  Agent,
  Circle,
  Collapse,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Msme() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Get Funds For All Your Business Needs`}
          img={
            "https://static.vecteezy.com/system/resources/previews/010/872/156/original/3d-man-saving-money-in-jar-png.png"
          }
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://in.rapipay.com/wp-content/uploads/2022/12/Lending.png"
          h1={`RapiPay’s Business Loan Facility `}
          li1={`There are times when a retailer requires emergency funds to run his business efficiently, which he may not be able to manage from his current cash flows. This is when our business loans come in handy. RapiPay’s business loan helps its agents bridge these cash flow gaps. Our retailers can avail of business loans to support their existing enterprises or start a new venture.  `}
          li2={`Our pre-approved business loans are easy on the pocket with low-interest rates and are provided based on the retailer’s eligibility. Our retailers also enjoy the flexibility of making their loan repayments online seamlessly saving one from the hassles of manual submission. `}
        />

        <div className="business-testimonial bg-white py-5">
          <h1 className="text-center py-4">
            Advantages of <strong>RapiPay Business Loan </strong>
          </h1>
          <div className="d-flex flex-wrap justify-content-around ">
            <Testimonial
              img={
                "https://cdn3d.iconscout.com/3d/premium/thumb/online-loan-7042574-5727745.png?f=webp"
              }
              h5={`​Pre-approved Loan`}
              p={`We fulfill your financial needs with our pre-approved offers..​`}
            />
            <Testimonial
              img={
                "https://cdn3d.iconscout.com/3d/premium/thumb/work-process-5374075-4496044.png"
              }
              h5={`Easy Processing`}
              p={`We don't require any documents and provide smooth facilitation.​`}
            />
            <Testimonial
              img={
                "https://cdn3d.iconscout.com/3d/premium/thumb/fast-time-6013408-4985340.png"
              }
              h5={`Quick Disbursal`}
              p={`We disburse your loan instantly to help your business grow.`}
            />
            <Testimonial
              img={
                "https://cdn.iconscout.com/icon/premium/png-512-thumb/no-hidden-charges-2133439-1797243.png?f=avif&w=256"
              }
              h5={`No Hidden Charges`}
              p={`We are transparent about our fees and charges.​`}
            />
          </div>
        </div>

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why Our Agents Prefer
                <br />
                <strong>RapiPay Business Loan </strong>
              </h1>
              <div className="col-lg-10 d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/interest-rate.png"
                  }
                  h6={"Attractive interest rates "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Repayment.png"
                  }
                  h6={"Multiple repayment modes "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-13.png"
                  }
                  h6={"Dedicated Customer Support"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Service-Page-Icons-34.png"
                  }
                  h6={"Pre-approved offers "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/0-paper.png"
                  }
                  h6={"Minimal documentation "}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Service-Page-Icons-35.png"
                  }
                  h6={"Collateral-free loan  "}
                />
              </div>
            </div>
          </div>
        </>

        <div className="bg-white py-5 my-5">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"Which insurance services can I provide?"}
            id={"one"}
            content={`RapiPay agents can provide a wide range of insurance products to their customers like motor insurance which includes car insurance, bike insurance, and commercial insurance, hospicash, device insurance.`}
          />
          <Collapse
            idcall={"#two"}
            head={"Which insurance companies' policies can I provide?"}
            id={"two"}
            content={`Plans of all major insurance service providers like Reliance, Future Generali, Bajaj Allianz, TATA AIG, Digit, etc., are available on the RapiPay agent app and portal. You can compare the plans of all these insurers and provide the best insurance plan to your customers.`}
          />
          <Collapse
            idcall={"#three"}
            head={"How can I start an insurance business with RapiPay?"}
            id={"three"}
            content={`If you are a retailer and have a physical shop and documents like PAN and Aadhaar, then you first need to complete the RapiPay KYC process. After successfully completing this step, you will get a login ID and password through which you can access the RapiPay portal and app, and provide insurance services. Please contact at 0120-6366034 or you can fill the Contact Us form and our team will get back to you.`}
          />
        </div>

        <Address />

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
