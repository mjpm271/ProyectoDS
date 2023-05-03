
CREATE PROCEDURE sp_LoginPersona
    @Correo varchar(100),
    @Contra varchar(64)
AS
BEGIN
  SELECT IDpersona, NombreCompleto, Correo, Coordinador, Sede, IDtipo 
  FROM Persona 
  WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1
END
