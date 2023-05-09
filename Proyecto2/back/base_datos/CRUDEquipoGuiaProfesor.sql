CREATE PROCEDURE CreateEquipoGuiaProfesor
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    INSERT INTO EquipoGuia_Profesor (IDequipoGuia, IDprofesor)
    VALUES (@IDequipoGuia, @IDprofesor);
END;
GO 

CREATE PROCEDURE ReadEquipoGuiaProfesor
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    SELECT IDequipoGuia, IDprofesor
	FROM EquipoGuia_Profesor 
END;
GO

CREATE PROCEDURE ReadEquipoGuiaProfesorPorID
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    SELECT * FROM EquipoGuia_Profesor 
	WHERE IDequipoGuia = @IDequipoGuia AND IDprofesor = @IDprofesor;
END;
GO

CREATE PROCEDURE UpdateEquipoGuiaProfesor
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    UPDATE EquipoGuia_Profesor
    SET IDprofesor = @IDprofesor
    WHERE IDequipoGuia = @IDequipoGuia;
END;
GO

CREATE PROCEDURE DeleteEquipoGuiaProfesor
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    DELETE FROM EquipoGuia_Profesor 
	WHERE IDequipoGuia = @IDequipoGuia AND IDprofesor = @IDprofesor;
END;
GO