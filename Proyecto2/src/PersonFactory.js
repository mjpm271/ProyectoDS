class Person {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

class Student extends Person {
    constructor(id, name) {
        super(id, name, 'Student');
    }
}

class Professor extends Person {
    constructor(id, name) {
        super(id, name, 'Professor');
    }
}

class Admin extends Person {
    constructor(id, name) {
        super(id, name, 'Admin');
    }
}

function createPerson(personData) {
    switch (personData.role) {
        case 'Student':
            return new Student(personData.id, personData.name);
        case 'Professor':
            return new Professor(personData.id, personData.name);
        case 'Admin':
            return new Admin(personData.id, personData.name);
        default:
            throw new Error(`Invalid role: ${personData.role}`);
    }
}

module.exports = { createPerson };