CREATE PROCEDURE CreateEquipoGuiaProfesor
    @IDequipoGuia INT,
    @IDprofesor INT
AS
BEGIN
    INSERT INTO EquipoGuia_Profesor (IDequipoGuia, IDprofesor, Habilitado)
    VALUES (@IDequipoGuia, @IDprofesor, 1);
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

CREATE PROCEDURE HabilitarProfesor
    @IDprofesor INT,
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE EquipoGuia_Profesor
    SET Habilitado = 1
    WHERE IDprofesor = @IDprofesor;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO

CREATE PROCEDURE inhabilitarProfesor
    @IDprofesor INT
AS
BEGIN
    UPDATE EquipoGuia_Profesor
    SET Habilitado = 0
    WHERE IDprofesor = @IDprofesor;
END;
GO