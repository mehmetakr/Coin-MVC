// Veri ile ilgili her türlü işlemi model içerisinde yapıyoruz..

import axios from "axios";

// anasayfanın model katmanı
export default class Mainpagemodel {

    // veriyi alan model katmanı  
  static async getCoins(page) {

const options ={

    params: {

        limit: "15",
        offset: ( page-1 ) * 15,  // kac tane veri atlanacak 
    }
}


    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", options);

return res.data.data;

} catch (err) {
      console.log(err);
    }
  }
}
