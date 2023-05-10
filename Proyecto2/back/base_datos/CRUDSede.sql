CREATE PROCEDURE CreateSede
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(10)
AS
BEGIN
    INSERT INTO sede (Nombre, Abreviacion)
    VALUES (@Nombre, @Abreviacion);
END;
GO

CREATE PROCEDURE ReadSede
AS
BEGIN
    SELECT IDsede, Nombre, Abreviacion
	FROM sede 
END;
GO

CREATE PROCEDURE ReadSedePorID
    @IDsede INT
AS
BEGIN
    SELECT IDsede, Nombre, Abreviacion
	FROM sede 
	WHERE IDsede = @IDsede;
END;
GO

CREATE PROCEDURE UpdateSede
    @IDsede INT,
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(10),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE sede
    SET Nombre = @Nombre, Abreviacion = @Abreviacion
    WHERE IDsede = @IDsede;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO


CREATE PROCEDURE DeleteSede
    @IDsede INT
AS
BEGIN
    DELETE FROM sede 
	WHERE IDsede = @IDsede;
END;
GO