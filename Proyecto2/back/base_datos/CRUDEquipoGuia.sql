CREATE PROCEDURE CreateEquipoGuia
    @Nombre VARCHAR(32),
	@Result int output
AS
BEGIN
	IF (select count(*) from equipoGuia where Nombre = @Nombre) >= 1
	BEGIN
		set @Result = 1
		select @Result
		return @Result
	END
	ELSE 
	BEGIN
		INSERT INTO equipoGuia (Nombre)
		VALUES (@Nombre);
		set @Result = 0
		select @Result
		return @Result
	END
END;
GO

CREATE PROCEDURE ReadEquipoGuia
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
END;
GO

CREATE PROCEDURE ReadEquipoGuiaPorID -- Por nombre no tiene sentido ID pero cambiar el nombre del procedure afecta mucho
    @Nombre varchar(32)
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
	WHERE Nombre = @Nombre;
END;
GO

CREATE PROCEDURE UpdateEquipoGuia
    @IDequipoGuia INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE equipoGuia
    SET Nombre = @Nombre
    WHERE IDequipoGuia = @IDequipoGuia;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO




CREATE PROCEDURE DeleteEquipoGuia
    @Nombre varchar(32)
AS
BEGIN
    DELETE FROM equipoGuia 
	WHERE Nombre = @Nombre;
END;
GO