
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
