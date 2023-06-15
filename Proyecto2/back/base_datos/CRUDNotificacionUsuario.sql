CREATE PROCEDURE dbo.CreateNotificacionUsuario
(
    @IDnotificacion INT,
    @IDpersona INT
)
AS
BEGIN
    INSERT INTO notificacionUsuario (IDnotificacion, IDpersona, visto)
    VALUES (@IDnotificacion, @IDpersona, 0)
END
GO

CREATE PROCEDURE dbo.ReadNotificacionesUsuarioPorTitulo
(
    @IDpersona INT

)
AS
BEGIN
    SELECT N.Titulo , N.IDnotificacion, NU.visto
    FROM notificacionUsuario as NU 
    INNER JOIN notificacion as N
    ON NU.IDnotificacion = N.IDnotificacion
    INNER JOIN persona as p 
    ON NU.IDpersona = p.IDpersona 
	WHERE NU.IDpersona = @IDpersona
    ORDER BY N.Fecha DESC
END
GO
--DROP PROCEDURE ReadNotificacionesUsuarioPorTitulo
CREATE PROCEDURE dbo.ReadNotificacionesUsuario
(
    @IDpersona INT
)
AS
BEGIN
    SELECT N.Titulo, N.Fecha, N.Emisor, N.IDactividad, N.Contenido
    FROM notificacionUsuario as NU 
    INNER JOIN notificacion as N
    ON NU.IDnotificacion = N.IDnotificacion
    INNER JOIN persona as p 
    ON NU.IDpersona = p.IDpersona 
	WHERE NU.IDpersona = @IDpersona
    ORDER BY N.Fecha DESC
END
GO

CREATE PROCEDURE dbo.VerNotificacionUsuario
(
    @IDnotificacion INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE notificacionUsuario
    SET visto = 1
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO

CREATE PROCEDURE dbo.DesverNotificacionUsuario
(
    @IDnotificacion INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE notificacionUsuario
    SET visto = 0
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO

CREATE PROCEDURE dbo.DeleteBuzon
(
    @IDpersona INT
)
AS
BEGIN
    DELETE FROM notificacionUsuario
    WHERE IDpersona = @IDpersona
END
GO

CREATE PROCEDURE dbo.DeleteNotificacionUsuarioID
(
    @IDnotificacion INT,
	@IDpersona INT
)
AS
BEGIN
    DELETE FROM notificacionUsuario
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
END
GO