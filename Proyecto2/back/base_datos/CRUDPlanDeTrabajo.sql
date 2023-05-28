CREATE PROCEDURE CreatePlanTrabajo
(
    @Nombre varchar(32),
    @Abreviacion varchar(32),
    @IDequipoGuia int,
	@Result int output
)
AS
BEGIN
	if ((select count(*) from planTrabajo where Nombre = @Nombre) > 0)
	begin
		set @Result = 1
		select @Result
		return @Result
	end
    INSERT INTO planTrabajo(Nombre, Abreviacion, IDequipoGuia)
    VALUES (@Nombre, @Abreviacion, @IDequipoGuia)
		set @Result = 0
		select @Result
		return @Result
END;
GO

CREATE PROCEDURE ReadPlanTrabajoPorID 
(
    @IDplanTrabajo int
)
AS
BEGIN
    SELECT * FROM planTrabajo 
	WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO

CREATE PROCEDURE ReadPlanTrabajos
AS
BEGIN
    SELECT * FROM planTrabajo
END;
GO
CREATE PROCEDURE UpdatePlanTrabajo
(
    @IDplanTrabajo INT,
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(32),
    @IDequipoGuia INT,
    @Exito BIT OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE planTrabajo 
    SET Nombre = @Nombre, Abreviacion = @Abreviacion, IDequipoGuia = @IDequipoGuia
    WHERE IDplanTrabajo = @IDplanTrabajo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO


CREATE PROCEDURE DeletePlanTrabajo 
(
    @IDplanTrabajo int
)
AS
BEGIN
    DELETE FROM planTrabajo WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO
