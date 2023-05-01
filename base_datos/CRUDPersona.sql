CREATE PROCEDURE CreatePersona
    @IDpersona INT,
    @NombreCompleto VARCHAR(100),
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Sede INT,
    @IDtipo INT
AS
BEGIN
    INSERT INTO persona (IDpersona, NombreCompleto, Correo, Contra, Sede, IDtipo)
    VALUES (@IDpersona, @NombreCompleto, @Correo, @Contra, @Sede, @IDtipo);
END;
GO

CREATE PROCEDURE ReadPersonas
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Sede, IDtipo 
	FROM persona;
END;
GO

CREATE PROCEDURE ReadPersonaPorID
    @IDpersona INT
AS
BEGIN
    SELECT IDpersona, NombreCompleto, Correo, Contra, Sede, IDtipo  
	FROM persona 
	WHERE IDpersona = @IDpersona;
END;
GO

CREATE PROCEDURE UpdatePersona
    @IDpersona INT,
    @NombreCompleto VARCHAR(100),
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Sede INT,
    @IDtipo INT
AS
BEGIN
    UPDATE persona
    SET NombreCompleto = @NombreCompleto,
        Correo = @Correo,
        Contra = @Contra,
        Sede = @Sede,
        IDtipo = @IDtipo
    WHERE IDpersona = @IDpersona;
END;
GO

CREATE PROCEDURE DeletePersona
    @IDpersona INT
AS
BEGIN
    DELETE FROM persona
	WHERE IDpersona = @IDpersona;
END;
GO