CREATE PROCEDURE CreateObservacionActividad
(
    @observacion varchar(max),
    @IDactividad int
)
AS
BEGIN
    INSERT INTO observacionActividad (observacion, IDactividad)
    VALUES (@observacion, @IDactividad)
END;
GO
CREATE PROCEDURE ReadObservacionActividadPorID 
(
    @IDobservacion int
)
AS
BEGIN
    SELECT * FROM observacionActividad WHERE IDobservacion = @IDobservacion
END;
GO

CREATE PROCEDURE ReadObservacionActividades
AS
BEGIN
    SELECT * FROM observacionActividad
END;
GO
CREATE PROCEDURE UpdateObservacionActividad 
(
    @IDobservacion INT,
    @observacion VARCHAR(MAX),
    @IDactividad INT,
    @Exito BIT OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE observacionActividad 
    SET observacion = @observacion, IDactividad = @IDactividad
    WHERE IDobservacion = @IDobservacion;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
CREATE PROCEDURE DeleteObservacionActividad 
(
    @IDobservacion int
)
AS
BEGIN
    DELETE FROM observacionActividad WHERE IDobservacion = @IDobservacion
END;
GO