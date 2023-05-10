CREATE PROCEDURE CreateEstadoActividad
    @Nombre varchar(32)
AS
BEGIN
    INSERT INTO estadoActividad (Nombre)
    VALUES (@Nombre)
END;
GO

CREATE PROCEDURE ReadEstadoActividad
AS
BEGIN
    SELECT IDestado, Nombre
	FROM estadoActividad;
END;
GO

CREATE PROCEDURE ReadEstadoActividadPorID
    @IDestado int
AS
BEGIN
    SELECT IDestado, Nombre
	FROM estadoActividad
    WHERE IDestado = @IDestado
END;
GO


CREATE PROCEDURE UpdateEstadoActividad
    @IDestado INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE estadoActividad
    SET Nombre = @Nombre
    WHERE IDestado = @IDestado;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE DeleteEstadoActividad
    @IDestado int
AS
BEGIN
    DELETE FROM estadoActividad
    WHERE IDestado = @IDestado
END;
GO