CREATE PROCEDURE CreateTipoPersona
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO tipoPersona (Nombre)
    VALUES (@Nombre);
END;
GO

CREATE PROCEDURE ReadTiposPersona
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoPersona;
END;
GO

CREATE PROCEDURE ReadTipoPersonaPorID
    @IDtipo INT
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoPersona 
	WHERE IDtipo = @IDtipo;
END;
GO

CREATE PROCEDURE UpdateTipoPersona
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoPersona
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO


CREATE PROCEDURE DeleteTipoPersona
    @IDtipo INT
AS
BEGIN
    DELETE FROM tipoPersona 
	WHERE IDtipo = @IDtipo;
END;
GO
