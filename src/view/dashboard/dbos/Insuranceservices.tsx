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

export function Insuranceservices() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide Insurance Services and grow your Business`}
          img={
            "https://cdn3d.iconscout.com/3d/premium/thumb/data-privacy-7208073-5846517.png"
          }
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://in.rapipay.com/wp-content/uploads/2022/12/Insurance.png"
          h1={`Insurance Services`}
          li1={`With RapiPay, a retailer gets a chance to be part of a growing insurance network and help customers stay protected against uncertainties. They can provide a wide range of insurance products like 2-wheeler insurance, car insurance, commercial insurance, and hospicash directly from their shop.`}
          li2={`Using RapiPay’s portal and app, retailers can provide insurance policies from leading insurance service providers to their customers, which not only helps them expand their business but provides an additional source of income. By becoming a RapiPay agent (DBO), one can start an insurance business in their area without any extra documentation and capital investment.`}
        />

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why Start
                <br />
                <strong>Insurance Business with RapiPay</strong>
              </h1>
              <div className="col-lg-10 d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_18-min.png"
                  }
                  h6={"Premium starting as low as ₹ 75*"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_16-min.png"
                  }
                  h6={"Wide suite of insurance services"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_19-min.png"
                  }
                  h6={"Provide best plans from leading insurers"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_15-min.png"
                  }
                  h6={"Instant and paperless policy"}
                />

                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_17-min.png"
                  }
                  h6={"Incremental growth with better returns"}
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
                "https://in.rapipay.com/wp-content/uploads/2022/12/T-V-Iqbal%E2%80%8B.png"
              }
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/T-V-Iqbal%E2%80%8B.png"
              }
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/T-V-Iqbal%E2%80%8B.png"
              }
              h5={`Mayank Kumar​​`}
              h6={"Tamil Nadu"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
          </div>
        </div>

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

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
