class Person {
    constructor(personData) {
        this.id = personData.IDpersona;
        this.name = personData.NombreCompleto;
        this.email = personData.Correo;
        this.password = personData.Contra;
        this.isActive = personData.Habilitado;
        this.cellphone = personData.Telefono;
        this.officePhone = '';
        this.site = personData.Sede;
        this.photo = personData.photo;
        this.userType = personData.IDtipo;
    }
}

class Admin extends Person {
    constructor(personData) {
        super(personData); // userType 1 = Admin
        this.userTypeName = 'Admin user';
    }
}

class Professor extends Person {
    constructor(personData) {
        super(personData); // userType 2 = Professor
        this.professorCode = personData.CodigoProfesor; // solo profesores tienen codigo de profesor
        this.isCoordinator = personData.Coordinador;    // solo profesores tienen atributo de coordinador
        this.officePhone = personData.TelefonoOficina   // solo profesores tienen telefono de oficina
        this.userTypeName = 'Professor user';
    }
}

class Student extends Person {
    constructor(personData) {
        super(personData); // userType 3 = Student
        this.studentID = personData.Carne;
        this.userTypeName = 'Student user';
    }
}

function createPerson(personData) {
    switch (personData.IDtipo) {
        case 1:
            return new Admin(personData);
        case 2:
            return new Professor(personData);
        case 3:
            return new Student(personData)
        default:
            throw new Error(`Invalid userType: ${personData.userType}`);
    }
}

module.exports = { createPerson };