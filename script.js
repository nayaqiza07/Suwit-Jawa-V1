let tanya = true;
while (tanya) {
  // todo ambil nilai player
  let p = prompt("pilih : gajah, orang, semut");

  // todo ambil nilai komputer
  // todo pilihan random dari komputer
  let comp = Math.random();
  console.log(comp);
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // todo rules permainan
  let hasil = "";
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "Menang";
    // } else {
    //   hasil = "Kalah";
    // }

    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "Kalah" : "Menang";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah" : "Menang";
  } else {
    hasil = "Memasukkan pilihan yang salah";
  }

  // todo Tampilkan Hasilnya
  if (p == "gajah" || p == "orang" || p == "semut") {
    alert(
      "Kamu memilih       : " +
        p +
        "\nkomputer memilih : " +
        comp +
        "\nKamu " +
        hasil +
        "!!!"
    );
  } else {
    alert(
      "Kamu memasukkan pilihan yang salah" +
        "\nPilihannya yaitu : gajah, orang, semut."
    );
  }

  tanya = confirm("Lagi nggak?");
}

alert("Terimakasih sudah bermain");
