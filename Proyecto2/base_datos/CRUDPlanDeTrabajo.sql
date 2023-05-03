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
    @IDplanTrabajo int,
    @Nombre varchar(32),
    @Abreviacion varchar(32),
    @IDcoordinador int
)
AS
BEGIN
    UPDATE planTrabajo SET Nombre = @Nombre, Abreviacion = @Abreviacion, IDcoordinador = @IDcoordinador
    WHERE IDplanTrabajo = @IDplanTrabajo
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
