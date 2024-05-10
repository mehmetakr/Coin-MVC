// yuptaki tum fonksiyonları import etmemız lazım

import * as yup from "yup";
// valıidasyon şeması
// formdaki inputları geçerli olması için  gerekli koşulları tanımladıgımız yapı

// bir input alanının zorunluluklarını belirtirken ilk çağırmamız gereken fonksiyonun veri tipi olmalı
export const schema = yup.object().shape({
  // email çin zorunlulukları belirle
  email: yup
    .string()
    .email("Geçerli bir email formatı giriniz.")
    .required("Zorunlu alan "),
  // yaş  için zorunlulukları belirle
  age: yup
    .number("Geçerli bir sayı giriniz")
    .required("Zorunlu alan  ")
    .integer("Yaşınız bir tam sayı olmalı")
    .min(18, "Yaşınız minimum 18 olmalı")
    .max(100, "Yaşınız maksimum 100 olmalı"),

  // Şifre alanı için zorunluluklar.

  password: yup
    .string()
    .min(5, "minimum 5 karakter girilmelidir.")
    .required("Zorunlu alan"),

    confirmpassword: yup
    .string()
    .min(5, "Minimum 5 karakter girilmeli")
    .required("Zorunlu alan.")
    // oneOf inputtaki veri verdiğimiz dizideki verilerden birisiyle eşleşiyormu diye kontrol ediyoruz
    .oneOf(['selam', 'merhaba'])
    .oneOf([yup.ref("password")])
    .required("Zorunlu alan "),
});
