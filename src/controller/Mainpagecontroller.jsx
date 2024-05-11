import Mainpageview from "../views/Mainpageview";
import model from "../models/Manpagemodel";
import { useEffect, useState } from "react";
const Mainpagecontroller = () => {

const [coins, setcoins] = useState([]);

const [page ,setpage] = useState(1);
  useEffect(() => {

        // concat da splitde bir birleştirme operatörüdür.. biz diziyi diğer diziye ekler
    model.getCoins(page).then((data) => setcoins(coins.concat(data)));

  },[page]);


  return <Mainpageview coins={coins} setpage={setpage} />;
};
export default Mainpagecontroller;
