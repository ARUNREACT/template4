import {
  Circle,
  Collapse,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Microatm() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Make your Shop an ATM with RapiPay Micro ATM`}
          img={
            "https://static.vecteezy.com/system/resources/previews/009/373/580/original/business-icon-calculator-3d-illustration-png.png"
          }
        />
        <Twoslides
          classname={"col-12 col-xl-11  mx-auto two-slides"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-accounting-6548548-5376652.png?f=webp"
          h1={`Micro ATM Service`}
          li1={`Micro ATM (mATM) is a portable handheld device for cash withdrawal from users’ bank accounts. mATM services are used to withdraw cash and for balance enquiries just like a bank ATM.`}
          li2={`RapiPay micro ATMs come in handy in areas where bank ATMs are far and few. It has made cash withdrawal more accessible and convenient for customers, especially in rural and Tier 2,3 areas. By using our micro ATM services, lakhs of Indian retailers are witnessing incremental growth in their income and business.`}
        />

        <>
          <div className="vh-100 service">
            <div className="service-image"></div>
            <div className="service-content text-center">
              <h1>
                Why <strong>RapiPay Micro ATM Service</strong>
                <br /> Is the First Choice of Retailers
              </h1>
              <div className="d-flex flex-wrap align-items-center justify-content-evenly service-box">
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_06-min.png"
                  }
                  h6={"Commission on every transaction"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_01-min.png"
                  }
                  h6={"Instant settlement"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_03-min.png"
                  }
                  h6={"Accepts all debit cards"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-11.png"
                  }
                  h6={"2 Yrs device warranty"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/icons-tiles_02-min.png"
                  }
                  h6={"Hybrid device - mATM & mPOS"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-13.png"
                  }
                  h6={"Dedicated customer service team​"}
                />
                <Circle
                  img={
                    "https://in.rapipay.com/wp-content/uploads/2022/11/Service-Page-Icons-12-12.png"
                  }
                  h6={"Best in industry sales support"}
                />
              </div>
            </div>
          </div>
        </>

        <div className="bg-white  py-5 bg-dange ">
          <h1 className="text-center fw-bold mb-5 display-5">
            Frequently Asked Questions
          </h1>
          <Collapse
            idcall={"#one"}
            head={"What is mATM ?"}
            id={"one"}
            content={`mATM, also known as a micro ATM is used by business correspondents (BCs) to provide cash withdrawal facilities to their customers. The card swipe facility on the device allows users to swipe their debit cards for cash withdrawals. While using a mATM, the business correspondent gives the requested cash to the user, which is then deposited into his wallet by the bank.`}
          />
          <Collapse
            idcall={"#two"}
            head={"How will mATM services help my business to grow?"}
            id={"two"}
            content={`Consumers don’t need to visit banks or find ATMs to draw cash. They can easily get cash from your shop via mATM service. Moreover, you will earn great commission on every transaction, and an increased customer footfall will also help your business grow further.`}
          />
          <Collapse
            idcall={"#three"}
            head={"How to start micro ATM business with RapiPay?"}
            id={"three"}
            content={`To get a RapiPay agent ID and start your micro ATM business, contact us at 0120-6366034 or meet our sales officer. You should have a physical store and documents like Aadhaar and PAN card. For more information, you can also fill out the Contact Us form and our team will get back to you.`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
