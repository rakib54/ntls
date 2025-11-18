## TypeScript-এ Interfaces এবং Types-এর মধ্যে পার্থক্য

### Interfaces:

Declaration Merging: একই নামের একাধিক interface declare করলে তারা automatically merge হয়ে যায়
Extension: extends keyword ব্যবহার করে অন্য interface থেকে inherit করতে পারে
Object-oriented: মূলত object এবং class এর জন্য ডিজাইন করা

#### Example

    interface User {
        name: string;
    }

    interface User {
        age: number;
    }

    const user: User = {
        name: "Rakib",
        age: 25
    };

### Types:

Union Types: Multiple types একসাথে combine করতে পারে

Computed Properties: Dynamic property names support করে

Primitive Types: String, number, boolean ইত্যাদি primitive types define করতে পারে

    type Status = "pending" | "approved" | "rejected";

    type UserInfo = {
        name: string;
        status: Status;
    };

## TypeScript-এ keyof Keyword এর ব্যবহার

#### keyof operator একটি object type এর সব property names কে union type হিসেবে extract করে। এটি type safety নিশ্চিত করতে খুবই কার্যকর।

    interface Student {
        name: string;
        age: number;
        grade: string;
        subjects: string[];
    }

    // keyof Student = "name" | "age" | "grade" | "subjects"
    type StudentKeys = keyof Student;

    function getStudentProperty(student: Student, key: StudentKeys) {
        return student[key];
    }

    const student: Student = {
        name: "Tamim",
        age: 26,
        grade: "A+",
        subjects: ["Bangla", "Math"]
    };

    const studentName = getStudentProperty(student, "name"); // "Tamim"
    const studentAge = getStudentProperty(student, "age");   // 26


    function updateStudent<K extends keyof Student>(
        student: Student,
        key: K,
        value: Student[K]
        ): Student {
        return {
            ...student,
            [key]: value
        };
        }

        // Type-safe updates
        const updatedStudent = updateStudent(student, "grade", "A++");
        const updatedAge = updateStudent(student, "age", 17);
