let params = {
  city: 'Cairo',
  country: 'Egypt'
};

axios.get('https://api.aladhan.com/v1/timingsByCity', {
  params: params
})
.then(function (response) {
    const timings = response.data.data.timings;
    document.getElementById('fajar-time').innerHTML = timings.Fajr;
    document.getElementById('shrook-time').innerHTML = timings.Sunrise;
      document.getElementById('duher-time').innerHTML = timings.Dhuhr;

      document.getElementById('asr-time').innerHTML = timings.Asr;
      document.getElementById('maghreb-time').innerHTML = timings.Maghrib;
      document.getElementById('ishaa-time').innerHTML = timings.Isha;
      const date = response.data.data.date.readable;

      const weekday = response.data.data.date.hijri.weekday.en;
     
             document.getElementById('current-date').innerHTML = weekday + "    " + " - " + date;

  console.log(response.data.data.timings);
})

.catch(function (error) {
  console.log(error);
})
.finally(function () {
  // always executed
});
