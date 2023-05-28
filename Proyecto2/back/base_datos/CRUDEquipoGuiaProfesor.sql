CREATE PROCEDURE CreateEquipoGuiaProfesor
    @Nombre varchar(32),
    @Carnet varchar(64),
	@Result int output
AS
BEGIN
	declare @IDprofesor as int 
	declare @IDequipoGuia as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

	if ((select count(*) from persona where @IDprofesor in (select IDpersona from persona where Coordinador = 1)) > 0)
	begin
		set @Result = 1
		select @Result
		return @Result
	end

	if ((select count(*) from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia) = 5)
	begin
		set @Result = 2
		select @Result
		return @Result
	end

	if ((select count(*) from persona where IDpersona = @IDprofesor and Sede in (select Sede from persona where IDpersona in (select IDprofesor from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia))) > 0)
	begin
		set @Result = 3
		select @Result
		return @Result
	end
	
    INSERT INTO EquipoGuia_Profesor (IDequipoGuia, IDprofesor, Habilitado)
    VALUES (@IDequipoGuia, @IDprofesor, 1);
	set @Result = 0
	select @Result
	return @Result
END;
GO 

CREATE PROCEDURE ReadEquipoGuiaProfesor
AS
BEGIN
    SELECT *
	FROM EquipoGuia_Profesor 
END;
GO

CREATE PROCEDURE ReadEquipoGuiaProfesorPorProfesor
    @Nombre varchar(32),
    @Carnet varchar(64)
AS
BEGIN
	declare @IDprofesor as int 
	declare @IDequipoGuia as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

    SELECT p.*  
	FROM EquipoGuia_Profesor as eq, persona as p
	WHERE p.IDpersona = @IDprofesor and IDequipoGuia = @IDequipoGuia 
END;
GO


CREATE PROCEDURE ReadEquipoGuiaProfesorPorID -- ID del equipo no del profesor
    @Nombre VARCHAR(64)
AS
BEGIN
	DECLARE @IDequipoGuia AS INT
	SET @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre)
    SELECT p.*  
	FROM EquipoGuia_Profesor as eq, persona as p
	WHERE IDequipoGuia = @IDequipoGuia and eq.IDprofesor = p.IDpersona
END;
GO

CREATE PROCEDURE HabilitarProfesor
    @Carnet varchar(64),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

	declare @IDprofesor as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
    
	UPDATE EquipoGuia_Profesor
    SET Habilitado = 1
    WHERE IDprofesor = @IDprofesor;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE InhabilitarProfesor
    @Carnet varchar(64)
AS
BEGIN
	declare @IDprofesor as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
    UPDATE EquipoGuia_Profesor
    SET Habilitado = 0
    WHERE IDprofesor = @IDprofesor;
END;
GO
