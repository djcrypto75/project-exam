const baseUrl = "https://api.spacexdata.com/v3/";
const historyUrl = `${baseUrl}history`;
const launchesUrl = `${baseUrl}launches/upcoming`;

fetch(historyUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      historyData(json);
   })
   .catch(function (error) {
      console.dir(error);
   });

fetch(launchesUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      launchesData(json);
   })
   .catch(function (error) {
      console.dir(error);
   });
