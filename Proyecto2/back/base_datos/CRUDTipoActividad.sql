CREATE PROCEDURE CreateTipoActividad
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO tipoActividad (Nombre)
    VALUES (@Nombre);
END
GO

CREATE PROCEDURE ReadTiposActividad
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoActividad;
END;
GO

CREATE PROCEDURE ReadTipoActividadPorID
    @IDtipo INT
AS
BEGIN
    SELECT IDtipo, Nombre 
	FROM tipoActividad 
	WHERE IDtipo = @IDtipo;
END;
GO

CREATE PROCEDURE UpdateTipoActividad
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoActividad
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

CREATE PROCEDURE DeleteTipoActividad
    @IDtipo INT
AS
BEGIN
    DELETE FROM tipoActividad 
	WHERE IDtipo = @IDtipo;
END;
GO