import Mainpageview from "../views/Mainpageview";
import model from "../models/Manpagemodel";
import { useEffect, useState } from "react";
const Mainpagecontroller = () => {

const [coins, setcoins] = useState([]);

const [page ,setpage] = useState();
  useEffect(() => {
    model.getCoins(page).then((data) => setcoins(data));

  },[page]);


  console.log(coins);
  return <Mainpageview coins={coins} setpage={setpage} />;
};
export default Mainpagecontroller;
