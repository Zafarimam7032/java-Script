const fetchResponse = fetch("http://localhost:9091/catelog/v1/get/all");

fetchResponse
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
const postFetch = fetch("http://localhost:9091/catelog/v1/add/category", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    categoryName: "beauty",
    description: "beauty category",
    date: "2022-05-29T08:17:34.899Z",
    userName: "zafar",
  }),
});

postFetch
  .then((response) => {
    if (response.ok) {
      console.log("Post call completed successfully");
    } else {
      console.log("Post call failed with status:", response.status);
    }
  })
  .catch((error) => {
    console.log("Error in post call:", error);
  });
