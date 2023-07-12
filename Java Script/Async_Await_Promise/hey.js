// let f1 = () => {
//   console.log("apple");
// };
// let f2 = () => {
//   console.log("mango");
// };
// let f3 = () => {
//   console.log("banana");
// };
// f1()
// f2()
// f3()

// let f1 = () => {
//   console.log("Apple");
// };
// let f2 = () => {
//   console.log("mango");
//   f1();
// };
// let f3 = () => {
//   console.log("banana");
//   f2();
// };
// f3();

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("cloudy");
//     }, 500);
//   });
// }

//*************************************************************************

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("hot as hell");
          break;
        case "rainy":
          resolve("pouring as hell");
          break;
        case "cloudy":
          resolve("dark as hell");
          break;
        default:
          reject("no weather voi");
      }
    }, 500);
  });
}

// let onSuccess = (data) => {
//   console.log("Success : ${data}");
// };
// let onError = (Error) => {
//   console.log("Success : ${Error}");
// };

getWeather().then(getWeatherIcon).then(onSuccess, onError);
console.log(getWeather());

// function Football() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("bFC");
//     }, 2000);
//   });
// }

// function getTeams(Teams) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       switch (Teams) {
//         case "BFC":
//           resolve("Bengaluru FC");
//           break;
//         case "KBFC":
//           resolve("Kerala Blasters FC");
//           break;
//         case "MBSG":
//           resolve("Mohun Bagan Super Giants");
//           break;
//         default:
//           reject("no teams");
//       }
//     }, 1000);
//   });
// }

// let onSuccess = (data) => {
//   console.log("Success : ${data}");
// };
// let onError = (error) => {
//   console.log("Error : ${error}");
// };

// Football().then(getTeams).then(onSuccess, onError);
// console.log(Football());

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(
//         "https://api.openweathermap.org/data/2.5/weather?lat=12.9588&lon=77.6160&appid={API key}"
//       ).then((response) => response.json().then((data) => resolve(data)));
//     }, 2000);
//   });
// }

// function displayData(weather) {
//   console.log(weather);
// }

// getWeather().then(displayData);


                                     