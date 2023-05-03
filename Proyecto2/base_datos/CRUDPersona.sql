CREATE PROCEDURE CreatePersona
	@ID int,
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
    @Habilitado bit,
    @Coordinador bit,
    @Sede int,
    @IDtipo int
AS
BEGIN
    INSERT INTO persona (IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDtipo)
    VALUES (@ID, @NombreCompleto, @Correo, @Contra, @Habilitado, @Coordinador, @Sede, @IDtipo)
END;
GO

CREATE PROCEDURE ReadPersonas
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDtipo 
	FROM persona;
END;
GO

CREATE PROCEDURE ReadPersonaPorID
    @IDpersona INT
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDtipo  
	FROM persona 
	WHERE IDpersona = @IDpersona;
END;
GO

CREATE PROCEDURE UpdatePersona
    @IDpersona INT,
    @NombreCompleto VARCHAR(100),
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
	@Habilitado bit,
    @Coordinador bit,
    @Sede INT,
    @IDtipo INT
AS
BEGIN
    UPDATE persona
    SET NombreCompleto = @NombreCompleto,
        Correo = @Correo,
        Contra = @Contra,
		Habilitado = @Habilitado,
		Coordinador = @Coordinador,
        Sede = @Sede,
        IDtipo = @IDtipo
    WHERE IDpersona = @IDpersona;
END;
GO

CREATE PROCEDURE DeletePersona
    @IDpersona INT
AS
BEGIN
	UPDATE persona
    SET Habilitado = 0
	WHERE IDpersona = @IDpersona;
END;
GO