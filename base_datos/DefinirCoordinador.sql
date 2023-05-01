CREATE PROCEDURE DefinirCoordinador
    @IDpersona int
AS
BEGIN
    UPDATE persona
    SET Coordinador = 1
    WHERE IDpersona = @IDpersona and Habilitado = 1
END