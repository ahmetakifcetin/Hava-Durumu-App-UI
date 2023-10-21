const apiKey = ""; //API Keyinizi (Kimseyle Paylaşmayınız.)
const apiUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"; //Lokasyon ID hava durumu sayfasından alabilirsiniz 5 Günlük API için önrek kullanım 

//API' ye GET isteği gönderme

fetch(apiUrl, {
    method: "GET",
    headers: {
        "Authorization":  `Bearer ${apiKey}`,
    },
})

    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    }) //API' den veri alma
    .cath((error) => {
        console.error("Hata oluştu, API Alınamadı" + error); //API girilen bilgiler hatalıysa ya da bilgi alınamadıysa hata verir
    });
    