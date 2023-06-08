CREATE PROCEDURE dbo.CreateGrupoUsuario
(
    @IDactividad INT,
    --@IDchat INT,
    @Habilitado BIT,
    @IDpersona INT
)
AS
BEGIN
    INSERT INTO grupoUsuario (IDactividad, Habilitado, IDpersona)
    VALUES (@IDactividad, @Habilitado, @IDpersona)
END
GO

CREATE PROCEDURE dbo.ReadGrupoUsuario
(
    @IDactividad INT,
    @IDpersona INT
)
AS
BEGIN
    SELECT *
    FROM grupoUsuario
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
END
GO

CREATE PROCEDURE dbo.ActivarGrupoUsuario
(
    @IDactividad INT,
    @IDpersona INT,
	@Result int output

)
AS
BEGIN
    UPDATE grupoUsuario
    SET Habilitado = 1
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO

CREATE PROCEDURE dbo.DesactivarGrupoUsuario
(
    @IDactividad INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE grupoUsuario
    SET Habilitado = 0
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
