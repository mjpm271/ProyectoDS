USE [master]
GO
/****** Object:  Database [proyecto]    Script Date: 15/6/2023 03:45:15 p. m. ******/
CREATE DATABASE [proyecto]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'proyecto', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\proyecto.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'proyecto_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\proyecto_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [proyecto] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [proyecto].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [proyecto] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [proyecto] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [proyecto] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [proyecto] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [proyecto] SET ARITHABORT OFF 
GO
ALTER DATABASE [proyecto] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [proyecto] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [proyecto] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [proyecto] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [proyecto] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [proyecto] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [proyecto] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [proyecto] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [proyecto] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [proyecto] SET  ENABLE_BROKER 
GO
ALTER DATABASE [proyecto] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [proyecto] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [proyecto] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [proyecto] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [proyecto] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [proyecto] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [proyecto] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [proyecto] SET RECOVERY FULL 
GO
ALTER DATABASE [proyecto] SET  MULTI_USER 
GO
ALTER DATABASE [proyecto] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [proyecto] SET DB_CHAINING OFF 
GO
ALTER DATABASE [proyecto] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [proyecto] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [proyecto] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [proyecto] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'proyecto', N'ON'
GO
ALTER DATABASE [proyecto] SET QUERY_STORE = OFF
GO
USE [proyecto]
GO
/****** Object:  Table [dbo].[actividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[actividad](
	[IDactividad] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](64) NULL,
	[Semana] [int] NULL,
	[Fecha] [datetime] NULL,
	[Cantidaddiasprevios] [int] NULL,
	[Cantidaddiasrequeridos] [int] NULL,
	[FechaPublicacion] [date] NULL,
	[Linkreunion] [varchar](max) NULL,
	[Afiche] [varchar](max) NULL,
	[IDmodalidad] [int] NOT NULL,
	[IDtipoActividad] [int] NOT NULL,
	[IDtipoAfiche] [int] NOT NULL,
	[IDtipoEstado] [int] NOT NULL,
	[IDplanTrabajo] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDactividad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chats]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chats](
	[IDchat] [int] NOT NULL,
	[nombre] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDchat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comentario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comentario](
	[IDcomentario] [int] IDENTITY(1,1) NOT NULL,
	[IDpersona] [int] NOT NULL,
	[IDactividad] [int] NOT NULL,
	[IDcomentarioPadre] [int] NULL,
	[Fecha] [datetime] NULL,
	[Contenido] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDcomentario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[equipoGuia]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[equipoGuia](
	[IDequipoGuia] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDequipoGuia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[equipoGuia_Profesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[equipoGuia_Profesor](
	[IDequipoGuia] [int] NOT NULL,
	[IDprofesor] [int] NOT NULL,
	[Habilitado] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estadoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estadoActividad](
	[IDestado] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDestado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[evidenciaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[evidenciaActividad](
	[IDevidencia] [int] IDENTITY(1,1) NOT NULL,
	[Fotoparticipantes] [varchar](max) NULL,
	[linkGrabacion] [varchar](max) NULL,
	[IDactividad] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDevidencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[grupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[grupoUsuario](
	[IDactividad] [int] NULL,
	[Habilitado] [bit] NOT NULL,
	[IDpersona] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mensajes]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mensajes](
	[IDMensajes] [int] IDENTITY(1,1) NOT NULL,
	[IDchat] [int] NOT NULL,
	[Emisor] [int] NOT NULL,
	[Mensaje] [text] NOT NULL,
	[Fecha] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IDMensajes] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[modalidad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[modalidad](
	[IDmodalidad] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDmodalidad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notificacion](
	[IDnotificacion] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [varchar](max) NULL,
	[Fecha] [datetime] NULL,
	[Emisor] [int] NULL,
	[NombreEmisor] [varchar](100) NULL,
	[Contenido] [varchar](max) NULL,
	[IDactividad] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IDnotificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notificacionUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notificacionUsuario](
	[IDnotificacion] [int] NOT NULL,
	[IDpersona] [int] NOT NULL,
	[visto] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[observacionActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[observacionActividad](
	[IDobservacion] [int] IDENTITY(1,1) NOT NULL,
	[Fecha] [datetime] NULL,
	[Observacion] [varchar](max) NOT NULL,
	[IDactividad] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDobservacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ParticipantesChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParticipantesChat](
	[IDParticipantesChat] [int] IDENTITY(1,1) NOT NULL,
	[IDchats] [int] NOT NULL,
	[IDpersona] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDParticipantesChat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[IDpersona] [int] IDENTITY(1,1) NOT NULL,
	[Carnet] [varchar](64) NOT NULL,
	[NombreCompleto] [varchar](100) NULL,
	[Correo] [varchar](100) NULL,
	[Contra] [varchar](64) NULL,
	[Foto] [varchar](max) NULL,
	[Habilitado] [bit] NOT NULL,
	[Coordinador] [bit] NOT NULL,
	[Telefono] [varchar](64) NULL,
	[TelefonoOficina] [varchar](64) NULL,
	[Sede] [int] NOT NULL,
	[IDtipo] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDpersona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[planTrabajo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[planTrabajo](
	[IDplanTrabajo] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
	[Abreviacion] [varchar](32) NOT NULL,
	[IDequipoGuia] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDplanTrabajo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[responsableActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[responsableActividad](
	[IDprofesor] [int] NOT NULL,
	[IDactividad] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sede](
	[IDsede] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
	[Abreviacion] [varchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDsede] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipoActividad](
	[IDtipo] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDtipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipoAfiche]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipoAfiche](
	[IDtipo] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDtipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipoPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipoPersona](
	[IDtipo] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDtipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[persona] ADD  CONSTRAINT [df_Habilitado]  DEFAULT ((1)) FOR [Habilitado]
GO
ALTER TABLE [dbo].[persona] ADD  CONSTRAINT [df_Coordinador]  DEFAULT ((0)) FOR [Coordinador]
GO
ALTER TABLE [dbo].[actividad]  WITH CHECK ADD FOREIGN KEY([IDmodalidad])
REFERENCES [dbo].[modalidad] ([IDmodalidad])
GO
ALTER TABLE [dbo].[actividad]  WITH CHECK ADD FOREIGN KEY([IDplanTrabajo])
REFERENCES [dbo].[planTrabajo] ([IDplanTrabajo])
GO
ALTER TABLE [dbo].[actividad]  WITH CHECK ADD FOREIGN KEY([IDtipoActividad])
REFERENCES [dbo].[tipoActividad] ([IDtipo])
GO
ALTER TABLE [dbo].[actividad]  WITH CHECK ADD FOREIGN KEY([IDtipoAfiche])
REFERENCES [dbo].[tipoAfiche] ([IDtipo])
GO
ALTER TABLE [dbo].[actividad]  WITH CHECK ADD FOREIGN KEY([IDtipoEstado])
REFERENCES [dbo].[estadoActividad] ([IDestado])
GO
ALTER TABLE [dbo].[comentario]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
ALTER TABLE [dbo].[comentario]  WITH CHECK ADD FOREIGN KEY([IDcomentarioPadre])
REFERENCES [dbo].[comentario] ([IDcomentario])
GO
ALTER TABLE [dbo].[comentario]  WITH CHECK ADD FOREIGN KEY([IDpersona])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[equipoGuia_Profesor]  WITH CHECK ADD FOREIGN KEY([IDequipoGuia])
REFERENCES [dbo].[equipoGuia] ([IDequipoGuia])
GO
ALTER TABLE [dbo].[equipoGuia_Profesor]  WITH CHECK ADD FOREIGN KEY([IDprofesor])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[evidenciaActividad]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
ALTER TABLE [dbo].[grupoUsuario]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
ALTER TABLE [dbo].[grupoUsuario]  WITH CHECK ADD FOREIGN KEY([IDpersona])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[Mensajes]  WITH CHECK ADD FOREIGN KEY([Emisor])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[Mensajes]  WITH CHECK ADD FOREIGN KEY([IDchat])
REFERENCES [dbo].[Chats] ([IDchat])
GO
ALTER TABLE [dbo].[notificacion]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
ALTER TABLE [dbo].[notificacionUsuario]  WITH CHECK ADD FOREIGN KEY([IDnotificacion])
REFERENCES [dbo].[notificacion] ([IDnotificacion])
GO
ALTER TABLE [dbo].[notificacionUsuario]  WITH CHECK ADD FOREIGN KEY([IDpersona])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[observacionActividad]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
ALTER TABLE [dbo].[ParticipantesChat]  WITH CHECK ADD FOREIGN KEY([IDchats])
REFERENCES [dbo].[Chats] ([IDchat])
GO
ALTER TABLE [dbo].[ParticipantesChat]  WITH CHECK ADD FOREIGN KEY([IDpersona])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD FOREIGN KEY([Sede])
REFERENCES [dbo].[sede] ([IDsede])
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD FOREIGN KEY([IDtipo])
REFERENCES [dbo].[tipoPersona] ([IDtipo])
GO
ALTER TABLE [dbo].[planTrabajo]  WITH CHECK ADD FOREIGN KEY([IDequipoGuia])
REFERENCES [dbo].[equipoGuia] ([IDequipoGuia])
GO
ALTER TABLE [dbo].[responsableActividad]  WITH CHECK ADD FOREIGN KEY([IDprofesor])
REFERENCES [dbo].[persona] ([IDpersona])
GO
ALTER TABLE [dbo].[responsableActividad]  WITH CHECK ADD FOREIGN KEY([IDactividad])
REFERENCES [dbo].[actividad] ([IDactividad])
GO
/****** Object:  StoredProcedure [dbo].[ActivarActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[ActivarActividad]
(
	@IDactividad int
)
as 
begin 
	update actividad
	set IDtipoEstado = 2
	where IDactividad = @IDactividad and IDtipoEstado = 1

end;
GO
/****** Object:  StoredProcedure [dbo].[ActivarGrupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ActivarGrupoUsuario]
(
    @IDactividad INT,
    @IDpersona INT,
	@Result int output

)
AS
BEGIN
    UPDATE grupoUsuario
    SET Habilitado = 1
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO
/****** Object:  StoredProcedure [dbo].[CancelarActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[CancelarActividad]
(
	@IDactividad int,
	@Result int output
)
as 
begin 
	update actividad
	set IDtipoEstado = 4
	where IDactividad = @IDactividad
	set @Result = 0
	select @Result
	return @Result
end;
GO
/****** Object:  StoredProcedure [dbo].[ChangePassword]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ChangePassword]
    @Carnet varchar(64),
    @NewPassword varchar(64)
AS
BEGIN
    UPDATE persona
    SET Contra = @NewPassword
    WHERE Carnet= @Carnet
END
GO
/****** Object:  StoredProcedure [dbo].[CreateActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateActividad] 
(
	@Nombre varchar(64),
    @Semana int,
    @Fecha datetime,
    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
	@LinkReunion varchar(max),
	@Afiche varchar(max),
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int,
	@Result int output
)
AS
BEGIN
	IF (select count(*) from actividad where Nombre = @Nombre and IDplanTrabajo = @IDplanTrabajo) >= 1
	BEGIN
		set @Result = 0
		select @Result
	END
	ELSE IF  (DATEDIFF(day, @FechaPublicacion, @Fecha) < 0)
	BEGIN 
		set @Result = 1
		select @Result
	END
	ELSE IF (DATEDIFF(day, @FechaPublicacion, @Fecha) < @Cantidaddiasrequeridos)
	BEGIN 
		set @Result = 2
		select @Result
	END
	ELSE
	BEGIN
		INSERT INTO actividad(Nombre, Semana, Fecha,Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, Linkreunion, Afiche, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo)
		VALUES (@Nombre, @Semana, @Fecha, @Cantidaddiasprevios, @Cantidaddiasrequeridos, @FechaPublicacion, @LinkReunion, @Afiche, @IDmodalidad, @IDtipoActividad, @IDtipoAfiche, @IDtipoEstado, @IDplanTrabajo)
		set @Result = 3
		select @Result
	END
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateChats]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CreateChats]
    @IDchat int,
    @nombre varchar(255)
AS
BEGIN
    INSERT INTO Chats (IDchat, nombre)
    VALUES (@IDchat, @nombre)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateComentario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- CREATE
CREATE PROCEDURE [dbo].[CreateComentario]
(
    @IDpersona int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Fecha DateTime,
    @Contenido varchar(max)
)
AS
BEGIN
    INSERT INTO comentario (IDpersona, IDactividad, IDcomentarioPadre,  Fecha, Contenido)
    VALUES (@IDpersona, @IDactividad, @IDcomentarioPadre, @Fecha, @Contenido)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateEquipoGuia]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateEquipoGuia]
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
/****** Object:  StoredProcedure [dbo].[CreateEquipoGuiaProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateEquipoGuiaProfesor]
    @Nombre varchar(32),
    @Carnet varchar(64),
	@Result int output
AS
BEGIN
	declare @IDprofesor as int 
	declare @IDequipoGuia as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

	if ((select count(*) from persona where @IDprofesor in (select IDpersona from persona where Coordinador = 1)) > 0)
	begin
		set @Result = 1
		select @Result
		return @Result
	end

	if ((select count(*) from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia) = 5)
	begin
		set @Result = 2
		select @Result
		return @Result
	end

	if ((select count(*) from persona where IDpersona = @IDprofesor and Sede in (select Sede from persona where IDpersona in (select IDprofesor from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia))) > 0)
	begin
		set @Result = 3
		select @Result
		return @Result
	end
	
    INSERT INTO EquipoGuia_Profesor (IDequipoGuia, IDprofesor, Habilitado)
    VALUES (@IDequipoGuia, @IDprofesor, 1);
	set @Result = 0
	select @Result
	return @Result
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateEstadoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateEstadoActividad]
    @Nombre varchar(32)
AS
BEGIN
    INSERT INTO estadoActividad (Nombre)
    VALUES (@Nombre)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateEvidenciaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateEvidenciaActividad]
    @Fotoparticipantes varchar(max),
    @linkGrabacion varchar(max),
    @IDactividad int
AS
BEGIN
    INSERT INTO evidenciaActividad (Fotoparticipantes, Linkgrabacion, IDactividad)
    VALUES (@Fotoparticipantes, @linkGrabacion, @IDactividad)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateGrupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateGrupoUsuario]
(
    @IDactividad INT,
    --@IDchat INT,
    @Habilitado BIT,
    @IDpersona INT
)
AS
BEGIN
    INSERT INTO grupoUsuario (IDactividad, Habilitado, IDpersona)
    VALUES (@IDactividad, @Habilitado, @IDpersona)
END
GO
/****** Object:  StoredProcedure [dbo].[CreateMensaje]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateMensaje]
(
    @IDchat int,
    @CarnetEmisor varchar(64),
    @Mensaje VARCHAR(MAX),
    @Fecha datetime
)
AS
BEGIN
	declare @IDpersona as int 
	set @IDpersona = (select top 1 IDpersona from persona where Carnet = @CarnetEmisor);
    INSERT INTO Mensajes (IDchat, Emisor, Mensaje, Fecha)
    VALUES ( @IDchat, @IDpersona, CAST(@Mensaje AS TEXT), @Fecha);
END
GO
/****** Object:  StoredProcedure [dbo].[CreateModalidad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateModalidad]
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO modalidad (Nombre)
    VALUES ( @Nombre);
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateNotificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateNotificacion]
(
    @Titulo VARCHAR(MAX),
    @Fecha DATETIME,
    @Emisor INT,
	@NombreEmisor VARCHAR(100),
    @Contenido VARCHAR(MAX),
    @IDactividad INT
	--@IDchat
)
AS
BEGIN
    INSERT INTO notificacion (Titulo, Fecha, Emisor,NombreEmisor, Contenido, IDactividad)
    VALUES (@Titulo, @Fecha, @Emisor,@NombreEmisor, @Contenido, @IDactividad)
END
GO
/****** Object:  StoredProcedure [dbo].[CreateNotificacionUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateNotificacionUsuario]
(
    @IDnotificacion INT,
    @IDpersona INT
)
AS
BEGIN
    INSERT INTO notificacionUsuario (IDnotificacion, IDpersona, visto)
    VALUES (@IDnotificacion, @IDpersona, 0)
END
GO
/****** Object:  StoredProcedure [dbo].[CreateObservacionActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateObservacionActividad]
(
	@Fecha datetime,
    @Observacion varchar(max),
    @IDactividad int
)
AS
BEGIN
    INSERT INTO observacionActividad (Fecha, Observacion, IDactividad)
    VALUES (@Fecha, @Observacion, @IDactividad)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateParticipanteChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

------

CREATE PROCEDURE [dbo].[CreateParticipanteChat]
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
GO
/****** Object:  StoredProcedure [dbo].[CreatePersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CreatePersona]
	@ID varchar(64),
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(max),
    @Habilitado bit,
    @Coordinador bit,
	@Telefono varchar(64),
	@TelefonoOficina varchar(64),
    @Sede int,
    @IDtipo int,
	@Result int output
AS
BEGIN
	IF (select count(*) from persona where Carnet = @ID) = 1
	BEGIN 
		set @Result = 1;
		select @Result;
		return @Result
	END
		IF (select count(*) from persona where Correo = @Correo) = 1
	BEGIN 
		set @Result = 2;
		select @Result;
		return @Result
	END
	ELSE
	BEGIN
		INSERT INTO persona (Carnet, NombreCompleto, Correo, Contra, Foto, Habilitado, Coordinador, Telefono, TelefonoOficina, Sede, IDtipo)
		VALUES (@ID, @NombreCompleto, @Correo, @Contra,@Foto, @Habilitado, @Coordinador, @Telefono,@TelefonoOficina ,@Sede, @IDtipo)
		set @Result = 0;
		select @Result
		return @Result
	END	
END;
GO
/****** Object:  StoredProcedure [dbo].[CreatePlanTrabajo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreatePlanTrabajo]
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
	if ((select count(*) from equipoGuia where IDequipoGuia = @IDequipoGuia) = 0)
	begin
		set @Result = 2
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
/****** Object:  StoredProcedure [dbo].[CreateResponsableActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateResponsableActividad] 
    @Carnet varchar(64),
    @IDactividad int
AS
BEGIN
	DECLARE @IDprofesor as int
	SET @IDprofesor = (select IDpersona from persona where Carnet = @Carnet)

    INSERT INTO responsableActividad(IDprofesor, IDactividad)
    VALUES(@IDprofesor, @IDactividad)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateSede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateSede]
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(10)
AS
BEGIN
    INSERT INTO sede (Nombre, Abreviacion)
    VALUES (@Nombre, @Abreviacion);
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateTipoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateTipoActividad]
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO tipoActividad (Nombre)
    VALUES (@Nombre);
END
GO
/****** Object:  StoredProcedure [dbo].[CreateTipoAfiche]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateTipoAfiche]
    @Nombre varchar(32)
AS
BEGIN
    INSERT INTO tipoAfiche (Nombre)
    VALUES (@Nombre)
END;
GO
/****** Object:  StoredProcedure [dbo].[CreateTipoPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateTipoPersona]
    @Nombre VARCHAR(32)
AS
BEGIN
    INSERT INTO tipoPersona (Nombre)
    VALUES (@Nombre);
END;
GO
/****** Object:  StoredProcedure [dbo].[DefinirCoordinador]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DefinirCoordinador]
    @Carnet varchar(64),
	@Nombre varchar(64),
	@Result int output
AS
BEGIN
	declare @IDprofesor as int 
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	declare @IDequipoGuia as int
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

	if ((select count(*) from equipoGuia_Profesor where IDprofesor = @IDprofesor) != 1)
	begin
		set @Result = 1
		select @Result
		return @Result
	end

	if ((select count(*) from persona where Coordinador = 1 and IDpersona in (select IDprofesor from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia)) > 0)
	begin
		set @Result = 2
		select @Result
		return @Result
	end

	if (@IDprofesor not in (select IDprofesor from equipoGuia_Profesor where IDequipoGuia = @IDequipoGuia))
	begin
		set @Result = 3
		select @Result
		return @Result
	end

    UPDATE persona
    SET Coordinador = 1
    WHERE Carnet = @Carnet and Habilitado = 1
	set @Result = 0
	select @Result
	return @Result
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteActividad] 
(
    @IDactividad int
)
AS
BEGIN
    DELETE FROM actividad 
	WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteBuzon]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteBuzon]
(
    @IDpersona INT
)
AS
BEGIN
    DELETE FROM notificacionUsuario
    WHERE IDpersona = @IDpersona
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DeleteChat]
(
    @IDchat int
)
AS
BEGIN
    DELETE FROM Chats WHERE IDchat = @IDchat;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteComentario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- DELETE
CREATE PROCEDURE [dbo].[DeleteComentario] 
(
    @IDcomentario int
)
AS
BEGIN
    DELETE FROM comentario 
	WHERE IDcomentario = @IDcomentario
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteEquipoGuia]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE [dbo].[DeleteEquipoGuia]
    @Nombre varchar(32)
AS
BEGIN
    DELETE FROM equipoGuia 
	WHERE Nombre = @Nombre;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteEstadoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteEstadoActividad]
    @IDestado int
AS
BEGIN
    DELETE FROM estadoActividad
    WHERE IDestado = @IDestado
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteEvidenciaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteEvidenciaActividad]
    @IDevidencia int
AS
BEGIN
    DELETE FROM evidenciaActividad
    WHERE IDevidencia = @IDevidencia
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteMensaje]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteMensaje]
(
    @IDMensajes int
)
AS
BEGIN
    DELETE FROM Mensajes WHERE IDMensajes = @IDMensajes;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteModalidad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteModalidad]
    @IDmodalidad INT
AS
BEGIN
    DELETE FROM modalidad 
	WHERE IDmodalidad = @IDmodalidad;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteNotificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteNotificacion]
(
    @IDnotificacion INT
)
AS
BEGIN
    DELETE FROM notificacion
    WHERE IDnotificacion = @IDnotificacion
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteNotificacionUsuarioID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteNotificacionUsuarioID]
(
    @IDnotificacion INT,
	@IDpersona INT
)
AS
BEGIN
    DELETE FROM notificacionUsuario
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteObservacionActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteObservacionActividad] 
(
    @IDobservacion int
)
AS
BEGIN
    DELETE FROM observacionActividad WHERE IDobservacion = @IDobservacion
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteParticipanteChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteParticipanteChat]
(
    @IDParticipantesChat int
)
AS
BEGIN
    DELETE FROM ParticipantesChat WHERE IDParticipantesChat = @IDParticipantesChat;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeletePlanTrabajo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DeletePlanTrabajo] 
(
    @IDplanTrabajo int
)
AS
BEGIN
    DELETE FROM planTrabajo WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteResponsableActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteResponsableActividad] 
    @IDprofesor int, 
    @IDactividad int
AS
BEGIN
    DELETE FROM responsableActividad
    WHERE IDprofesor = @IDprofesor AND IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteSede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DeleteSede]
    @IDsede INT
AS
BEGIN
    DELETE FROM sede 
	WHERE IDsede = @IDsede;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteTipoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DeleteTipoActividad]
    @IDtipo INT
AS
BEGIN
    DELETE FROM tipoActividad 
	WHERE IDtipo = @IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[DeleteTipoAfiche]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DeleteTipoAfiche]
    @IDtipo int
AS
BEGIN
    DELETE FROM tipoAfiche
    WHERE IDtipo = @IDtipo
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteTipoPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DeleteTipoPersona]
    @IDtipo INT
AS
BEGIN
    DELETE FROM tipoPersona 
	WHERE IDtipo = @IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[DesactivarGrupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DesactivarGrupoUsuario]
(
    @IDactividad INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE grupoUsuario
    SET Habilitado = 0
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO
/****** Object:  StoredProcedure [dbo].[DesverNotificacionUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DesverNotificacionUsuario]
(
    @IDnotificacion INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE notificacionUsuario
    SET visto = 0
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO
/****** Object:  StoredProcedure [dbo].[HabilitarPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[HabilitarPersona]
    @Carnet varchar(64)
AS
BEGIN
	UPDATE persona
    SET Habilitado = 1
	WHERE Carnet = @Carnet;
END;
GO
/****** Object:  StoredProcedure [dbo].[HabilitarProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[HabilitarProfesor]
    @Carnet varchar(64),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

	declare @IDprofesor as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
    
	UPDATE EquipoGuia_Profesor
    SET Habilitado = 1
    WHERE IDprofesor = @IDprofesor;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[InhabilitarPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InhabilitarPersona]
    @Carnet varchar(64)
AS
BEGIN
	UPDATE persona
    SET Habilitado = 0
	WHERE Carnet = @Carnet;
END;
GO
/****** Object:  StoredProcedure [dbo].[InhabilitarProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InhabilitarProfesor]
    @Carnet varchar(64)
AS
BEGIN
	declare @IDprofesor as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
    UPDATE EquipoGuia_Profesor
    SET Habilitado = 0
    WHERE IDprofesor = @IDprofesor;
END;
GO
/****** Object:  StoredProcedure [dbo].[LoginUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[LoginUsuario]
  @Correo VARCHAR(50),
  @Contra VARCHAR(50),
  @Exito INT OUTPUT
AS
BEGIN
  -- Verificar las credenciales de inicio de sesión
  IF EXISTS (SELECT * FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1)
  BEGIN
    -- Credenciales válidas
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 1 AND Coordinador = 1)
		BEGIN
		 SET @Exito = 1; -- Entra Coordinador
		END
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 1 AND Coordinador = 0)
		BEGIN
		 SET @Exito = 2; --Entra Profesor
		END

	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 2)
		BEGIN
		 SET @Exito = 3; --Entra Asistente
		END
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 2 AND Sede =1)
		BEGIN
		 SET @Exito = 4; --Entra Asistente de Cartago
		END
	
	IF EXISTS (SELECT 1 FROM Persona WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1 AND IDtipo = 3)
		BEGIN
		 SET @Exito = 5; --Entra Estudiante (OPCION INVALIDA POR EL MOMENTO)
		END
	SELECT * FROM Persona WHERE Correo = @Correo AND Contra = @Contra
  END
  ELSE
  BEGIN
    -- Credenciales inválidas, establecer el estado de inicio de sesión diferente de 0 (error)
    SET @Exito = 6;
  END
  
END

--DROP PROCEDURE LoginUsuario
GO
/****** Object:  StoredProcedure [dbo].[NumeroRecordatorio]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[NumeroRecordatorio]
	@FechaSistema DATE,
	@FechaActividad DATETIME,
	@DiasRequeridos INT,
	@Result INT OUTPUT --Numero de Recordatorio
AS
BEGIN
	DECLARE @FechaPrimerRecordatorio DATE
	SET @FechaPrimerRecordatorio =  CONVERT(DATE, DATEADD(DAY, -@DiasRequeridos, @FechaActividad))
	--Se determina si la fecha de sistema corresponde a una de las fechas para recordatorio
	IF @FechaSistema >= @FechaPrimerRecordatorio AND @FechaSistema <= CONVERT(DATE,@FechaActividad)
		--Si la fecha coincide con una fecha de recordatorio entonces:
			--Determina numero de recordatorio a notificar (X)
		BEGIN
		SET @Result = DATEDIFF(day, @FechaSistema, @FechaActividad) 
		END
	ELSE
		BEGIN
		SET @Result = -1
		END
	SELECT @Result 
	RETURN @Result
END
GO
/****** Object:  StoredProcedure [dbo].[ReadActividades]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividades]
AS
BEGIN
    SELECT * 
	FROM actividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadesporfecha]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividadesporfecha]
	@FechaActual DATETIME
AS
BEGIN
    SELECT TOP 1 * 
	FROM actividad
	WHERE Fecha >= @FechaActual and (IDtipoEstado = 1 or IDtipoEstado = 2)
	ORDER BY Fecha ASC
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadesporPlan]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividadesporPlan]
	@IDplanTrabajo INT
AS
BEGIN
    SELECT * 
	FROM actividad
	WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadesPublicadas]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[ReadActividadesPublicadas]
AS
BEGIN
    SELECT * 
	FROM actividad
	WHERE IDtipoEstado = 2
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadesUpdate]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividadesUpdate]
(
	@Fecha date
)
AS
BEGIN
    SELECT IDactividad, IDtipoEstado, Fecha, Cantidaddiasrequeridos, Nombre
	FROM actividad
	WHERE DATEDIFF(day, FechaPublicacion, @Fecha) >= 0 and (IDtipoEstado = 1 or IDtipoEstado = 2)
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividadPorID] -- Tiene que ser nombre de actividad pero a su vez por plan pues en diferentes planes pueden el mismo nombre ej: ac.1 plan 1 y ac.2 plan 2
(
    @Nombre varchar(64),
	@IDplanTrabajo int
)
AS
BEGIN
    SELECT * 
	FROM actividad 
	WHERE Nombre = @Nombre and IDplanTrabajo = @IDplanTrabajo
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadActividadPorIDActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadActividadPorIDActividad] -- Se agarra el id actividad entonces fresco
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM actividad 
	WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadChatByID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[ReadChatByID]
(
    @IDchat int
)
AS
BEGIN
    SELECT * FROM Chats WHERE IDchat = @IDchat;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadChats]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadChats]
AS
BEGIN
    SELECT * FROM Chats;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadComentarioPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- READ
CREATE PROCEDURE [dbo].[ReadComentarioPorID] 
(
    @IDcomentario int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDcomentario = @IDcomentario
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadComentarioPorIDactividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadComentarioPorIDactividad]
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadComentarioPorIDpadre]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadComentarioPorIDpadre]
(
    @IDcomentarioPadre int
)
AS
BEGIN
    SELECT * 
	FROM comentario 
	WHERE IDcomentarioPadre = @IDcomentarioPadre
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadComentarios]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadComentarios]
AS
BEGIN
    SELECT * 
	FROM comentario
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEquipoGuia]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEquipoGuia]
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEquipoGuiaPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEquipoGuiaPorID] -- Por nombre no tiene sentido ID pero cambiar el nombre del procedure afecta mucho
    @Nombre varchar(32)
AS
BEGIN
    SELECT IDequipoGuia, Nombre 
	FROM equipoGuia 
	WHERE Nombre = @Nombre;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEquipoGuiaProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEquipoGuiaProfesor]
AS
BEGIN
    SELECT *
	FROM EquipoGuia_Profesor 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEquipoGuiaProfesorPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[ReadEquipoGuiaProfesorPorID] -- ID del equipo no del profesor
    @Nombre VARCHAR(64)
AS
BEGIN
	DECLARE @IDequipoGuia AS INT
	SET @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre)
    SELECT p.*  
	FROM EquipoGuia_Profesor as eq, persona as p
	WHERE IDequipoGuia = @IDequipoGuia and eq.IDprofesor = p.IDpersona
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEquipoGuiaProfesorPorProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEquipoGuiaProfesorPorProfesor]
    @Nombre varchar(32),
    @Carnet varchar(64)
AS
BEGIN
	declare @IDprofesor as int 
	declare @IDequipoGuia as int
	set @IDprofesor = (select top 1 IDpersona from persona where Carnet = @Carnet);
	set @IDequipoGuia = (select top 1 IDequipoGuia from equipoGuia where Nombre = @Nombre);

    SELECT p.*  
	FROM EquipoGuia_Profesor as eq, persona as p
	WHERE p.IDpersona = @IDprofesor and IDequipoGuia = @IDequipoGuia 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEstadoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEstadoActividad]
AS
BEGIN
    SELECT IDestado, Nombre
	FROM estadoActividad;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEstadoActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEstadoActividadPorID]
    @IDestado int
AS
BEGIN
    SELECT IDestado, Nombre
	FROM estadoActividad
    WHERE IDestado = @IDestado
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEstudianteporAlf]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEstudianteporAlf] 
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY NombreCompleto ASC 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEstudianteporCarnet]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEstudianteporCarnet]     
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE IDtipo = 3
	ORDER BY Carnet ASC 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEstudianteporSede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEstudianteporSede]
	@Sede INT
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Telefono, Sede, IDtipo  
	FROM persona 
	WHERE Sede = @Sede and IDtipo = 3
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadEvidenciaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEvidenciaActividad]
    @IDevidencia int
AS
BEGIN
    SELECT *
    FROM evidenciaActividad
    WHERE IDevidencia = @IDevidencia
END
GO
/****** Object:  StoredProcedure [dbo].[ReadEvidenciaActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadEvidenciaActividadPorID]
    @IDactividad int
AS
BEGIN
    SELECT *
    FROM evidenciaActividad
    WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadGrupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadGrupoUsuario]
(
    @IDactividad INT,
    @IDpersona INT
)
AS
BEGIN
    SELECT *
    FROM grupoUsuario
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
END
GO
/****** Object:  StoredProcedure [dbo].[ReadGrupoUsuarioporID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadGrupoUsuarioporID]
(
    @IDactividad INT
)
AS
BEGIN
    SELECT IDpersona
    FROM grupoUsuario
    WHERE IDactividad = @IDactividad AND Habilitado = 1
END
GO
/****** Object:  StoredProcedure [dbo].[ReadHabilitadoGrupoUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadHabilitadoGrupoUsuario]
(
    @IDactividad INT,
    @IDpersona INT
)
AS
BEGIN
    SELECT Habilitado
    FROM grupoUsuario
    WHERE IDactividad = @IDactividad AND IDpersona = @IDpersona
END
GO
/****** Object:  StoredProcedure [dbo].[ReadMensajes]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadMensajes]
AS
BEGIN
    SELECT * FROM Mensajes;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadMensajesByIDChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadMensajesByIDChat]
	@IDchat int
AS
BEGIN
    SELECT M.IDchat, M.Emisor, M.Mensaje, M.Fecha , P.NombreCompleto FROM Mensajes M 
	INNER JOIN Persona P ON P.IDpersona = M.Emisor
	WHERE IDchat =@IDchat;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadModalidades]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadModalidades]
AS
BEGIN
    SELECT IDmodalidad, Nombre 
	FROM modalidad;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadModalidadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadModalidadPorID]
    @IDmodalidad INT
AS
BEGIN
    SELECT IDmodalidad, Nombre 
	FROM modalidad 
	WHERE IDmodalidad = @IDmodalidad;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadNombreActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadNombreActividad]
(
    @IDactividad int
)
AS
BEGIN
    SELECT Nombre
	FROM actividad 
	WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadNotificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Drop procedure CreateNotificacion
CREATE PROCEDURE [dbo].[ReadNotificacion]
(
    @IDnotificacion INT
)
AS
BEGIN
    SELECT *
    FROM notificacion
    WHERE IDnotificacion = @IDnotificacion
END
GO
/****** Object:  StoredProcedure [dbo].[ReadNotificaciones]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadNotificaciones]
AS
BEGIN
    SELECT *
    FROM notificacion
END
GO
/****** Object:  StoredProcedure [dbo].[ReadNotificacionesUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadNotificacionesUsuario]
(
    @IDpersona INT
)
AS
BEGIN
    SELECT N.Titulo, N.Fecha, N.Emisor, N.IDactividad, N.Contenido
    FROM notificacionUsuario as NU 
    INNER JOIN notificacion as N
    ON NU.IDnotificacion = N.IDnotificacion
    INNER JOIN persona as p 
    ON NU.IDpersona = p.IDpersona 
	WHERE NU.IDpersona = @IDpersona
    ORDER BY N.Fecha DESC
END
GO
/****** Object:  StoredProcedure [dbo].[ReadNotificacionesUsuarioPorTitulo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadNotificacionesUsuarioPorTitulo]
(
    @IDpersona INT

)
AS
BEGIN
    SELECT N.Titulo , N.IDnotificacion, NU.visto
    FROM notificacionUsuario as NU 
    INNER JOIN notificacion as N
    ON NU.IDnotificacion = N.IDnotificacion
    INNER JOIN persona as p 
    ON NU.IDpersona = p.IDpersona 
	WHERE NU.IDpersona = @IDpersona
    ORDER BY N.Fecha DESC
END
GO
/****** Object:  StoredProcedure [dbo].[ReadObservacionActividades]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadObservacionActividades]
AS
BEGIN
    SELECT * 
	FROM observacionActividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadObservacionActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadObservacionActividadPorID] 
(
    @IDactividad int
)
AS
BEGIN
    SELECT * 
	FROM observacionActividad 
	WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadParticipanteChatByID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadParticipanteChatByID]
(
    @IDParticipantesChat int
)
AS
BEGIN
    SELECT * FROM ParticipantesChat WHERE IDParticipantesChat = @IDParticipantesChat;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadParticipanteChatPorCarnet]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadParticipanteChatPorCarnet]
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
GO
/****** Object:  StoredProcedure [dbo].[ReadParticipanteChatPorIDchat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadParticipanteChatPorIDchat]
(
   @IDchat int
)
AS
BEGIN
    SELECT * FROM ParticipantesChat WHERE IDchats =@IDchat;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadParticipantesChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadParticipantesChat]
AS
BEGIN
    SELECT * FROM ParticipantesChat;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPersonaPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPersonaPorID]
    @Carnet varchar(64)
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo  
	FROM persona 
	WHERE Carnet = @Carnet;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPersonaPorIDTipo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPersonaPorIDTipo]
    @IDtipo INT
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo
	FROM persona 
	WHERE IDtipo = @IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPersonas]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPersonas]
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto, Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo 
	FROM persona;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPersonasSoloID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPersonasSoloID]
AS
BEGIN
    SELECT IDpersona
	FROM persona;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPlanTrabajoPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPlanTrabajoPorID] 
(
    @IDplanTrabajo int
)
AS
BEGIN
    SELECT * FROM planTrabajo 
	WHERE IDplanTrabajo = @IDplanTrabajo
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadPlanTrabajos]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadPlanTrabajos]
AS
BEGIN
    SELECT * FROM planTrabajo
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadProfesor]
    @Carnet varchar(64)
AS
BEGIN
    SELECT Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono,TelefonoOficina, Sede, IDtipo  
	FROM persona 
	WHERE Carnet = @Carnet and IDtipo = 1;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadResponsableActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadResponsableActividad] 
AS
BEGIN
    SELECT * FROM responsableActividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadResponsableActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadResponsableActividadPorID] 
    @IDactividad int
AS
BEGIN
    SELECT * 
	FROM responsableActividad
    WHERE IDactividad = @IDactividad
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadResponsableActividadProfesor]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadResponsableActividadProfesor] 
  @IDactividad int
AS
BEGIN
    SELECT p.* 
    FROM responsableActividad as ra, persona as p
	  WHERE ra.IDactividad = @IDactividad and ra.IDprofesor = p.IDpersona

END;
GO
/****** Object:  StoredProcedure [dbo].[ReadSede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadSede]
AS
BEGIN
    SELECT IDsede, Nombre, Abreviacion
	FROM sede 
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadSedePorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadSedePorID]
    @IDsede INT
AS
BEGIN
    SELECT IDsede, Nombre, Abreviacion
	FROM sede 
	WHERE IDsede = @IDsede;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadTipoActividadPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTipoActividadPorID]
    @IDtipo INT
AS
BEGIN
    SELECT IDtipo, Nombre 
	FROM tipoActividad 
	WHERE IDtipo = @IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadTipoAfiche]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTipoAfiche]
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM TipoAfiche;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadTipoAfichePorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTipoAfichePorID]
    @IDtipo int
AS
BEGIN
    SELECT IDtipo, Nombre  
	FROM tipoAfiche
    WHERE IDtipo = @IDtipo
END
GO
/****** Object:  StoredProcedure [dbo].[ReadTipoPersonaPorID]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTipoPersonaPorID]
    @IDtipo INT
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoPersona 
	WHERE IDtipo = @IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadTiposActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTiposActividad]
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoActividad;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadTiposPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadTiposPersona]
AS
BEGIN
    SELECT IDtipo, Nombre
	FROM tipoPersona;
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadUltimaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadUltimaActividad]
AS
BEGIN
    SELECT top 1 IDactividad
	FROM actividad
	ORDER BY IDactividad DESC
END;
GO
/****** Object:  StoredProcedure [dbo].[ReadUltimaNotificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[ReadUltimaNotificacion]
AS
BEGIN
    SELECT top 1 * 
	FROM Notificacion
	ORDER BY IDnotificacion DESC
END;
GO
/****** Object:  StoredProcedure [dbo].[RealizarActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[RealizarActividad]
(
	@IDactividad int,
	@Result int output
)
as 
begin 
	update actividad
	set IDtipoEstado = 3
	where IDactividad = @IDactividad
	set @Result = 0
	select @Result
	return @Result
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_LoginPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_LoginPersona]
    @Correo VARCHAR(100),
    @Contra VARCHAR(64),
    @Exito BIT OUTPUT,
    @IDtipo INT OUTPUT,
    @IDpersona INT OUTPUT,
    @NombreCompleto VARCHAR(100) OUTPUT,
    @Coordinador BIT OUTPUT,
    @Sede INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @RowCount INT;

    SELECT @IDpersona = IDpersona,
           @NombreCompleto = NombreCompleto,
           @Correo = Correo,
           @Coordinador = Coordinador,
           @Sede = Sede,
           @IDtipo = IDtipo
    FROM Persona
    WHERE Correo = @Correo AND Contra = @Contra AND Habilitado = 1;

    SET @RowCount = @@ROWCOUNT;

    IF @RowCount > 0
        SET @Exito = 1;
    ELSE
    BEGIN
        SET @Exito = 0;
        SET @IDtipo = NULL;
        SET @IDpersona = NULL;
        SET @NombreCompleto = NULL;
        SET @Coordinador = NULL;
        SET @Sede = NULL;
    END

    SELECT @Exito AS Exito, @IDpersona AS IDpersona, @NombreCompleto AS NombreCompleto, @Correo AS Correo, @Coordinador AS Coordinador, @Sede AS Sede, @IDtipo AS IDtipo;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateActividad2]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateActividad2]
(
    @IDactividad int,
	@Nombre varchar(64),
    @Semana int,
    @Fecha datetime,
    @Cantidaddiasprevios int,
    @Cantidaddiasrequeridos int,
    @FechaPublicacion date,
	@Linkreunion varchar(64),
	@Afiche varchar(64),
    @IDmodalidad int,
    @IDtipoActividad int,
    @IDtipoAfiche int,
    @IDtipoEstado int,
    @IDplanTrabajo int,
    @Exito bit OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa bit;

    UPDATE actividad 
    SET Nombre = @Nombre,
		Semana = @Semana,
        Fecha = @Fecha,
        Cantidaddiasprevios = @Cantidaddiasprevios,
        Cantidaddiasrequeridos = @Cantidaddiasrequeridos,
        FechaPublicacion = @FechaPublicacion,
		Linkreunion = @Linkreunion,
		Afiche = @Afiche,
        IDmodalidad = @IDmodalidad,
        IDtipoActividad = @IDtipoActividad,
        IDtipoAfiche = @IDtipoAfiche,
        IDtipoEstado = @IDtipoEstado,
        IDplanTrabajo = @IDplanTrabajo
    WHERE IDactividad = @IDactividad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateChat]
(
    @IDchat int,
    @nuevoNombre varchar(255)
)
AS
BEGIN
    UPDATE Chats SET nombre = @nuevoNombre WHERE IDchat = @IDchat;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateComentario1]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- UPDATE
CREATE PROCEDURE [dbo].[UpdateComentario1]
(
    @IDcomentario int,
    @IDpersona int,
    @IDactividad int,
    @IDcomentarioPadre int,
    @Fecha DateTime,
    @Contenido varchar(max),
    @Exito bit OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa bit;

    UPDATE comentario 
    SET IDpersona = @IDpersona,
        IDactividad = @IDactividad,
        IDcomentarioPadre = @IDcomentarioPadre,
        Fecha = @Fecha,
        Contenido = @Contenido
    WHERE IDcomentario = @IDcomentario;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateEquipoGuia]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEquipoGuia]
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
/****** Object:  StoredProcedure [dbo].[UpdateEstadoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateEstadoActividad]
    @IDestado INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE estadoActividad
    SET Nombre = @Nombre
    WHERE IDestado = @IDestado;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateEvidenciaActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEvidenciaActividad]
    @Fotoparticipantes varchar(max),
    @linkGrabacion varchar(max),
    @IDactividad int
AS
BEGIN
    UPDATE evidenciaActividad
    SET Fotoparticipantes = @Fotoparticipantes,
        Linkgrabacion = @linkGrabacion
    where IDactividad = @IDactividad
END
GO
/****** Object:  StoredProcedure [dbo].[UpdateMensaje]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateMensaje]
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
GO
/****** Object:  StoredProcedure [dbo].[UpdateModalidad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateModalidad]
    @IDmodalidad INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE modalidad
    SET Nombre = @Nombre
    WHERE IDmodalidad = @IDmodalidad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateNotificacion]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateNotificacion]
(
    @IDnotificacion INT,
    @Titulo VARCHAR(MAX),
    @Fecha DATETIME,
    @Emisor INT,
    @Contenido VARCHAR(MAX),
    @IDactividad INT
)
AS
BEGIN
    UPDATE notificacion
    SET Titulo = @Titulo,
        Fecha = @Fecha,
        Emisor = @Emisor,
        Contenido = @Contenido,
        IDactividad = @IDactividad
    WHERE IDnotificacion = @IDnotificacion
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateObservacionActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateObservacionActividad] 
(
	@Fecha datetime, 
    @Observacion VARCHAR(MAX),
    @IDactividad INT,
    @Exito BIT OUTPUT
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE observacionActividad 
    SET Fecha = @Fecha, Observacion = @Observacion
    WHERE IDactividad = @IDactividad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateParticipanteChat]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateParticipanteChat]
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
GO
/****** Object:  StoredProcedure [dbo].[UpdatePersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdatePersona]
    @Carnet varchar(64),
    @NombreCompleto varchar(100),
    @Correo varchar(100),
    @Contra varchar(64),
	@Foto varchar(max),
    @Habilitado bit,
    @Coordinador bit,
	@Telefono varchar(64),
	@TelefonoOficina varchar(64),
    @Sede int,
    @IDtipo int,
    @Exito bit OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @ActualizacionExitosa bit;
    UPDATE persona
    SET NombreCompleto = @NombreCompleto,
        Correo = @Correo,
        Contra = @Contra,
		Foto=@Foto,
        Habilitado = @Habilitado,
        Coordinador = @Coordinador,
        Telefono = @Telefono,
		TelefonoOficina=@TelefonoOficina,
        Sede = @Sede,
        IDtipo = @IDtipo
    WHERE Carnet = @Carnet;
    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1; -- Éxito
    ELSE
        SET @ActualizacionExitosa = 0; -- Falla

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdatePlanTrabajo]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdatePlanTrabajo]
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
/****** Object:  StoredProcedure [dbo].[UpdateResponsableActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateResponsableActividad] 
    @IDprofesor INT, 
    @IDactividad INT,
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE responsableActividad
    SET IDprofesor = @IDprofesor
    WHERE IDactividad = @IDactividad;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateSede]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSede]
    @IDsede INT,
    @Nombre VARCHAR(32),
    @Abreviacion VARCHAR(10),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE sede
    SET Nombre = @Nombre, Abreviacion = @Abreviacion
    WHERE IDsede = @IDsede;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;
	SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateTipoActividad]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateTipoActividad]
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoActividad
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateTipoAfiche]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateTipoAfiche]
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoAfiche
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateTipoPersona]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateTipoPersona]
    @IDtipo INT,
    @Nombre VARCHAR(32),
    @Exito BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ActualizacionExitosa BIT;

    UPDATE tipoPersona
    SET Nombre = @Nombre
    WHERE IDtipo = @IDtipo;

    IF @@ROWCOUNT > 0
        SET @ActualizacionExitosa = 1;
    ELSE
        SET @ActualizacionExitosa = 0;

    SET @Exito = @ActualizacionExitosa;

    SELECT @Exito AS Exito;
END;
GO
/****** Object:  StoredProcedure [dbo].[VerNotificacionUsuario]    Script Date: 15/6/2023 03:45:16 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[VerNotificacionUsuario]
(
    @IDnotificacion INT,
    @IDpersona INT,
	@Result int output
)
AS
BEGIN
    UPDATE notificacionUsuario
    SET visto = 1
    WHERE IDnotificacion = @IDnotificacion AND IDpersona = @IDpersona
	set @Result = 0
	select @Result
	return @Result
END
GO
USE [master]
GO
ALTER DATABASE [proyecto] SET  READ_WRITE 
GO
