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

export function Dmt() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Fund Transfer Made Easy with RapiPay’s DMT Service`}
          img={
            "https://www.hemogenomics.com/wp-content/uploads/2020/04/india-map-for-cancer-screening.png"
          }
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-banking-5526549-4616423.png"
          h1={`RapiPay’s Domestic Money Transfer Service`}
          li1={`DMT is a cash-to-bank-account remittance service provided by business correspondents. A retailer can provide RapiPay’s domestic money transfer (DMT) service from his shop and help customers transfer money to their loved ones across the country. They can remit funds to any nationalised and private banks that operate in India and support NEFT/IMPS.`}
          li2={`RapiPay offers hassle-free and instant domestic fund transfer service for the migrant and unbanked population via its robust network of 6 lakhs+ agents across India.`}
        />

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1 className="mb-5">
                Benefits of becoming
                <br />
                <strong>RapiPay’s DMT service provider</strong>
              </h1>
              <div className="col-lg-10 d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_08-min.png"
                  }
                  h6={"Real time transaction"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_07-min.png"
                  }
                  h6={"Money transfer available 365 days"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_09-min.png"
                  }
                  h6={"Secure and encrypted network"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_06-min.png"
                  }
                  h6={"Attractive Commission"}
                />

                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/12/icons-tiles_12-min.png"
                  }
                  h6={"Transfer funds to any bank in India"}
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
                "https://in.rapipay.com/wp-content/uploads/2022/12/Maknojiya-Sohel-Bhai%E2%80%8B.png"
              }
              h5={`Anupam Mudak​`}
              h6={"Tamil Nadu"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Maknojiya-Sohel-Bhai%E2%80%8B.png"
              }
              h5={`Anupam Mudak​`}
              h6={"Tamil Nadu"}
              p={`I use RapiPay Micro ATM services. I put up the ATM signage provided by RapiPay and my customers increased after that. More customers, more business.​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Maknojiya-Sohel-Bhai%E2%80%8B.png"
              }
              h5={`Anupam Mudak​`}
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
            head={"Who can become a domestic money transfer agent?"}
            id={"one"}
            content={`By becoming a RapiPay agent DBO, any retailer can become a DMT agent and start providing domestic money transfer services to their customers. Retailers will just have to use the RapiPay agent app or portal to transfer their customers’ money to any bank account in India. Additionally, a retailer can earn extra income in the form of DMT commission which he gets on every money transfer transaction.`}
          />
          <Collapse
            idcall={"#two"}
            head={"In which all bank accounts I can send money?"}
            id={"two"}
            content={`A DMR (Domestic Money Remittance) agent using National Electronic Fund Transfer (NEFT), Immediate Payment Service (IMPS) can send his customers’ money to all major nationalised and private banks based in India like SBI, PNB, ICICI, HDFC, Canara etc. A list of member banks providing IMPS/NEFT service is available at https://www.npci.org.in/what-we-do/imps/live-members`}
          />
          <Collapse
            idcall={"#three"}
            head={
              "Are there any domestic money transfer charges a customer needs to pay?"
            }
            id={"three"}
            content={`Just like the micro ATM and AePS service of RapiPay that allow customers to withdraw cash instantly, the domestic money transfer facility of RapiPay lets your customer transfer funds in a hassle-free and secure manner without any charges. They simply need to provide their mobile number and bank account details to transfer money.`}
          />
        </div>

        <Agent />
      </div>
      <Footer />
    </div>
  );
}
