let studentVo = {
  studentname: "zafar imam",
  college: "malla reddy college of engineering",
  mobileNumber: "+1234567890",

  dis: function () {
    console.log(this);
  },
};

studentVo.mobileNumber = "28487892892";
studentVo.dis();
console.log(this);

let employeeVo = {
  name: "zafar imam",

  show: function () {
    console.log(this);
    this.name = "neeraj Kumar";
    console.log(this);
  },
};

employeeVo.show();
