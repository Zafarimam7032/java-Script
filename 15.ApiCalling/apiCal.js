const div = document.getElementById("ap");
console.log(div);

function apiCall() {
  let apirequest = new XMLHttpRequest();
  apirequest.open("GET", "http://localhost:9091/catelog/v1/get/all");

  apirequest.onreadystatechange = function () {
    console.log("api call started");
    if (apirequest.readyState == 4) {
      const response = apirequest.responseText;
      const res = JSON.parse(response);
      console.log(res[0]);
      console.log(res[0].categoryName);
      div.innerHTML = res[0].categoryName;
    }
    console.log("api call started");
  };
  apirequest.send();
}
apiCall();

function postApiCall() {
  let apirequest = new XMLHttpRequest();
  apirequest.open("POST", "http://localhost:9091/catelog/v1/add/category");

  apirequest.setRequestHeader("Content-Type", "application/json");

  apirequest.onreadystatechange = function () {
    if (apirequest.readyState == 4) {
      console.log("post call completed");
    }
  };

  const resquestData = {
    categoryName: "Men",
    description: "men category",
    date: "2022-05-29T08:17:34.899Z",
    userName: "zafar",
  };
  apirequest.send(resquestData);
}

postApiCall();
