class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.dismissed = false;
  }

  getInfo() {
    return `Студент університету ${this.university}, ${this.course}-ого курсу, ${this.fullName}.`;
  }
  set setMarks(mark) {
    if (this.dismissed === false) {
      this.marks.push(mark);
    }
  }
  get getMarks() {
    return this.dismissed ? null : this.marks;
  }
  getAverageMark() {
    return this.dismissed ? null : this.marks.reduce((acc, e) => acc + e) / this.marks.length;
  }
  dismiss() {
    this.dismissed = true;
  }
  recover() {
    this.dismissed = false;
  }
}

const Oleh = new Student('Політехніка', '4', 'Юрій Іванович', [1, 3, 5, 1, 4]);
console.log(Oleh.getInfo());
Oleh.setMarks = 1;
console.log(`Оцінки: [${Oleh.getMarks}]`);
console.log(`Середній бал: ${Oleh.getAverageMark()}`);

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setTimeout(() => this.getScholarship(), 3000);
  }
  getScholarship() {
    if (this.getAverageMark() >= 4) {
      console.log('Ви отримали 1400 грн. стипендії');
    } else console.log('Ваш середній бал менше 4 і ви не отримуєте стипендію');
  }
}
const Ivan = new BudgetStudent('Івана Франка', 2, 'Петрик Іван', [5, 4]);
console.log(`Оцінки: [${Ivan.getMarks}]`);
console.log(`Середній бал: ${Ivan.getAverageMark()}`);
console.log(Ivan.getInfo());
