create database proyecto;

create table equipoGuia(
	IDequipoGuia int not null IDENTITY(1,1),
	Nombre varchar(32) not null
	primary key  (IDequipoGuia)
);

create table sede(
	IDsede int not null IDENTITY(1,1),
	Nombre varchar(32) not null,
	Abreviacion varchar(10) not null
	primary key (IDsede)
);

create table tipoPersona(
	IDtipo int not null IDENTITY(1,1),
	Nombre varchar(32) not null
	primary key (IDtipo)
)

create table persona(
	IDpersona int not null IDENTITY(1,1),
	Carnet varchar(64) not null, 
	NombreCompleto varchar(100),
	Correo varchar(100),
	Contra varchar(64),
	Foto varchar(MAX),
	Habilitado bit not null,
	Coordinador bit not null,
	Telefono varchar(64),
	TelefonoOficina varchar(64),
	Sede int not null,
	IDtipo int not null
	primary key (IDpersona)
	foreign key (Sede) references sede(IDsede), 
	foreign key (IDtipo) references tipoPersona(IDtipo)
);

create table equipoGuia_Profesor(
	IDequipoGuia int not null,
	IDprofesor int not null,
	Habilitado bit
	foreign key (IDequipoGuia) references equipoGuia(IDequipoGuia),
	foreign key (IDprofesor) references persona(IDpersona)
);

create table modalidad(
	IDmodalidad int not null IDENTITY(1,1),
	Nombre varchar(32) not null
	primary key (IDmodalidad)
);

create table tipoActividad(
	IDtipo int not null IDENTITY(1,1),
	Nombre varchar(32)
	primary key (IDtipo)
);

create table tipoAfiche(
	IDtipo int not null IDENTITY(1,1),
	Nombre varchar(32)
	primary key (IDtipo)
);


create table estadoActividad(
	IDestado int not null IDENTITY(1,1),
	Nombre varchar(32)
	primary key (IDestado)
);

create table planTrabajo(
	IDplanTrabajo int not null IDENTITY(1,1),
	Nombre varchar(32) not null,
	Abreviacion varchar(32) not null,
	IDequipoGuia int not null
	primary key (IDplanTrabajo)
	foreign key (IDequipoGuia) references equipoGuia(IDequipoGuia)
);

create table actividad(
	IDactividad int not null IDENTITY(1,1),
	Nombre varchar(64),
	Semana int,
	Fecha datetime,
	Cantidaddiasprevios int,
	Cantidaddiasrequeridos int,
	FechaPublicacion date,
	Linkreunion varchar(max),
	Afiche varchar(max),
	IDmodalidad int not null,
	IDtipoActividad int not null,
	IDtipoAfiche int not null,
	IDtipoEstado int not null,
	IDplanTrabajo int not null
	primary key (IDactividad)
	foreign key (IDmodalidad) references Modalidad(IDmodalidad),
	foreign key (IDtipoActividad) references tipoActividad(IDtipo),
	foreign key (IDtipoAfiche) references tipoAfiche(IDtipo),
	foreign key (IDtipoEstado) references estadoActividad(IDestado),
	foreign key (IDplanTrabajo) references planTrabajo(IDplanTrabajo)
);

create table responsableActividad(
	IDprofesor int not null,
	IDactividad int not null
	foreign key (IDprofesor) references persona(IDpersona), 
	foreign key (IDactividad) references actividad(IDactividad)
);

create table observacionActividad(
	IDobservacion int not null IDENTITY(1,1),
	Fecha datetime,
	Observacion varchar(max) not null,
	IDactividad int not null
	primary key (IDobservacion) 
	foreign key (IDactividad) references actividad(IDactividad)
);

create table evidenciaActividad(
	IDevidencia int not null identity(1,1),
	Fotoparticipantes varchar(max),
	linkGrabacion varchar(max),
	IDactividad int not null
	primary key (IDevidencia)
	foreign key (IDactividad) references actividad(IDactividad)
);

create table comentario(
	IDcomentario int not null IDENTITY(1,1),
	IDpersona int not null,
	IDactividad int not null,
	IDcomentarioPadre int,
	Fecha DateTime,
	Contenido varchar(max)
	primary key (IDcomentario),
	foreign key (IDpersona) references persona(IDpersona),
	foreign key (IDactividad) references actividad(IDactividad),
	foreign key (IDcomentarioPadre) references comentario(IDcomentario)
);

create table notificacion (
	IDnotificacion int not null identity(1,1),
	Titulo varchar(max),
	Fecha datetime,
	Emisor int,
	NombreEmisor varchar(100),
	Contenido varchar(max),
	IDactividad int
	--IDchat int,
	primary key (IDnotificacion),
	foreign key (IDactividad) references actividad(IDactividad)
);

--drop table notificacion
create table notificacionUsuario(
	IDnotificacion int not null,
	IDpersona int not null,
	visto bit not null,
	foreign key (IDnotificacion) references notificacion(IDnotificacion),
	foreign key (IDpersona) references persona(IDpersona)
);
--drop table notificacionUsuario
create table grupoUsuario( -- Es la tabla que habilita o deshabilita el recibir notificacion TODO:  Cambiar nombre a uno mas significativo
	IDactividad int,
	--IDchat int,
	Habilitado bit not null,
	IDpersona int not null
	foreign key (IDpersona) references persona(IDpersona),
	foreign key (IDactividad) references actividad(IDactividad)
);
--Tabla de Chats
CREATE TABLE Chats (
  IDchat int not null,
  nombre VARCHAR(255) NOT NULL
  primary key (IDchat)
);

CREATE TABLE ParticipantesChat (
  IDParticipantesChat int not null,
  IDchats INT NOT NULL,
  IDpersona INT NOT NULL,
  primary key (IDParticipantesChat),
  FOREIGN KEY (IDchats) REFERENCES Chats(IDchat),
  FOREIGN KEY (IDpersona) REFERENCES persona(IDpersona)
);

CREATE TABLE Mensajes (
  IDMensajes int not null  ,
  IDchat INT NOT NULL,
  Emisor INT NOT NULL,
  Mensaje TEXT NOT NULL,
  Fecha datetime,
  primary key (IDMensajes),
  FOREIGN KEY (IDchat) REFERENCES Chats(IDchat),
  FOREIGN KEY (Emisor) REFERENCES persona(IDpersona)
);