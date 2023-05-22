CREATE PROCEDURE CreateObservacionActividad
(
	@Fecha datetime,
    @Observacion varchar(max),
    @IDactividad int
)
AS
BEGIN
    INSERT INTO observacionActividad (Fecha, Observacion, IDactividad)
    VALUES (@Fecha, @Observacion, @IDactividad)
END;
GO
CREATE PROCEDURE ReadObservacionActividadPorID 
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM observacionActividad 
	WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE ReadObservacionActividades
AS
BEGIN
    SELECT * 
	FROM observacionActividad
END;
GO

CREATE PROCEDURE UpdateObservacionActividad 
(
    @IDobservacion INT,
	@Fecha datetime, 
    @Observacion VARCHAR(MAX),
    @IDactividad INT,
    @Exito BIT OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE observacionActividad 
    SET Fecha = @Fecha, Observacion = @Observacion, IDactividad = @IDactividad
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