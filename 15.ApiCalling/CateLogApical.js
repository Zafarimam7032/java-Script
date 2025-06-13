function getAllCateLog() {
  console.log("this is get all api call");

  const getCatelog = new XMLHttpRequest();
  getCatelog.open("GET", "http://localhost:9091/catelog/v1/get/all");

  getCatelog.onreadystatechange = function () {
    try {
      if (getCatelog.readyState == 4) {
        console.log(getCatelog.readyState);
        const res = getCatelog.response;
        console.log(res);
        const jsonResponse = JSON.parse(res);
        console.log(jsonResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getCatelog.send();
}
getAllCateLog();

function getCaltelogByName(catelogName) {
  console.log("this is getCalelogByName");

  const request = new XMLHttpRequest();
  request.open("GET", `http://localhost:9091/catelog/v1/get/${catelogName}`);
  request.onreadystatechange = function () {
    console.log(request.readyState);
    try {
      if (request.readyState == 4) {
        const response = JSON.parse(request.response);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  request.send();
}
getCaltelogByName("men");
