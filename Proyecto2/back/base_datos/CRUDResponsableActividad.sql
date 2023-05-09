CREATE PROCEDURE CreateResponsableActividad 
    @IDprofesor int,
    @IDactividad int
AS
BEGIN
    INSERT INTO responsableActividad(IDprofesor, IDactividad)
    VALUES(@IDprofesor, @IDactividad)
END;
GO
CREATE PROCEDURE ReadResponsableActividadPorID 
    @IDprofesor int, 
    @IDactividad int
AS
BEGIN
    SELECT * FROM responsableActividad
    WHERE IDprofesor = @IDprofesor AND IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE ReadResponsableActividad 
AS
BEGIN
    SELECT * FROM responsableActividad
END;
GO

CREATE PROCEDURE UpdateResponsableActividad 
    @IDprofesor int, 
    @IDactividad int
AS
BEGIN
    UPDATE responsableActividad
    SET IDprofesor = @IDprofesor
    WHERE IDactividad = @IDactividad
END;
GO

CREATE PROCEDURE DeleteResponsableActividad 
    @IDprofesor int, 
    @IDactividad int
AS
BEGIN
    DELETE FROM responsableActividad
    WHERE IDprofesor = @IDprofesor AND IDactividad = @IDactividad
END;
GO