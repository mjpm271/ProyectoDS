
CREATE PROCEDURE CreatePersona
	@ID varchar(64),
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(max),
    @Habilitado bit,
    @Coordinador bit,
	@Telefono varchar(64),
	@TelefonoOficina varchar(64),
    @Sede int,
    @IDtipo int,
	@Result int output
AS
BEGIN
	IF (select count(*) from persona where Carnet = @ID) = 1
	BEGIN 
		set @Result = 1;
		select @Result;
		return @Result
	END
		IF (select count(*) from persona where Correo = @Correo) = 1
	BEGIN 
		set @Result = 2;
		select @Result;
		return @Result
	END
	ELSE
	BEGIN
		INSERT INTO persona (Carnet, NombreCompleto, Correo, Contra, Foto, Habilitado, Coordinador, Telefono, TelefonoOficina, Sede, IDtipo)
		VALUES (@ID, @NombreCompleto, @Correo, @Contra,@Foto, @Habilitado, @Coordinador, @Telefono,@TelefonoOficina ,@Sede, @IDtipo)
		set @Result = 0;
		select @Result
		return @Result
	END	
END;
GO

CREATE PROCEDURE ReadPersonas
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto, Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo 
	FROM persona;
END;
GO

CREATE PROCEDURE ReadPersonaPorID
    @Carnet varchar(64)
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo  
	FROM persona 
	WHERE Carnet = @Carnet;
END;
GO

CREATE PROCEDURE ReadProfesor
    @Carnet varchar(64)
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo  
	FROM persona 
	WHERE Carnet = @Carnet and IDtipo = 1;
END;
GO

CREATE PROCEDURE ReadPersonaPorIDTipo
    @IDtipo INT
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo
	FROM persona 
	WHERE IDtipo = @IDtipo;
END;
GO

CREATE PROCEDURE ReadEstudianteporAlf 
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY NombreCompleto ASC 
END;
GO

CREATE PROCEDURE ReadEstudianteporSede
	@Sede INT
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE Sede = @Sede and IDtipo = 3
END;
GO

CREATE PROCEDURE ReadEstudianteporCarnet     
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY Carnet ASC 
END;
GO

CREATE PROCEDURE UpdatePersona
    @Carnet varchar(64),
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(max),
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
    WHERE Carnet = @Carnet;
    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1; -- Éxito
    ELSE
        SET @ActualizacionExitosa = 0; -- Falla

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE InhabilitarPersona
    @Carnet varchar(64)
AS
BEGIN
	UPDATE persona
    SET Habilitado = 0
	WHERE Carnet = @Carnet;
END;
GO

CREATE PROCEDURE HabilitarPersona
    @Carnet varchar(64)
AS
BEGIN
	UPDATE persona
    SET Habilitado = 1
	WHERE Carnet = @Carnet;
END;
GO
