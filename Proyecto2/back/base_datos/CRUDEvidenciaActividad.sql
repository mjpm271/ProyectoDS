CREATE PROCEDURE CreateEvidenciaActividad
    @Fotoparticipantes varchar(max),
    @linkGrabacion varchar(max),
    @IDactividad int
AS
BEGIN
    INSERT INTO evidenciaActividad (Fotoparticipantes, Linkgrabacion, IDactividad)
    VALUES (@Fotoparticipantes, @linkGrabacion, @IDactividad)
END;
GO

CREATE PROCEDURE ReadEvidenciaActividad
    @IDevidencia int
AS
BEGIN
    SELECT *
    FROM evidenciaActividad
    WHERE IDevidencia = @IDevidencia
END
GO

CREATE PROCEDURE ReadEvidenciaActividadPorID
    @IDactividad int
AS
BEGIN
    SELECT *
    FROM evidenciaActividad
    WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE UpdateEvidenciaActividad
    @Fotoparticipantes varchar(max),
    @linkGrabacion varchar(max),
    @IDactividad int
AS
BEGIN
    UPDATE evidenciaActividad
    SET Fotoparticipantes = @Fotoparticipantes,
        Linkgrabacion = @linkGrabacion
    where IDactividad = @IDactividad
END
GO

CREATE PROCEDURE DeleteEvidenciaActividad
    @IDevidencia int
AS
BEGIN
    DELETE FROM evidenciaActividad
    WHERE IDevidencia = @IDevidencia
END