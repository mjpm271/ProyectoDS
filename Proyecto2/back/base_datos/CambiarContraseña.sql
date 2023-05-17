CREATE PROCEDURE ChangePassword
    @Carnet int,
    @NewPassword varchar(64)
AS
BEGIN
    UPDATE persona
    SET Contra = @NewPassword
    WHERE Carnet= @Carnet
END