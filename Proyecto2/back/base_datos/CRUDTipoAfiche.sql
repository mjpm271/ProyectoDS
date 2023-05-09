CREATE PROCEDURE CreateTipoAfiche
    @Nombre varchar(32)
AS
BEGIN
    INSERT INTO tipoAfiche (Nombre)
    VALUES (@Nombre)
END;
GO

CREATE PROCEDURE ReadTipoAfiche
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM TipoAfiche;
END;
GO

CREATE PROCEDURE ReadTipoAfichePorID
    @IDtipo int
AS
BEGIN
    SELECT IDtipo, Nombre  
	FROM tipoAfiche
    WHERE IDtipo = @IDtipo
END
GO

CREATE PROCEDURE UpdateTipoAfiche
    @IDtipo int,
    @Nombre varchar(32)
AS
BEGIN
    UPDATE tipoAfiche
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo
END
GO

CREATE PROCEDURE DeleteTipoAfiche
    @IDtipo int
AS
BEGIN
    DELETE FROM tipoAfiche
    WHERE IDtipo = @IDtipo
END
GO