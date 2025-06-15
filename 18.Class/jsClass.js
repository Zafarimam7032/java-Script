class Student {
  constructor(studentId, collegeName, address) {
    this.studentId = studentId;
    this.collegeName = collegeName;
    this.address = address;
  }

  display() {
    console.log(this.studentId);
    console.log(this.collegeName);
    console.log(this.address);
  }
}

let object = new Student("abcd", "JNTUH", "Hyderabad");
object.display();
