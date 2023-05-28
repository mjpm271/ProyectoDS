CREATE PROCEDURE DefinirCoordinador
    @Carnet varchar(64),
	@Nombre varchar(64),
	@Result int output
AS
BEGIN
	declare @IDprofesor as int 
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	declare @IDequipoGuia as int
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

	if ((select count(*) from equipoGuia_Profesor where IDprofesor = @IDprofesor) != 1)
	begin
		set @Result = 1
		select @Result
		return @Result
	end

	if ((select count(*) from persona where Coordinador = 1 and IDpersona in (select IDprofesor from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia)) > 0)
	begin
		set @Result = 2
		select @Result
		return @Result
	end

    UPDATE persona
    SET Coordinador = 1
    WHERE Carnet = @Carnet and Habilitado = 1
END