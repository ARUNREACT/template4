import {
  Address,
  Agent,
  Circle,
  Collapse,
  Form,
  Fourboxes,
  Numbers,
  Parallelogram,
  Testimonial,
  Top1image,
  Twoslides,
} from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Anagent() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead dbos">
        <Top1image
          h1={`Become a RapiPay Direct Business Outlet (Agent)`}
          img={require("../../../asset/sample1/man.png")}
        />

        <div className="d-flex p-3 align-items-center justify-content-center py-5  bg-white">
          <img
            className="img-fluid my-5"
            src="http://videokyc.co.in/assets/images/flow-chart1.png"
            alt=""
          />
        </div>

        <div className="dbos-twoslide">
          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            We are an RBI (PPI) License Holder Company.
          </h2>

          <Twoslides
            classname={"col-11 col-xl-10  mx-auto two-slides-one"}
            img1="https://cdn3d.iconscout.com/3d/premium/thumb/employee-doing-digital-marketing-4754567-3973313.png"
            h1={`Make your shop an ATM with RapiPay Micro ATM`}
            h5={`Grow your business by providing ATM cash withdrawal services at your outlet.`}
            icon={"fa fa-check"}
            li1={`Micro ATM and MPOS in a single device`}
            li2={`Stable Income with more customer footfall`}
            li3={`Affordable device. Best Commission`}
            li4={`Stable Income  footfall`}
            href={"/microatm"}
            button={"Know More"}
            btnicon={"fa-solid fa-chevron-right"}
          />

          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            We are an RBI (PPI) License Holder Company.
          </h2>

          <Twoslides
            classname={"col-11 col-xl-10  mx-auto two-slides-one"}
            img1="https://biznext.in/images/Aadhaar-Enabled-Payment-Services-(AEPS).png"
            h1={`Aadhaar Enabled Payment System (AEPS)`}
            h5={`Provide cash withdrawal services whether you are a Kirana store, General store, Mobile shop or any Retailer.`}
            icon={"fa fa-check"}
            li1={`Free AEPS ID with RapiPay onboarding`}
            li2={`Best commission`}
            li3={`Make your shop an ATM and grow your business`}
            li4={`Stable Income  footfall`}
            href={"/aeps"}
            button={"Know More"}
            btnicon={"fa-solid fa-chevron-right"}
          />

          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            A leading player in Assisted Payments.
          </h2>

          <Twoslides
            classname={"col-11 col-xl-10  mx-auto two-slides-one"}
            img1="https://cdn3d.iconscout.com/3d/premium/thumb/bank-3732321-3121303.png"
            h1={`Domestic Money Transfer (DMT)`}
            h5={`RapiPay DMT services make you a complete banking and financial service provider for your customers.`}
            icon={"fa fa-check"}
            li1={`Send money to any bank in India and Nepal`}
            li2={`Real time transaction`}
            li3={`Secure and Encrypted Network`}
            li4={`Stable Income  footfall`}
            href={"/dmt"}
            button={"Know More"}
            btnicon={"fa-solid fa-chevron-right"}
          />
          <br />
          <Twoslides
            classname={"col-11 col-xl-10  mx-auto two-slides-one"}
            img1="https://cdn3d.iconscout.com/3d/premium/thumb/bill-payment-6463316-5728563.png"
            h1={`Bills and Utility Payments`}
            h5={`Become a one stop destination for bills and utility payments. Fulfill your customers bill payment needs with BBPS.`}
            icon={"fa fa-check"}
            li1={`Pay multiple bills from a single portal or App`}
            li2={`Electricity, Gas, Mobile, DTH and many more`}
            li3={`Increase your customer retention`}
            li4={`Stable Income  footfall`}
            href={"/payments"}
            button={"Know More"}
            btnicon={"fa-solid fa-chevron-right"}
          />

          <h2 className="text-center fw-bold col-11 col-lg-10 mx-auto p-3">
            Fastest growing fintech company.
          </h2>

          <Twoslides
            classname={"col-11 col-xl-10  mx-auto two-slides-one"}
            img1="https://cdn3d.iconscout.com/3d/premium/thumb/money-transfer-6929798-5686169.png"
            h1={`Insurance Services`}
            h5={`Using RapiPay’s Agent Portal, provide consumers with various types of Insurance Services such as Vehicle, Hospicash, Covid, Travel, and more.`}
            icon={"fa fa-check"}
            li1={`Premium starting at Rs 99*/-`}
            li2={`Wide Suite of Insurance Services`}
            li3={`Secure and Encrypted Network`}
            li4={`Incremental Growth with Better Returns`}
            href={"/insurances"}
            button={"Know More"}
            btnicon={"fa-solid fa-chevron-right"}
          />
        </div>
        <Numbers />

        <div>
          <h1 className="text-center fw-bold display-3">Testimonials</h1>

          <div className="d-flex col-lg-11 mx-auto justify-content-around retail ">
            {/* <div className="col-md-3 col-12 text-center"> */}
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />{" "}
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />{" "}
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />{" "}
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />{" "}
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2022/12/Gayatri-Devi%E2%80%8B.png"
              }
              h5={`​Gayatri Devi​`}
              h6={"Haryana"}
              p={`BBPS is in high demand. My shop is a popular shop because of all kinds of bills and recharge services. Thanks to RapiPay​​`}
            />
          </div>

          <div className="d-flex col-lg-11 mx-auto justify-content-around banking my-4 py-4">
            <Testimonial
              img={"https://in.rapipay.com/wp-content/uploads/2023/01/npci.jpg"}
            />
            <Testimonial
              img={"https://in.rapipay.com/wp-content/uploads/2023/01/nsdl.jpg"}
            />
            <Testimonial
              img={"https://in.rapipay.com/wp-content/uploads/2022/12/cli4.jpg"}
            />
            <Testimonial
              img={"https://in.rapipay.com/wp-content/uploads/2022/12/cli2.jpg"}
            />
            <Testimonial
              img={"https://in.rapipay.com/wp-content/uploads/2022/12/cli1.jpg"}
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2023/01/icici.jpg"
              }
            />
            <Testimonial
              img={
                "https://in.rapipay.com/wp-content/uploads/2023/01/airtel.jpg"
              }
            />
          </div>
        </div>
        <Address />
        <Form />
      </div>
      <Footer />
    </div>
  );
}
