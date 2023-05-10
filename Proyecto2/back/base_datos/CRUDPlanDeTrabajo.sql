CREATE PROCEDURE CreatePlanTrabajo
(
    @Nombre varchar(32),
    @Abreviacion varchar(32),
    @IDcoordinador int
)
AS
BEGIN
    INSERT INTO planTrabajo(Nombre, Abreviacion, IDcoordinador)
    VALUES (@Nombre, @Abreviacion, @IDcoordinador)
END;
GO

CREATE PROCEDURE ReadPlanTrabajoPorID 
(
    @IDplanTrabajo int
)
AS
BEGIN
    SELECT * FROM planTrabajo WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO

CREATE PROCEDURE ReadPlanTrabajos
AS
BEGIN
    SELECT * FROM planTrabajo
END;
GO
CREATE PROCEDURE UpdatePlanTrabajo
(
    @IDplanTrabajo INT,
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(32),
    @IDcoordinador INT,
    @Exito BIT OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE planTrabajo 
    SET Nombre = @Nombre, Abreviacion = @Abreviacion, IDcoordinador = @IDcoordinador
    WHERE IDplanTrabajo = @IDplanTrabajo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO


CREATE PROCEDURE DeletePlanTrabajo 
(
    @IDplanTrabajo int
)
AS
BEGIN
    DELETE FROM planTrabajo WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO
