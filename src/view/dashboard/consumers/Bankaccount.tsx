import { Parallelogram, Topimage, Twoslides } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Bankaccount() {
  return (
    <div className="main consumers">
      <Header />
      <div className="mainpagehead">
        <Topimage
          img1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/money-transactions-3980356-3297234.png"
          }
          h1={`Simple.`}
          h2={`Smart. `}
          h3={`Secure.`}
          p1={"one platform for all your banking needs."}
          img2={
            "https://static.vecteezy.com/system/resources/previews/013/167/050/original/bank-3d-illustration-free-png.png"
          }
        />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/online-banking-system-6929805-5686176.png"
          h1={`Savings Account`}
          icon={"fa fa-check"}
          li1={`Saving accounts with RBI licensed Banks`}
          li2={`Instant paperless Account opening`}
          li3={`Upto 6.5% interest rate on your savings`}
          li4={`Features like Digital Payments, Fund transfers, etc`}
        />
        <Parallelogram h1={"Smarter Banking. Smarter You."} />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-payment-6929797-5686168.png"
          h1={`Current Account`}
          icon={"fa fa-check"}
          li1={`Account Opening within minutes for leading banks`}
          li2={`Higher Cash deposit and withdrawal limits`}
          li3={`Easy Searchable Transactions`}
          li4={`Attractive loan offers`}
        />
      </div>
      <Footer />
    </div>
  );
}
