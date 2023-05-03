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

CREATE PROCEDURE UptadeTipoActividad
    @IDtipo INT,
    @Nombre VARCHAR(32)
AS
BEGIN
    UPDATE tipoActividad
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;
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