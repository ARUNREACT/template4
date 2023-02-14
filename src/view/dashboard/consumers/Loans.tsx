import { Parallelogram, Topimage, Twoslides } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Loans() {
  return (
    <div className="main consumers">
      <Header />
      <div className="mainpagehead">
        <Topimage
          img1={
            "https://static.vecteezy.com/system/resources/previews/014/386/099/original/briefcase-money-suitcase-with-money-3d-illustration-png.png"
          }
          h1={`Digital. `}
          h2={`Flexible. `}
          h3={`Affordable.`}
          p1={"Give wings to your dreams with our loans"}
          img2={
            "https://cdn3d.iconscout.com/3d/premium/thumb/money-bag-5191982-4334772.png"
          }
        />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/giving-euro-coin-4831438-4018502.png"
          h1={`Personal Loans for any Purpose.`}
          icon={"fa fa-check"}
          li1={`Flexi Loans as per requirement`}
          li2={`Tech Driven and Electronic Partner Model`}
          li3={`Check your Credit Score`}
          li4={`Loans upto INR 5 Lakhs`}
        />
        <Parallelogram h1={"Smarter loans for a Smarter You."} />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://static.vecteezy.com/system/resources/previews/011/345/053/original/business-people-managing-finances-and-investments-3d-character-illustration-png.png"
          h1={`Business Loans for growth and expansion`}
          icon={"fa fa-check"}
          li1={`Superfast processing and disbursal`}
          li2={`Loan Eligibility against Alternate Data`}
          li3={`For Working Capital and other business needs`}
          li4={`Strong Focus on Micro Segment`}
        />
      </div>
      <Footer />
    </div>
  );
}
