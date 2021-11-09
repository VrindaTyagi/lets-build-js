var data = [];

const fetchData = () => {

    fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_dxe2UUX2g4ZnJF713lp8H70FEtjLt&ipAddress=122.161.66.63"
      )
        .then((res) => res.json())
        .then((res) => {
          data = res;
          console.log(data);
          const {location} = data;
          newLoc(location.lat, location.lng);
        })
        .catch((err) => {
            console.log(err);
        });

}

window.onload = fetchData();

const newLoc = (lat, lng) => {
  const mymap = L.map('map').setView([lat, lng], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnJpbmRhLXR5YWdpMDkiLCJhIjoiY2t2cTg5eW5tMXdjczJ1bzV6cHF0NzNmcCJ9.mR1IsOMZHMNcWq39Iv1W_g', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

  L.marker([lat, lng]).addTo(mymap);
}



    // var marker = L.marker().addTo(mymap);



