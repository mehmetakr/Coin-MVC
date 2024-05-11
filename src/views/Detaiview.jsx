import millify from "millify";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line ,Bar } from "react-chartjs-2";
const Detailview = ({ model }) => {
  return (
    <div>
      <h3 className=" col-md-3 d-flex align-items-center justify-content-center gap-3">
        <span> {model.coin?.detail.symbol} </span>
        <span className="text-warning"> {model.coin?.detail.name} </span>
      </h3>
      <div>
        <div className="row">
          <section className=" col md-3 d-flex bg-light flex-column md-4 p-5 gap-3">
            {model?.infofield?.map((data) => (
              <div className=" text-center  text-bg-light rounded shadow-lg  gap-4   p-5">
                <span className="fs-2">{data.icon}</span>
                <h4>{data.label}</h4>
                <p className="fw-bold">{millify(data.value)}</p>
              </div>
            ))}
          </section>

          <section className="cold-md-9 d-flex flex-column gap-5">
            <Line data={model.chartdata} />
            <Bar data={model.chartdata}/>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Detailview;
