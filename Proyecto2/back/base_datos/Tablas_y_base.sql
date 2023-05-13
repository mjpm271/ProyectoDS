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
	IDpersona int not null,
	NombreCompleto varchar(100),
	Correo varchar(100),
	Contra varchar(64),
	Foto varchar(100),
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
	IDcoordinador int not null
	primary key (IDplanTrabajo)
	foreign key (IDcoordinador) references persona(IDpersona)
);

create table actividad(
	IDactividad int not null IDENTITY(1,1),
	Semana int,
	Fecha datetime,
	Cantidaddiasprevios int,
	Cantidaddiasrequeridos int,
	FechaPublicacion date,
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
	observacion varchar(max) not null,
	IDactividad int not null
	primary key (IDobservacion) 
	foreign key (IDactividad) references actividad(IDactividad)
);

create table comentario(
	IDcomentario int not null IDENTITY(1,1),
	IDpersona int not null,
	IDactividad int not null,
	IDcomentarioPadre int,
	Hora time,
	Fecha date,
	Contenido varchar(max)
	primary key (IDcomentario),
	foreign key (IDpersona) references persona(IDpersona),
	foreign key (IDactividad) references actividad(IDactividad),
	foreign key (IDcomentarioPadre) references comentario(IDcomentario)
);
