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
    @IDplanTrabajo int,
	@Result int output
)
AS
BEGIN
	IF (select count(*) from actividad where Nombre = @Nombre and IDplanTrabajo = @IDplanTrabajo) >= 1
	BEGIN
		set @Result = 0
		select @Result
	END
	ELSE IF  (DATEDIFF(day, @FechaPublicacion, @Fecha) < 0)
	BEGIN 
		set @Result = 1
		select @Result
	END
	ELSE IF (DATEDIFF(day, @FechaPublicacion, @Fecha) < @Cantidaddiasrequeridos)
	BEGIN 
		set @Result = 2
		select @Result
	END
	ELSE
	BEGIN
		INSERT INTO actividad(Nombre, Semana, Fecha,Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, Linkreunion, Afiche, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo)
		VALUES (@Nombre, @Semana, @Fecha, @Cantidaddiasprevios, @Cantidaddiasrequeridos, @FechaPublicacion, @LinkReunion, @Afiche, @IDmodalidad, @IDtipoActividad, @IDtipoAfiche, @IDtipoEstado, @IDplanTrabajo)
	END
END;
GO

CREATE PROCEDURE ReadActividadPorID -- Tiene que ser nombre de actividad pero a su vez por plan pues en diferentes planes pueden el mismo nombre ej: ac.1 plan 1 y ac.2 plan 2
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

CREATE PROCEDURE ReadActividadPorIDActividad -- Se agarra el id actividad entonces fresco
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

CREATE PROCEDURE ReadActividadesUpdate
(
	@Fecha date
)
AS
BEGIN
    SELECT IDactividad, IDtipoEstado, Fecha, Cantidaddiasrequeridos
	FROM actividad
	WHERE DATEDIFF(day, Fecha, @Fecha) >= 0 and (IDtipoEstado = 1 or IDtipoEstado = 2)
END;
GO

CREATE PROCEDURE ReadUltimaActividad
AS
BEGIN
    SELECT top 1 * 
	FROM actividad
	ORDER BY IDactividad DESC
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
	@FechaActual DATETIME
AS
BEGIN
    SELECT TOP 1 * 
	FROM actividad
	WHERE Fecha >= @FechaActual and (IDtipoEstado = 1 or IDtipoEstado = 2)
	ORDER BY Fecha ASC
END;
GO

CREATE PROCEDURE ReadActividadesPublicadas
AS
BEGIN
    SELECT * 
	FROM actividad
	WHERE IDtipoEstado = 2
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

create procedure RealizarActividad
(
	@IDactividad int,
	@Result int output
)
as 
begin 
	update actividad
	set IDtipoEstado = 3
	where IDactividad = @IDactividad
	set @Result = 0
	select @Result
	return @Result
end;
go

create procedure CancelarActividad
(
	@IDactividad int,
	@Result int output
)
as 
begin 
	update actividad
	set IDtipoEstado = 4
	where IDactividad = @IDactividad
	set @Result = 0
	select @Result
	return @Result
end;
go

create procedure ActivarActividades
(
	@FechaSistema date,
	@Result int output
)
as 
begin 
	update actividad
	set IDtipoEstado = 2
	where DATEDIFF(day, FechaPublicacion, @FechaSistema) >= 0
	set @Result = 0
	select @Result
	return @Result
end;
go


create procedure NumeroRecordatorio
	@FechaSistema DATE,
	@FechaActividad DATETIME,
	@DiasRequeridos INT,
	@Result INT OUTPUT --Numero de Recordatorio
AS
BEGIN
	DECLARE @FechaPrimerRecordatorio DATE
	SET @FechaPrimerRecordatorio =  CONVERT(DATE, DATEADD(DAY, -@DiasRequeridos, @FechaActividad))
	--Se determina si la fecha de sistema corresponde a una de las fechas para recordatorio
	IF @FechaSistema >= @FechaPrimerRecordatorio AND @FechaSistema <= CONVERT(DATE,@FechaActividad)
		--Si la fecha coincide con una fecha de recordatorio entonces:
			--Determina numero de recordatorio a notificar (X)
		SET @Result = DATEDIFF(day, @FechaSistema, @FechaActividad) 
		
	ELSE
		
		SET @Result = 0
	
	SELECT @Result 
	RETURN @Result
END
GO