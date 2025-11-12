// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Remote work enabled";
  }

  getCoffeeBreak(): string {
    return "Coffee break granted";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Remote work not permitted";
  }

  getCoffeeBreak(): string {
    return "Break not allowed";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Factory function
function createEmployee(salary: number | string): Director | Teacher {
  const isLowSalary = typeof salary === "number" && salary < 500;
  return isLowSalary ? new Teacher() : new Director();
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Dispatcher function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ✅ Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
