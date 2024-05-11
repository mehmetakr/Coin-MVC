import React from "react";
import millify from "millify";
import { Navigate, useNavigate } from "react-router-dom";
const Cardview = ({ data  }) => {

const navigate=useNavigate(); 

  return (
    <div  onClick={() => navigate(`/coin/${data.id}`)} className=" coincard  d-flex  flex-column align-items-center  border rounded  p-5  radius-4  flex-direction-column gap-3">
      <div  onClick={(() => {})}>
        <h4>{data.name}</h4>
        <h6 className="d-flex justify-content-center">{data.symbol}</h6>
        <h6 className="d-flex justify-content-center">{millify(data.priceUsd)}</h6>
      </div>

      <div>
        <span>Günlük değişim </span>
        <span  className={data.changePercent24Hr >=0  ? "ap" : "dow"}>%{Number(data.changePercent24Hr).toFixed(3)} 

          <p ></p>
        </span>
      </div>
    </div>
  );
};

export default Cardview;
