CREATE PROCEDURE ChangePassword
    @IDpersona int,
    @NewPassword varchar(64)
AS
BEGIN
    UPDATE persona
    SET Contra = @NewPassword
    WHERE IDpersona = @IDpersona
END