import "../component/Layout.css";

// export function Carousel(props: any) {
//   return (
//     <div className={props.classname} data-bs-interval={props.interval}>
//       <img src={props.img} className="d-block img-fluid w-100" alt="..." />
//       <div className="carousel-captio">
//         <h1 className="">{props.h1}</h1>
//         <p>{props.p}</p>
//       </div>
//     </div>
//   );
// }

export function Twoslides(props: any) {
  return (
    <div className={props.classname}>
      <div className="col-md-6 col-12 first-slide d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={props.img} alt="" />
        <img className="img-fluid" src={props.img1} alt="" />
      </div>
      <div className="col-md-6 col-xl-5 second-slide col-12 px-md-5 px-3 d-flex flex-column justify-content-center">
        <h1>{props.h1}</h1>
        <h5>{props.h5}</h5>
        <li>
          <i className={props.icon}></i>
          {props.li1}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li2}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li3}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li4}
        </li>
        <a className="button" href={props.href}>
          {props.button}
          <i className={props.btnicon}></i>
        </a>
      </div>
    </div>
  );
}

export function Numbers(props: any) {
  return (
    <div className="d-flex flex-wrap justify-content-around text-center numbers">
      <div className="col-lg-3 col-6">
        <h1>600K</h1>
        <p>PayPe Direct Business Outlet</p>
      </div>
      <div className="col-lg-3 col-6">
        <h1>9x</h1>
        <p>Business Growth</p>
      </div>
      <div className="col-lg-3 col-6">
        <h1>30mn</h1>
        <p>Customers Served Every Month</p>
      </div>
      <div className="col-lg-3 col-6">
        <h1>17K</h1>
        <p>Of 19k Pin Codes</p>
      </div>
    </div>
  );
}

export function Fourboxes(props: any) {
  return (
    <div className={props.classname}>
      <h5 className="fw-bold">{props.h5}</h5>
      <p>{props.p}</p>
      <img src={props.img} alt="" />
    </div>
  );
}

export function Topimage(props: any) {
  return (
    <div className="d-flex flex-wrap top-img">
      <div className="col-6 col-lg-3 order-2 order-lg-0">
        <img className="img-fluid" src={props.img1} alt="" />
      </div>
      <div className="col-lg-6  col-12 order-1 order-lg-0">
        <div className="d-flex topimage-text justify-content-center">
          <h1>{props.h1}</h1>
          <h1>{props.h2}</h1>
          <h1>{props.h3}</h1>
        </div>
        <p className="text-center">{props.p1}</p>
      </div>
      <div className="col-6 col-lg-3 order-2 order-lg-0">
        <img className="img-fluid" src={props.img2} alt="" />
      </div>
    </div>
  );
}

export function Parallelogram(props: any) {
  return (
    <div className="text-center d-flex justify-content-center align-items-center">
      <div className="parallelogram col-md-7 col-lg-6 col-sm-9 col-10 mx-auto"></div>
      <h2 className="parallelogram-text">{props.h1}</h2>
    </div>
  );
}

export function Top1image(props: any) {
  return (
    <div className="d-flex flex-wrap top1image">
      <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
        <h1>{props.h1}</h1>
        <div className="d-flex">
          <input
            className="col-8"
            type="number"
            name="number"
            placeholder="Enter your mobile number"
            id=""
          />
          <button className="col">Get Started</button>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src={props.img} alt="" />
      </div>
    </div>
  );
}

export function Collapse(props: any) {
  return (
    <div className="col-md-9 col-11 mx-auto row mx-0 p-0 main-collapse">
      <a href={props.idcall} className="a-collapse" data-bs-toggle="collapse">
        {props.head}
        <span className="accicon">
          <i className="fas fa-angle-down rotate-icon"></i>
        </span>
      </a>
      <div id={props.id} className="collapse">
        {props.content}
      </div>
    </div>
  );
}

export function Circle(props: any) {
  return (
    <div className="box">
      <img src={props.img} className="img-fluid" alt="services" />
      <h6>{props.h6}</h6>
    </div>
  );
}
