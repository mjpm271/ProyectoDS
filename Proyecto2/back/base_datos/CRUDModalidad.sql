CREATE PROCEDURE CreateModalidad
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO modalidad (Nombre)
    VALUES ( @Nombre);
END;
GO

CREATE PROCEDURE ReadModalidades
AS
BEGIN
    SELECT IDmodalidad, Nombre 
	FROM modalidad;
END;
GO

CREATE PROCEDURE ReadModalidadPorID
    @IDmodalidad INT
AS
BEGIN
    SELECT IDmodalidad, Nombre 
	FROM modalidad 
	WHERE IDmodalidad = @IDmodalidad;
END;
GO

CREATE PROCEDURE UpdateModalidad
    @IDmodalidad INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE modalidad
    SET Nombre = @Nombre
    WHERE IDmodalidad = @IDmodalidad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
CREATE PROCEDURE DeleteModalidad
    @IDmodalidad INT
AS
BEGIN
    DELETE FROM modalidad 
	WHERE IDmodalidad = @IDmodalidad;
END;
GO
