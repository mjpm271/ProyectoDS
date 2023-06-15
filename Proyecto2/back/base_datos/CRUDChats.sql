use proyecto;
CREATE  PROCEDURE CreateChats
    @nombre varchar(255)
AS
BEGIN
    INSERT INTO Chats (nombre)
    VALUES (@nombre)
END;
go

CREATE PROCEDURE ReadChats
AS
BEGIN
    SELECT * FROM Chats;
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

CREATE PROCEDURE ReadChatPorNombre
(
    @nombre varchar(255)
)
AS
BEGIN
    SELECT * FROM Chats WHERE nombre = @nombre;
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
    @IDParticipantesChat int,
    @IDchats int,
    @IDpersona int
)
AS
BEGIN
    INSERT INTO ParticipantesChat (IDParticipantesChat, IDchats, IDpersona)
    VALUES (@IDParticipantesChat, @IDchats, @IDpersona);
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
    @IDMensajes int,
    @IDchat int,
    @Emisor int,
    @Mensaje text,
    @Fecha datetime
)
AS
BEGIN
    INSERT INTO Mensajes (IDMensajes, IDchat, Emisor, Mensaje, Fecha)
    VALUES (@IDMensajes, @IDchat, @Emisor, @Mensaje, @Fecha);
END;
Go

CREATE PROCEDURE ReadMensajes
AS
BEGIN
    SELECT * FROM Mensajes;
END;
go

CREATE PROCEDURE ReadMensajeByID
(
    @IDMensajes int
)
AS
BEGIN
    SELECT * FROM Mensajes WHERE IDMensajes = @IDMensajes;
END;
Go

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

