CREATE PROCEDURE CreateEquipoGuiaProfesor
    @Nombre varchar(64),
    @Carnet varchar(64)
AS
BEGIN
	declare @IDprofesor as int 
	declare @IDequipoGuia as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);
    INSERT INTO EquipoGuia_Profesor (IDequipoGuia, IDprofesor, Habilitado)
    VALUES (@IDequipoGuia, @IDprofesor, 1);
END;
GO 

CREATE PROCEDURE ReadEquipoGuiaProfesor
AS
BEGIN
    SELECT IDequipoGuia, IDprofesor
	FROM EquipoGuia_Profesor 
END;
GO

CREATE PROCEDURE ReadEquipoGuiaProfesorPorID
    @IDequipoGuia INT
AS
BEGIN
    SELECT p.*  
	FROM EquipoGuia_Profesor as eq, persona as p
	WHERE IDequipoGuia = @IDequipoGuia and eq.IDprofesor = p.IDpersona
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