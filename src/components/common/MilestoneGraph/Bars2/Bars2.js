import "./Bars2.css";


function Bars2({itemD}) {
  
  return (
    <div className="bars2wrapper">
        <div>
          <div className="heading2-wrapper">
            <p className="bars2-heading">{itemD.category}</p>
            <p className="desc2">Short Description</p>
            <p className="bar2Year">Q2 20YY</p>
          </div>
          {/* <div className="barContainer"> */}
          <div className="bar2" style={{ height: '250px' }}>
            <div className="bar2-circle">01</div>
          </div>
          <div className="bar2-bottom"></div>
        </div>


      {/* </div> */}
    </div>
  );
}

export default Bars2;
