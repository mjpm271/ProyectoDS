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
    @IDestado int,
    @Nombre varchar(32)
AS
BEGIN
    UPDATE estadoActividad
    SET Nombre = @Nombre
    WHERE IDestado = @IDestado
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