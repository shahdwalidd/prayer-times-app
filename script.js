const cityMap = {
  "Cairo": "Egypt",
  "Alexandria": "Egypt",
  "Aswan": "Egypt",
  "London": "United Kingdom"
};


const citySelect = document.getElementById("city");
for (let city of Object.keys(cityMap)) {
  let option = document.createElement("option");
  option.text = city;
  option.value = city;
  citySelect.add(option);
}

citySelect.addEventListener("change", function () {
  const selectedCity = this.value;
  if (selectedCity) {
    gettimingsForCity(selectedCity, cityMap[selectedCity]);
  }
});

function gettimingsForCity(cityName, countryName) {
  axios.get("https://api.aladhan.com/v1/timingsByCity", {
    params: { city: cityName, country: countryName }
  })
  .then(response => {
    const timings = response.data.data.timings;
    document.getElementById("fajar-time").innerHTML = timings.Fajr;
    document.getElementById("shrook-time").innerHTML = timings.Sunrise;
    document.getElementById("duher-time").innerHTML = timings.Dhuhr;
    document.getElementById("asr-time").innerHTML = timings.Asr;
    document.getElementById("maghreb-time").innerHTML = timings.Maghrib;
    document.getElementById("ishaa-time").innerHTML = timings.Isha;

    const date = response.data.data.date.readable;
    const weekday = response.data.data.date.hijri.weekday.en;
    document.getElementById("current-date").innerHTML = `${weekday} - ${date}`;

    console.log(timings);
  })
  .catch(error => console.log(error));
}

// عرض القاهرة افتراضيًا
gettimingsForCity("Cairo", "Egypt");
