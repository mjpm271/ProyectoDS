-- CREATE
CREATE PROCEDURE CreateComentario
(
    @Carnet varchar(64),
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Contenido varchar(max)
)
AS
BEGIN
    INSERT INTO comentario (Carnet, IDactividad, IDcomentarioPadre, Hora, Fecha, Contenido)
    VALUES (@Carnet, @IDactividad, @IDcomentarioPadre, @Hora, @Fecha, @Contenido)
END;
GO

-- READ
CREATE PROCEDURE ReadComentarioPorID 
(
    @IDcomentario int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDcomentario = @IDcomentario
END;
GO

CREATE PROCEDURE ReadComentarioPorIDpadre
(
    @IDcomentarioPadre int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDcomentarioPadre = @IDcomentarioPadre
END;
GO

CREATE PROCEDURE ReadComentarioPorIDactividad
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE ReadComentarios
AS
BEGIN
    SELECT * 
	FROM comentario
END;
GO

-- UPDATE
CREATE PROCEDURE UpdateComentario1
(
    @IDcomentario int,
    @Carnet int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Contenido varchar(max),
    @Exito bit OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa bit;

    UPDATE comentario 
    SET Carnet = @Carnet,
        IDactividad = @IDactividad,
        IDcomentarioPadre = @IDcomentarioPadre,
        Hora = @Hora,
        Fecha = @Fecha,
        Contenido = @Contenido
    WHERE IDcomentario = @IDcomentario;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO

-- DELETE
CREATE PROCEDURE DeleteComentario 
(
    @IDcomentario int
)
AS
BEGIN
    DELETE FROM comentario 
	WHERE IDcomentario = @IDcomentario
END;
GO