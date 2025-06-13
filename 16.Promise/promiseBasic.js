const prom = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is java script");
    resolve();
  }, 1000);
});

prom
  .then(() => console.log("succuess"))
  .catch(() => console.log("this is on error"))
  .finally(function () {
    console.log("this is finally block");
  });

const errorprom = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("================");
    console.log("this is error java script");
    reject();
  }, 1000);
});

errorprom
  .then(() => console.log("succuess"))
  .catch(() => console.log("this is on error"))
  .finally(function () {
    console.log("this is finally block");
  });
