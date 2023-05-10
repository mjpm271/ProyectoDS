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
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoAfiche
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO


CREATE PROCEDURE DeleteTipoAfiche
    @IDtipo int
AS
BEGIN
    DELETE FROM tipoAfiche
    WHERE IDtipo = @IDtipo
END
GO