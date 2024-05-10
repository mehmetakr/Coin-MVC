import millify from "millify";
import { FaBitcoin } from "react-icons/fa6";

const Mainpageview = ({ coins ,setpage }) => {
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex gap-3">
        <i>
          <FaBitcoin />
        </i>

        <span> Hoş geldiniz , Coin Listesi</span>
      </h4>

      <p>
        Coin listesi dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>

      <table className="table table-primary table-hover table-responsive  mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th> Market Hacmi </th>
            <th>İşlem Hacmi</th>
            <th>Yüzde Değişim (24s)</th>
          </tr>
        </thead>

        <tbody>
          {coins?.map((coin) => (
            <tr>
              <td>{coin.rank}</td>
              <td>
                <span className="text-danger fw-bold me-2">
                  {" "}
                  ( {coin.symbol} )
                </span>
                <span>{coin.name}</span>
              </td>
              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex align-items-center justify-content-center gap-2 mt-4 p-3">
        <button onClick={() =>     setpage((page)   => page+1) } class="btn"> Daha Fazla</button>
      </div>

      {/*  daha fazla butonu  */}
    </div>
  );
};

export default Mainpageview;
