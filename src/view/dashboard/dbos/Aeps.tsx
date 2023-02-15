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

export function Aeps() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Provide Cash Withdrawal Services with AePS`}
          img={"https://paypocket.in/assets/img/selected/aeps.png"}
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://paypocket.in/assets/img/selected/aeps1.png"
          h1={`RapiPay’s AePS Service`}
          li1={`Using RapiPay’s AePS service, a retailer or a business correspondent can provide services such as cash withdrawal, cash deposit, balance enquiry, and Aadhaar Pay. Just like mATM, AePS is primarily used for cash withdrawal wherein a customer can perform banking transactions using Aadhaar as his/her identity.`}
          li2={`The Aadhaar Enabled Payment System (AePS) is an initiative by the National Payments Corporation of India (NPCI) to encourage cashless transactions. The AePS service uses a fingerprint or an iris scan for biometric verification, ensuring high security for each transaction.`}
        />

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Why retailers prefer to become
                <br />
                <strong>RapiPay AePS Service Provider</strong>
              </h1>
              <div className="col-lg-10 d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_06-min.png"
                  }
                  h6={"Higher commission"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_07-min.png"
                  }
                  h6={"Grow your business and earn extra income"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/Service-Page-Icons-14.png"
                  }
                  h6={"Regular product training"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-12-12.png"
                  }
                  h6={"Best in industry sales support"}
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
                "https://in.rapipay.com/wp-content/uploads/2022/12/Divya.png"
              }
              h5={`Diviya Priya`}
              h6={"India"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Divya.png"
              }
              h5={`Diviya Priya`}
              h6={"India"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Divya.png"
              }
              h5={`Diviya Priya`}
              h6={"India"}
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
            head={"What is Asdhaar ATM ?"}
            id={"one"}
            content={`Aadhaar ATM is another name for Aadhaar Enabled Payment System (AePS). This system enables a person to withdraw cash or make payments from the bank account linked to his Aadhaar using his biometric. In addition to a micro ATM, this is another easy and safe way to withdraw cash.`}
          />
          <Collapse
            idcall={"#two"}
            head={"How does the AePS cash withdrawal service work?"}
            id={"two"}
            content={`AePS service helps customers withdraw small amounts without visiting an ATM or a bank.To withdraw cash using AePS, a customer needs to visit the nearest RapiPay agent (DBO) and enter his/her 12-digit Aadhaar number in the app or the portal. He/she then needs to authenticate the transaction by giving biometrics like a fingerprint or an iris scan. The amount withdrawn will be credited to the retailer’s RapiPay wallet immediately, and he will hand over the cash to the customer.`}
          />
          <Collapse
            idcall={"#three"}
            head={"What is RapiPay’s AePS registration process?"}
            id={"three"}
            content={`RapiPay’s AePS registration process is very smooth and simple. If the retailer has a physical store and basic documents like Aadhaar and PAN card, then he can get a RapiPay agent ID by calling at 0120-6366034. For more information, he can also fill out the Contact Us form and our team will get back to him. `}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
