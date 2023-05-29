import {getConnection, sql} from '../database/connection'
import xlsx from 'xlsx'
import fs from 'fs'

//-------C R U D ---- Equipo Guia-----------------//
//Crear EquipoGuia
export const CrearEquipoGuia = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre } = req.body
    console.log('valores:', req.body)
    if (!Nombre) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .output('Result', sql.Int)
            .execute('CreateEquipoGuia')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};


// ------C R U D ------  Equipo Profesores ------//
// Agregar Profesores en Equipo
export const AgregarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre , Carnet} = req.body
    console.log('valores:', req.body)
    if (!Nombre || !Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .input('Carnet', sql.VarChar(64), Carnet)
            .output('Result', sql.Int)
            .execute('CreateEquipoGuiaProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Buscar 1 Profesor en Equipo Profesores
export const BuscarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre, Carnet} = req.body
    console.log('valores:', req.body)
    if (!Nombre || !Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('ReadEquipoGuiaProfesorPorProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Consultar Integrantes del Equipo de Profesores
export const ConsultarMiembrosEquipoGuia = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre } = req.body
    console.log('valores:', req.body)
    if (!Nombre ) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .execute('ReadEquipoGuiaProfesorPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Modificar informacion de Profesor en Equipo Profesores
export const ModificarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    if (!Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .output('Exito',sql.Bit)
            .execute('HabilitarProfesor')
        console.log(result)
        const outputValue = result.output;

        // Hacer algo con el resultado y el output
        // ...

        // Enviar una respuesta al cliente
        // res.status(200).json(outputValue.Exito); ---> Habilitar para leer el output
        res.json(result.recordset) 
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Inhabilitar Profesor en Equipo Profesor

// --> realmente no se elimina el profesor del equipo porque debe quedar historial
//      entonces deberia de inhabilitarse de alguna forma en el equipo

export const InhabilitarProfesorEquipo= async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    if (! Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('InhabilitarProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};   

//Definir Coordinador
export const DefinirCoordinador = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet, Nombre} = req.body
    console.log('valores:', req.body)
    /*if ( !Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .input('Nombre', sql.VarChar(64), Nombre)
            .output('Result', sql.Int)
            .execute('DefinirCoordinador')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};


// ------C R U D ------ Profesores ------//
// Agregar Profesor -- Deberia ser solo por sede
export const AgregarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const { Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono, TelefonoOficina,Sede, IDtipo } = req.body
    //
    console.log('valores:', req.body)
     //if (!Carnet || !NombreCompleto || !Correo || !Contra || !Foto || !Habilitado  || !Coordinador || !Telefono || !TelefonoOficina|| !Sede || !IDtipo) {
     //    console.log('here')
     //    return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
     //}
    try {
        const pool = await getConnection();
        console.log('whatever')
        const result = await pool
            .request()
            .input('ID', sql.VarChar(64), Carnet)
            .input('NombreCompleto', sql.VarChar(100), NombreCompleto)
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            .input('Foto',sql.VarChar(sql.MAX),Foto)
            .input('Habilitado', sql.Bit, Habilitado)
            .input('Coordinador', sql.Bit, Coordinador)
            .input('Telefono',sql.VarChar(64),Telefono)
            .input('TelefonoOficina',sql.VarChar(64),TelefonoOficina)
            .input('Sede', sql.Int, Sede)
            .input('IDtipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .output('Result',sql.Int)
            .execute('CreatePersona')
        console.log(result) 
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Buscar Profesor -- Deberia ser solo por sede (?)
export const BuscarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    if (!Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('ReadProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};       

//Modificar informacion de Profesor 
export const ModificarProfesor = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono, TelefonoOficina,Sede, IDtipo } = req.body
    console.log('valores:', req.body)
    /*if (!IDpersona || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        //console.log('whatever')
       const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .input('NombreCompleto', sql.VarChar(100), NombreCompleto)
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            .input('Foto',sql.VarChar(sql.MAX),Foto)
            .input('Habilitado', sql.Bit, Habilitado)
            .input('Coordinador', sql.Bit, Coordinador)
            .input('Telefono',sql.VarChar(64),Telefono)
            .input('TelefonoOficina',sql.VarChar(64),TelefonoOficina)
            .input('Sede', sql.Int, Sede)
            .input('IDtipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .output('Exito',sql.Int)
            .execute('UpdatePersona')
        console.log(result)

    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Inhabilitar Profesor 
export const InhabilitarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    /*if (!Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('InhabilitarPersona')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};


//habilitar Profesor 
export const HabilitarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    /*if (!Carnet) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('HabilitarPersona')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

//Ver siguiente actividad sin comentarios
export const SiguienteActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { FechaActual } = req.body
    console.log('valores:', req.body)
    /*if (!Fecha) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('FechaActual', sql.DateTime, FechaActual)
            .execute('ReadActividadesporfecha')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

export const SubirInformacionEstudiantes = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const { rutaExcel, sede} = req.body
    console.log('ruta archivo:', rutaExcel)
    console.log('Sede a insertar:', sede)
    if (!rutaExcel || !sede) {
        console.error('Error: no se encontró ruta al archivo')
        return res.sendStatus(400, {msg: 'Bad Request. Please select file to upload'})
    }
    try {

        // capturar filas del archivo excel y subirlo a un array
        let workbook = xlsx.readFile(rutaExcel)
        let worksheet = workbook.Sheets[workbook.SheetNames[0]]
        let dataArray = xlsx.utils.sheet_to_json(worksheet)

        //console.table(dataArray)
        //console.log(dataArray)

        // generar el SQL dinámico
        let insertQuery = "INSERT INTO Persona (Carnet, NombreCompleto, Sede, Correo, Telefono, IDTipoPersona) VALUES "

        dataArray.forEach((row) => {
            // el 3 al final es hard-coded para que se ingrese como estudiante
            insertQuery += `('${row["Carné"]}', '${row["Nombre"]}', ${sede}, '${row["Correo"]}', '${row["Numero Celular"]}', 3),`
        })

        insertQuery = insertQuery.substring(0, insertQuery.length - 1)
        insertQuery += ";"
        console.log(insertQuery)

        // subir a la base
        const pool = await getConnection();
        const result = await pool.request().query(insertQuery, (err, res) => {
            if(err) {
                console.error(err)
                res.sendStatus(500, err.message)
            }
            else {
                console.log(res)
            }
        })
        
        //console.dir(result)
        //res.json(result)
        // mensaje exito
        res.sendStatus(200)


    } catch(err) {
        return res.sendStatus(400, {msg: 'Bad Request. Could not open file'})
    }
}

export const DescargarInformacionEstudiantes = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // espero que si es TODAS las sedes me envíe un 0
    const { sede, codSede, rutaGuardado } = req.body
    console.log('valores:', sede, codSede)
    // partes del SQL dinamico
    let selectUnique = `select Carnet, NombreCompleto, Correo, Telefono from Persona where IDTipoPersona = 3`
    let selectAll = `select P.Carnet, P.NombreCompleto, P.Correo, P.Telefono, P.Sede, S.Abreviacion from Persona P join Sede S on S.IDSede = P.Sede where IDTipoPersona = 3`
    let conditionSede = `and Sede = ${sede}`
    let conditionOrder = `order by P.Sede`

    // partes para el path de la descarga
    // está un poco trillado porque la función writeFile por alguna razón no recibe tokens de windows
    //let downloadPath = `%USERPROFILE%\\Downloads`
    //let downloadPath2 = `C:\\Users\\Adrián\\Downloads`
    if (sede == 0) {
        // todas las sedes, separadas por página
        try {
            console.log('llego a global')
            let allQuery = `${selectAll} ${conditionOrder}`
            // pedir info de la BD
            const pool = await getConnection();
            const result = await pool
                .request()
                .query(allQuery)
            //console.log(result.recordset)

            // necesito esta funcion auxiliar para poder separar el recordset por cada sede
            const groupBy = (arr, property) => {
                return arr.reduce((acc, cur) => {
                    acc[cur[property]] = [...acc[cur[property]] || [], cur];
                    return acc;
                }, {});
            }

            // objeto con la informacion separada por sedes
            let groupedRecords = groupBy(result.recordset, 'Sede')

            // crear el excel
            let filename = `${rutaGuardado}\\Estudiantes_${codSede}.xlsx`
            let workbook = xlsx.utils.book_new()
            // este for loop esconde conocimientos esotéricos que solo algunos bodhisattvas lograron entender
            for (let [k, v] of Object.entries(groupedRecords)) {
                //console.log("iterando sedes")
                let ws = xlsx.utils.json_to_sheet(v)
                xlsx.utils.book_append_sheet(workbook, ws, `Sede_${v[0]['Sede']}_${v[0]['Abreviacion']}`)
            }
            console.log(workbook)
            //console.log('Attempting', filename)
            //console.log('lets resolve HOME', fs.existsSync(downloadPath2))
            xlsx.writeFileXLSX(workbook, filename)
            return res.sendStatus(200)

        } catch (err) {
            console.error(err)
            res.sendStatus(500, err.message)
        }
    }
    else {
    // una sede en especifico
        try {
            // pedir info de la BD
            console.log('llego a especifico para sede', sede)
            let conditionedQuery = `${selectUnique} ${conditionSede}`
            console.log(conditionedQuery)
            const pool = await getConnection();
            const result = await pool
                .request()
                .query(conditionedQuery)
            //console.log(result.recordset)
            
            // crear el excel
            let filename = `${rutaGuardado}\\Estudiantes_${codSede}.xlsx`
            let workbook = xlsx.utils.book_new()
            let worksheet = xlsx.utils.json_to_sheet(result.recordset)
            console.log(worksheet)
            xlsx.utils.book_append_sheet(workbook, worksheet, `Sede_${sede}_${codSede}`)
            console.log(workbook)
            console.log('Attempting', filename)
            //console.log('lets resolve HOME', fs.existsSync(downloadPath2))
            xlsx.writeFileXLSX(workbook, filename)
            return res.sendStatus(200)

        } catch (err) {
            res.sendStatus(500, err.message)
        }
    }

}
