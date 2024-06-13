// Создайте класс «Сотрудник» со свойствами имени и зарплаты. Включите метод расчета
// годовой зарплаты. Создайте подкласс под названием «Менеджер», который
// наследуется от класса «Сотрудник» и добавляет дополнительное свойство для
// отдела. Переопределить метод расчета годовой зарплаты, чтобы включить бонусы
// для менеджеров. Создайте два экземпляра класса «Менеджер» и рассчитайте их годовую
// зарплату

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getYearSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getYearSalary() {
    const bonus = 1000;
    return super.getYearSalary() + bonus;
  }
}

const manager1 = new Manager('Alice', 2000, 'marketing');
const manager2 = new Manager('Bob', 4000, 'IT');

console.log(manager1.getYearSalary());
console.log(manager2.getYearSalary());
