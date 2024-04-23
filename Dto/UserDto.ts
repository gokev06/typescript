class User {
    email: string;
    nombres: string;
    apellidos: string;
    establecimiento:string;
    departamento:string;
    municipio: string;
    direccion:string;
    telefono: string;
    password: string
    constructor(
        email: string, nombres: string,
        establecimiento:string, departamento: string, 
        municipio: string, direccion:string,
        apellidos: string, telefono: string,
        password: string
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.establecimiento=establecimiento;
        this.departamento=departamento;
        this.municipio = municipio;
        this.direccion=direccion;
        this.telefono = telefono;
        this.password = password
    }
}

export default User;