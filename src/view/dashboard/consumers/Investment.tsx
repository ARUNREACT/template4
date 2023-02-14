import { Parallelogram, Topimage, Twoslides } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Investment() {
  return (
    <div className="main consumers">
      <Header />
      <div className="mainpagehead">
        <Topimage
          img1={
            "https://cdn3d.iconscout.com/3d/premium/thumb/save-money-5979434-4936473.png"
          }
          h1={`Invest. `}
          h2={`Earn. `}
          h3={`Repeat.`}
          p1={"start investing now for a secured future."}
          img2={
            "https://static.vecteezy.com/system/resources/previews/009/456/739/original/3d-illustration-colorful-money-down-candlestick-chart-png.png"
          }
        />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://cdn3d.iconscout.com/3d/premium/thumb/giving-euro-coin-4831438-4018502.png"
          h1={`Grow and multiply your money`}
          icon={"fa fa-check"}
          li1={`Navigate flawlessly with just a click`}
          li2={`Intuitive Interface: Easy dashboard`}
          li3={`Track & optimize your investments`}
          li4={`Explore multiple investment options with ease`}
        />
        <Parallelogram h1={"Control and Customize your portfolio."} />

        <Twoslides
          classname={"col-11 col-xl-10  mx-auto two-slides-one"}
          img1="https://static.vecteezy.com/system/resources/previews/011/345/053/original/business-people-managing-finances-and-investments-3d-character-illustration-png.png"
          h1={`One App,Many investment options.`}
          icon={"fa fa-check"}
          li1={`IPOs or Buy Equity`}
          li2={`Start SIP or invest in FD`}
          li3={`Easy Portfolio Management`}
          li4={`Build your portfolio with our PMS`}
        />
      </div>
      <Footer />
    </div>
  );
}
