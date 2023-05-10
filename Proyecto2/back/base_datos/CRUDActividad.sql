CREATE PROCEDURE CreateActividad 
(
    @Semana int,
    @Fecha datetime,

    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int
)
AS
BEGIN
    INSERT INTO actividad(Semana, Fecha,Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo)
    VALUES (@Semana, @Fecha, @Cantidaddiasprevios, @Cantidaddiasrequeridos, @FechaPublicacion, @IDmodalidad, @IDtipoActividad, @IDtipoAfiche, @IDtipoEstado, @IDplanTrabajo)
END;
GO

CREATE PROCEDURE ReadActividadPorID
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM actividad 
	WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE ReadActividades
AS
BEGIN
    SELECT * 
	FROM actividad
END;
GO

CREATE PROCEDURE ReadActividadesporPlan
	@IDplanTrabajo INT
AS
BEGIN
    SELECT * 
	FROM actividad
	WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO

CREATE PROCEDURE ReadActividadesporfecha
	@Fecha DATETIME
AS
BEGIN
    SELECT TOP 1 * 
	FROM actividad
	WHERE Fecha >= @Fecha
	ORDER BY Fecha ASC
END;
GO

CREATE PROCEDURE UpdateActividad 
(
    @IDactividad int,
    @Semana int,
    @Fecha datetime,
    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int
)
AS
BEGIN
    UPDATE actividad 
	SET Semana = @Semana, Fecha = @Fecha, Cantidaddiasprevios = @Cantidaddiasprevios, Cantidaddiasrequeridos = @Cantidaddiasrequeridos, FechaPublicacion = @FechaPublicacion, IDmodalidad = @IDmodalidad, IDtipoActividad = @IDtipoActividad, IDtipoAfiche = @IDtipoAfiche, IDtipoEstado = @IDtipoEstado, IDplanTrabajo = @IDplanTrabajo
    WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE DeleteActividad 
(
    @IDactividad int
)
AS
BEGIN
    DELETE FROM actividad 
	WHERE IDactividad = @IDactividad
END;
GO