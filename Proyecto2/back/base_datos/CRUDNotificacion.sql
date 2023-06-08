CREATE PROCEDURE dbo.CreateNotificacion
(
    @Titulo VARCHAR(MAX),
    @Fecha DATETIME,
    @Emisor INT,
    @Contenido VARCHAR(MAX),
    @IDactividad INT
	--@IDchat
)
AS
BEGIN
    INSERT INTO notificacion (Titulo, Fecha, Emisor, Contenido, IDactividad)
    VALUES (@Titulo, @Fecha, @Emisor, @Contenido, @IDactividad)
END

GO

CREATE PROCEDURE dbo.ReadNotificacion
(
    @IDnotificacion INT
)
AS
BEGIN
    SELECT *
    FROM notificacion
    WHERE IDnotificacion = @IDnotificacion
END
GO

CREATE PROCEDURE dbo.ReadNotificaciones
AS
BEGIN
    SELECT *
    FROM notificacion
END
GO

CREATE PROCEDURE dbo.UpdateNotificacion
(
    @IDnotificacion INT,
    @Titulo VARCHAR(MAX),
    @Fecha DATETIME,
    @Emisor INT,
    @Contenido VARCHAR(MAX),
    @IDactividad INT
)
AS
BEGIN
    UPDATE notificacion
    SET Titulo = @Titulo,
        Fecha = @Fecha,
        Emisor = @Emisor,
        Contenido = @Contenido,
        IDactividad = @IDactividad
    WHERE IDnotificacion = @IDnotificacion
END

GO

CREATE PROCEDURE dbo.DeleteNotificacion
(
    @IDnotificacion INT
)
AS
BEGIN
    DELETE FROM notificacion
    WHERE IDnotificacion = @IDnotificacion
END