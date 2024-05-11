import Model from "../models/Detailmodel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detailview from "../views/Detaiview";
const Detailcontroller = () => {
  // Detay sayfası yapabilmemiz için şu adımları yapacağız


const [coin ,setcoin] = useState(null);

  // 1 ) url'den id yi al

  const { id } = useParams();

  //  2 ) coin in detay verilerini ve fiyat geçmişini al

  useEffect(() => {
    Model.getcoin(id).then((res) =>setcoin((res))), [];
  },[]);


  const model = new Model(coin);
  return <div> 


    <Detailview model={model}/>
  </div>;
};

export default Detailcontroller;
