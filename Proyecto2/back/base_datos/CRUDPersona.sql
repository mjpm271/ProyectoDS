Use proyecto2
CREATE PROCEDURE CreatePersona
	@ID int,
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(100),
    @Habilitado bit,
    @Coordinador bit,
	@Telefono varchar(64),
	@TelefonoOficina varchar(64),
    @Sede int,
    @IDtipo int
AS
BEGIN
    INSERT INTO persona (IDpersona, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina,Sede, IDtipo)
    VALUES (@ID, @NombreCompleto, @Correo, @Contra,@Foto, @Habilitado, @Coordinador, @Telefono,@TelefonoOficina ,@Sede, @IDtipo)
END;
GO

CREATE PROCEDURE ReadPersonas
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra,Foto, Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo 
	FROM persona;
END;
GO

CREATE PROCEDURE ReadPersonaPorID
    @IDpersona INT
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo  
	FROM persona 
	WHERE IDpersona = @IDpersona;
END;
GO

CREATE PROCEDURE ReadPersonaPorIDTipo
    @IDtipo INT
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo
	FROM persona 
	WHERE IDtipo = @IDtipo;
END;
GO

CREATE PROCEDURE ReadEstudianteporAlf 
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY NombreCompleto ASC 
END;
GO

CREATE PROCEDURE ReadEstudianteporSede
	@Sede INT
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE Sede = @Sede
END;
GO

CREATE PROCEDURE ReadEstudianteporCarnet     
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY IDpersona ASC 
END;
GO

CREATE PROCEDURE UpdatePersona
    @IDpersona int,
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(100),
    @Habilitado bit,
    @Coordinador bit,
	@Telefono varchar(64),
	@TelefonoOficina varchar(64),
    @Sede int,
    @IDtipo int,
    @Exito bit OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @ActualizacionExitosa bit;
    UPDATE persona
    SET NombreCompleto = @NombreCompleto,
        Correo = @Correo,
        Contra = @Contra,
		Foto=@Foto,
        Habilitado = @Habilitado,
        Coordinador = @Coordinador,
        Telefono = @Telefono,
		TelefonoOficina=@TelefonoOficina,
        Sede = @Sede,
        IDtipo = @IDtipo
    WHERE IDpersona = @IDpersona;
    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1; -- �xito
    ELSE
        SET @ActualizacionExitosa = 0; -- Falla

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE InhabilitarPersona
    @IDpersona INT
AS
BEGIN
	UPDATE persona
    SET Habilitado = 0
	WHERE IDpersona = @IDpersona;
END;
GO