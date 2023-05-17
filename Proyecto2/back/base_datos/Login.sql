
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

CREATE PROCEDURE sp_LoginPersona2
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Exito Int OUTPUT
AS
BEGIN

	Set @Exito = 0
	Select @Exito = 1    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;

	SELECT
        IDpersona ,
		NombreCompleto,
        Correo,
        Coordinador,
        Sede,
        IDtipo
    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;

	

END;
GO

CREATE PROCEDURE sp_LoginPersona3
    @Correo VARCHAR(100),
    @Contra VARCHAR(64)
AS
BEGIN
	SELECT
        IDpersona ,
		NombreCompleto,
        Correo,
        Coordinador,
        Sede,
        IDtipo
    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;

END;
GO

CREATE PROCEDURE sp_LoginPersona4
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Exito Int OUTPUT
AS
BEGIN

	Set @Exito = 0
	Select @Exito = 1    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;
	

END;
GO

CREATE PROCEDURE Login5
  @Correo VARCHAR(50),
  @Contra VARCHAR(50),
  @Exito INT OUTPUT
AS
BEGIN
  -- Verificar las credenciales de inicio de sesión
  IF EXISTS (SELECT * FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1)
  BEGIN
    -- Credenciales válidas, establecer el estado de inicio de sesión como 0 (éxito)
    SET @Exito = 0;
  END
  ELSE
  BEGIN
    -- Credenciales inválidas, establecer el estado de inicio de sesión diferente de 0 (error)
    SET @Exito = 1;
  END
END
