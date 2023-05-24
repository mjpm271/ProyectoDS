CREATE PROCEDURE ChangePassword
    @Carnet varchar(64),
    @NewPassword varchar(64)
AS
BEGIN
    UPDATE persona
    SET Contra = @NewPassword
    WHERE Carnet= @Carnet
END
