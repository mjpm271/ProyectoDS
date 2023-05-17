CREATE PROCEDURE CreateResponsableActividad 
    @IDprofesor int,
    @IDactividad int
AS
BEGIN
    INSERT INTO responsableActividad(IDprofesor, IDactividad)
    VALUES(@IDprofesor, @IDactividad)
END;
GO
CREATE PROCEDURE ReadResponsableActividadPorID 
    @IDprofesor varchar(64), 
    @IDactividad int
AS
BEGIN
    SELECT * 
	FROM responsableActividad
    WHERE IDprofesor in (SELECT IDprofesor FROM persona WHERE Carnet = @IDprofesor) AND IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE ReadResponsableActividad 
AS
BEGIN
    SELECT * FROM responsableActividad
END;
GO

CREATE PROCEDURE UpdateResponsableActividad 
    @IDprofesor INT, 
    @IDactividad INT,
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE responsableActividad
    SET IDprofesor = @IDprofesor
    WHERE IDactividad = @IDactividad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE DeleteResponsableActividad 
    @IDprofesor int, 
    @IDactividad int
AS
BEGIN
    DELETE FROM responsableActividad
    WHERE IDprofesor = @IDprofesor AND IDactividad = @IDactividad
END;
GO