CREATE PROCEDURE CreateEquipoGuia
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO equipoGuia (Nombre)
    VALUES (@Nombre);
END;
GO

CREATE PROCEDURE ReadEquipoGuia
    @IDequipoGuia INT
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
END;
GO

CREATE PROCEDURE ReadEquipoGuiaPorID
    @IDequipoGuia INT
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
	WHERE IDequipoGuia = @IDequipoGuia;
END;
GO

CREATE PROCEDURE UpdateEquipoGuia
    @IDequipoGuia INT,
    @Nombre VARCHAR(32)
AS
BEGIN
    UPDATE equipoGuia
    SET Nombre = @Nombre
    WHERE IDequipoGuia = @IDequipoGuia;
END;
GO

CREATE PROCEDURE DeleteEquipoGuia
    @IDequipoGuia INT
AS
BEGIN
    DELETE FROM equipoGuia 
	WHERE IDequipoGuia = @IDequipoGuia;
END;
GO