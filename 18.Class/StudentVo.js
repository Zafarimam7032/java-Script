class StudentVo {
  constructor(studentid, studentName, address) {
    this.studentid = studentid;
    this.studentName = studentName;
    this.address = address;
  }

  set studentid(studentId) {
    this._studentid = studentId;
  }
  get studentid() {
    return this._studentid;
  }

  set studentName(studentName) {
    this._studentName = studentName;
  }

  get studentName() {
    return this._studentName;
  }

  set address(address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }
}

let studentObject = new StudentVo();
console.log(studentObject);
studentObject.studentid = "23322";
studentObject.studentName = "zafar Imam";
studentObject.address = "Pune";
console.log(studentObject);
