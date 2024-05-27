import "./Bars.css";


function Bars({itemD}) {
  
  return (
    <div className="barswrapper">
        <div>
          <div className="heading-wrapper">
            <p className="bars-heading">{itemD.category}</p>
            <p className="desc">Short Description</p>
            <p className="barYear">Q2 20YY</p>
          </div>
          {/* <div className="barContainer"> */}
          <div className="bar" style={{ height: `80px` }}>
            <div className="bar-circle">01</div>
          </div>
          <div className="bar-bottom"></div>
        </div>


      {/* </div> */}
    </div>
  );
}

export default Bars;
