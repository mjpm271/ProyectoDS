CREATE PROCEDURE DefinirCoordinador
    @Carnet varchar(64)
AS
BEGIN
    UPDATE persona
    SET Coordinador = 1
    WHERE Carnet = @Carnet and Habilitado = 1
END