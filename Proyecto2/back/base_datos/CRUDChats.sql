use proyecto
CREATE PROCEDURE CreateChats
    @IDchat int,
    @nombre varchar(255)
AS
BEGIN
    INSERT INTO Chats (IDchat, nombre)
    VALUES (@IDchat, @nombre)
END;
go

CREATE PROCEDURE ReadChats
AS
BEGIN
    SELECT * FROM Chats;
END;
go



CREATE PROCEDURE ReadChatByID
(
    @IDchat int
)
AS
BEGIN
    SELECT * FROM Chats WHERE IDchat = @IDchat;
END;
go

CREATE PROCEDURE UpdateChat
(
    @IDchat int,
    @nuevoNombre varchar(255)
)
AS
BEGIN
    UPDATE Chats SET nombre = @nuevoNombre WHERE IDchat = @IDchat;
END;
go


CREATE PROCEDURE DeleteChat
(
    @IDchat int
)
AS
BEGIN
    DELETE FROM Chats WHERE IDchat = @IDchat;
END;
go

------

CREATE PROCEDURE CreateParticipanteChat
(
    @IDchats int,
    @Carnet varchar(64)
)
AS
BEGIN
	declare @IDperson as int 
	set @IDperson = (select top 1 IDpersona from persona where Carnet = @Carnet);
    INSERT INTO ParticipantesChat ( IDchats, IDpersona)
    VALUES ( @IDchats, @IDperson);
END;
go

CREATE PROCEDURE ReadParticipantesChat
AS
BEGIN
    SELECT * FROM ParticipantesChat;
END;
go

CREATE PROCEDURE ReadParticipanteChatByID
(
    @IDParticipantesChat int
)
AS
BEGIN
    SELECT * FROM ParticipantesChat WHERE IDParticipantesChat = @IDParticipantesChat;
END;
go

CREATE PROCEDURE ReadParticipanteChatPorCarnet
(
    @Carnet varchar(64)
)
AS
BEGIN
	declare @IDpersona as int 
	set @IDpersona = (select top 1 IDpersona from persona where Carnet = @Carnet);
    SELECT Chats.IDchat, Chats.nombre, ParticipantesChat.IDParticipantesChat, ParticipantesChat.IDchats, ParticipantesChat.IDpersona
	FROM Chats
	INNER JOIN ParticipantesChat ON Chats.IDchat = ParticipantesChat.IDchats
	INNER JOIN persona ON ParticipantesChat.IDpersona = persona.IDpersona
	WHERE ParticipantesChat.IDpersona = @IDpersona;

END;
go

CREATE PROCEDURE ReadParticipanteChatPorIDchat
(
   @IDchat int
)
AS
BEGIN
    SELECT * FROM ParticipantesChat WHERE IDchats =@IDchat;
END;
go
CREATE PROCEDURE UpdateParticipanteChat
(
    @IDParticipantesChat int,
    @IDchat int,
    @IDpersona int
)
AS
BEGIN
    UPDATE ParticipantesChat SET IDchats = @IDchat, IDpersona = @IDpersona
    WHERE IDParticipantesChat = @IDParticipantesChat;
END;
go

CREATE PROCEDURE DeleteParticipanteChat
(
    @IDParticipantesChat int
)
AS
BEGIN
    DELETE FROM ParticipantesChat WHERE IDParticipantesChat = @IDParticipantesChat;
END;
go

-------

CREATE PROCEDURE CreateMensaje
(
    @IDchat int,
    @CarnetEmisor int,
    @Mensaje text,
    @Fecha datetime
)
AS
BEGIN
	declare @IDpersona as int 
	set @IDpersona = (select top 1 IDpersona from persona where Carnet = @CarnetEmisor);
    INSERT INTO Mensajes (IDchat, Emisor, Mensaje, Fecha)
    VALUES ( @IDchat, @IDpersona, @Mensaje, @Fecha);
END;
Go

CREATE PROCEDURE ReadMensajes
AS
BEGIN
    SELECT * FROM Mensajes;
END;
go

CREATE PROCEDURE ReadMensajesByIDChat
	@IDchat int
AS
BEGIN
    SELECT * FROM Mensajes WHERE IDchat =@IDchat;
END;
go

CREATE PROCEDURE UpdateMensaje
(
    @IDMensajes int,
    @IDchat int,
    @Emisor int,
    @Mensaje text,
    @Fecha datetime
)
AS
BEGIN
    UPDATE Mensajes SET IDchat = @IDchat, Emisor = @Emisor, Mensaje = @Mensaje, Fecha = @Fecha
    WHERE IDMensajes = @IDMensajes;
END;
go

CREATE PROCEDURE DeleteMensaje
(
    @IDMensajes int
)
AS
BEGIN
    DELETE FROM Mensajes WHERE IDMensajes = @IDMensajes;
END;
go

