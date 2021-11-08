var data = [];

const fetchData = () => {

    fetch(
        "https://geo.ipify.org/api/v2/country?apiKey=at_dxe2UUX2g4ZnJF713lp8H70FEtjLt&ipAddress=8.8.8.8"
      )
        .then((res) => res.json())
        .then((res) => {
          data = res;
          console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

}

window.onload = fetchData();