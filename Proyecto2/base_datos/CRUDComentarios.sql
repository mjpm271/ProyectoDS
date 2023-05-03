-- CREATE
CREATE PROCEDURE CreateComentario
(
    @IDprofesor int,
    @IDemisor int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Comentarios varchar(max),
    @Contenido varchar(max)
)
AS
BEGIN
    INSERT INTO comentario (IDprofesor, IDemisor, IDactividad, IDcomentarioPadre, Hora, Fecha, Comentarios, Contenido)
    VALUES (@IDprofesor, @IDemisor, @IDactividad, @IDcomentarioPadre, @Hora, @Fecha, @Comentarios, @Contenido)
END;
GO

-- READ
CREATE PROCEDURE ReadComentarioPorID 
(
    @IDcomentario int
)
AS
BEGIN
    SELECT * FROM comentario WHERE IDcomentario = @IDcomentario
END;
GO

CREATE PROCEDURE ReadComentarios
AS
BEGIN
    SELECT * FROM comentario
END;
GO

-- UPDATE
CREATE PROCEDURE UpdateComentario 
(
    @IDcomentario int,
    @IDprofesor int,
    @IDemisor int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Hora time,
    @Fecha date,
    @Comentarios varchar(max),
    @Contenido varchar(max)
)
AS
BEGIN
    UPDATE comentario SET IDprofesor = @IDprofesor, IDemisor = @IDemisor, IDactividad = @IDactividad, 
        IDcomentarioPadre = @IDcomentarioPadre, Hora = @Hora, Fecha = @Fecha, Comentarios = @Comentarios, Contenido = @Contenido
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
    DELETE FROM comentario WHERE IDcomentario = @IDcomentario
END;
GO