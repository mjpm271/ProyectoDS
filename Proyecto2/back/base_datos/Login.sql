
CREATE PROCEDURE sp_LoginPersona
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Exito BIT OUTPUT,
    @IDtipo INT OUTPUT,
    @IDpersona INT OUTPUT,
    @NombreCompleto VARCHAR(100) OUTPUT,
    @Coordinador BIT OUTPUT,
    @Sede INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @RowCount INT;

    SELECT @IDpersona = IDpersona,
           @NombreCompleto = NombreCompleto,
           @Correo = Correo,
           @Coordinador = Coordinador,
           @Sede = Sede,
           @IDtipo = IDtipo
    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;

    SET @RowCount = @@ROWCOUNT;

    IF @RowCount > 0
        SET @Exito = 1;
    ELSE
    BEGIN
        SET @Exito = 0;
        SET @IDtipo = NULL;
        SET @IDpersona = NULL;
        SET @NombreCompleto = NULL;
        SET @Coordinador = NULL;
        SET @Sede = NULL;
    END

    SELECT @Exito AS Exito, @IDpersona AS IDpersona, @NombreCompleto AS NombreCompleto, @Correo AS Correo, @Coordinador AS Coordinador, @Sede AS Sede, @IDtipo AS IDtipo;
END;
GO

CREATE PROCEDURE LoginUsuario
  @Correo VARCHAR(50),
  @Contra VARCHAR(50),
  @Exito INT OUTPUT
AS
BEGIN
  -- Verificar las credenciales de inicio de sesión
  IF EXISTS (SELECT * FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1)
  BEGIN
    -- Credenciales válidas
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 1 AND Coordinador = 1)
		BEGIN
		 SET @Exito = 1; -- Entra Coordinador
		END
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 1 AND Coordinador = 0)
		BEGIN
		 SET @Exito = 2; --Entra Profesor
		END

	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 2)
		BEGIN
		 SET @Exito = 3; --Entra Asistente
		END
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 2 AND Sede =1)
		BEGIN
		 SET @Exito = 4; --Entra Asistente de Cartago
		END
	
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 3)
		BEGIN
		 SET @Exito = 5; --Entra Estudiante (OPCION INVALIDA POR EL MOMENTO)
		END
	SELECT * FROM Persona WHERE Correo = @Correo AND Contra = @Contra
  END
  ELSE
  BEGIN
    -- Credenciales inválidas, establecer el estado de inicio de sesión diferente de 0 (error)
    SET @Exito = 6;
  END
  
END

--DROP PROCEDURE LoginUsuario