import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdBorderColor, MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
export default class Detailmodel {
  constructor(coin) {
    this.coin = coin;

    // ekran basılıcak kutuların verilerini hazırla

    this.infofield = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <FaPercent />,
        label: " 24s değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim ",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];


      // fiyat geçmişini grafik kütüphanesinin istediği formata çevirelim..

/*       console.log(coin.history);
 */    this.chartdata= {
      
        labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
        datasets: [
          {
            id: 1,
            label: '',
            borderColor:"green",
            backGroundColor:"yelow",
            data: coin?.history.map((i) => i.priceUsd)
          }, 
    ],
    };
    }

  
  // apiden hem detay hem fiyat geçmişini hazırla
  static async getcoin(id) {
    // id değerlerini alarak  detay verilerini alıyoruz
    const detailres =  await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    // fiyat geçmişini al

    const historyres = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    // verileri fonksiyonun çağrıldıgı yere döndür..

    return {
      detail: detailres.data.data,
      history: historyres.data.data,
    };
  }
}
