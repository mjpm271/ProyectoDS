-- CREATE
CREATE PROCEDURE CreateComentario
(
    @IDpersona int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Contenido varchar(max)
)
AS
BEGIN
    INSERT INTO comentario (IDpersona, IDactividad, IDcomentarioPadre, Hora, Fecha, Contenido)
    VALUES (@IDpersona, @IDactividad, @IDcomentarioPadre, @Hora, @Fecha, @Contenido)
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
CREATE PROCEDURE UpdateComentario 
(
    @IDcomentario int,
    @IDpersona int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Contenido varchar(max)
)
AS
BEGIN
    UPDATE comentario 
	SET IDpersona = @IDpersona, IDactividad = @IDactividad, 
        IDcomentarioPadre = @IDcomentarioPadre, Hora = @Hora, Fecha = @Fecha, Contenido = @Contenido
    WHERE IDcomentario = @IDcomentario
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