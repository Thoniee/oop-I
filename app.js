class Student {
    constructor(name, className, age) {
      this.name = name;
      this.className = className;
      this.age = age;
    }
  }
  
  class StudentPortal {
    constructor() {
      this.students = [];
    }
  
    register(name, className, age) {
      const newStudent = new Student(name, className, age);
      this.students.push(newStudent);
      console.log(`${name} has been registered successfully.`);
      this.displayStudents();
    }
  
    unregister(name) {
      const initialLength = this.students.length;
      this.students = this.students.filter(student => student.name !== name);
      
      if (this.students.length < initialLength) {
        console.log(`${name} has been unregistered successfully.`);
      } else {
        console.log(`${name} was not found in the student portal.`);
      }
      this.displayStudents();
    }
  
    displayStudents() {
      const studentList = document.getElementById('studentList');
      studentList.innerHTML = '';
      
      this.students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `Name: ${student.name}, Class: ${student.className}, Age: ${student.age}`;
        studentList.appendChild(li);
      });
    }
  }
  
  // Create an instance of StudentPortal
  const portal = new StudentPortal();
  
  // Event listener for the registration form
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const age = document.getElementById('age').value;
    
    portal.register(name, className, parseInt(age));
    
    // Clear the form
    this.reset();
  });
  
  // Event listener for the unregistration form
  document.getElementById('unregistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('unregisterName').value;
    
    portal.unregister(name);
    
    // Clear the form
    this.reset();
  });