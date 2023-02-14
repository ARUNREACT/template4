import { Parallelogram, Topimage, Twoslides } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Payments() {
  return (
    <div className="main consumers">
      <Header />
      <div className="mainpagehead">
        <Topimage
          img1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/mobile-banking-6020071-4974990.png"
          }
          h1={`Seamless.`}
          h2={`Simple. `}
          h3={`Swift.`}
          p1={"Easing payments, one click at a time"}
          img2={
            "https://cdn3d.iconscout.com/3d/premium/thumb/dollar-swipe-machine-5680179-4731358.png"
          }
        />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/online-banking-system-6929805-5686176.png"
          h1={`Bills & Utility Payments`}
          h5={`Brings you the convenience of making hassle-free payments of utility bills in a single app.`}
          icon={"fa fa-check"}
          li1={`Manage Multiple Bank Account for Bill Payments`}
          li2={`Seamless Mobile Banking Payment Experience`}
          li3={`Flexible Bill Payment Options for DTH, Mobile, Electricity, etc`}
          li4={`Bill Payments using UPI, Wallet or your Bank Account`}
        />
        <Parallelogram h1={"Hassle-free Payments for You."} />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-payment-6929797-5686168.png"
          h1={`BHIM and UPI Payments:`}
          h5={`BHIM & UPI Payments enable fast, secure, and reliable payment solutions.`}
          icon={"fa fa-check"}
          li1={`Scan and Pay using QR Code`}
          li2={`UPI Money Transfer to Any Bank Account`}
          li3={`UPI AutoPay for Recurring Payments`}
          li4={`Earn Multiple Reward Points`}
        />
      </div>
      <Footer />
    </div>
  );
}
