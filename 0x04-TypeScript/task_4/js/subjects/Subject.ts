
/// <reference path="./Teacher.ts" />
"setTeacher(teacher:Teacher)"
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

