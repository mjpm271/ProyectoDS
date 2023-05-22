CREATE PROCEDURE CreateActividad 
(
	@Nombre varchar(64),
    @Semana int,
    @Fecha datetime,
    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
	@LinkReunion varchar(max),
	@Afiche varchar(max),
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int
)
AS
BEGIN
    INSERT INTO actividad(Nombre, Semana, Fecha,Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, Linkreunion, Afiche, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo)
    VALUES (@Nombre, @Semana, @Fecha, @Cantidaddiasprevios, @Cantidaddiasrequeridos, @FechaPublicacion, @LinkReunion, @Afiche, @IDmodalidad, @IDtipoActividad, @IDtipoAfiche, @IDtipoEstado, @IDplanTrabajo)
END;
GO

CREATE PROCEDURE ReadActividadPorID -- Tiene que ser nombre de actividad pero a su vez por plan 
(
    @Nombre varchar(64),
	@IDplanTrabajo int
)
AS
BEGIN
    SELECT * 
	FROM actividad 
	WHERE Nombre = @Nombre and IDplanTrabajo = @IDplanTrabajo
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
	WHERE Fecha >= @Fecha and (IDtipoEstado = 1 or IDtipoEstado = 2)
	ORDER BY Fecha ASC
END;
GO

CREATE PROCEDURE UpdateActividad2
(
    @IDactividad int,
	@Nombre varchar(64),
    @Semana int,
    @Fecha datetime,
    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
	@Linkreunion varchar(64),
	@Afiche varchar(64),
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int,
    @Exito bit OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa bit;

    UPDATE actividad 
    SET Nombre = @Nombre,
		Semana = @Semana,
        Fecha = @Fecha,
        Cantidaddiasprevios = @Cantidaddiasprevios,
        Cantidaddiasrequeridos = @Cantidaddiasrequeridos,
        FechaPublicacion = @FechaPublicacion,
		Linkreunion = @Linkreunion,
		Afiche = @Afiche,
        IDmodalidad = @IDmodalidad,
        IDtipoActividad = @IDtipoActividad,
        IDtipoAfiche = @IDtipoAfiche,
        IDtipoEstado = @IDtipoEstado,
        IDplanTrabajo = @IDplanTrabajo
    WHERE IDactividad = @IDactividad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
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