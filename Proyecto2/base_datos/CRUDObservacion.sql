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
    @IDobservacion int,
    @observacion varchar(max),
    @IDactividad int
)
AS
BEGIN
    UPDATE observacionActividad SET observacion = @observacion, IDactividad = @IDactividad
    WHERE IDobservacion = @IDobservacion
END;
Go
CREATE PROCEDURE DeleteObservacionActividad 
(
    @IDobservacion int
)
AS
BEGIN
    DELETE FROM observacionActividad WHERE IDobservacion = @IDobservacion
END;
GO