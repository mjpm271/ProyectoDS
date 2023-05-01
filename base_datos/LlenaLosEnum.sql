-- Se crean los enum
EXEC CreateEstadoActividad @Nombre = PLANEADA;
EXEC CreateEstadoActividad @Nombre = NOTIFICADA;
EXEC CreateEstadoActividad @Nombre = REALIZADA;
EXEC CreateEstadoActividad @Nombre = CANCELADA;
--EXEC ReadEstadoActividad

EXEC CreateTipoActividad @Nombre = ORIENTADORA;
EXEC CreateTipoActividad @Nombre = MOTIVACIONAL;
EXEC CreateTipoActividad @Nombre = APOYO_VIDA_ESTUDIANTIL;
EXEC CreateTipoActividad @Nombre = ORDEN_TECNICO;
EXEC CreateTipoActividad @Nombre = RECREACION;
--EXEC ReadTiposActividad

EXEC CreateModalidad @Nombre = PRESENCIAL;
EXEC CreateModalidad @Nombre = REMOTO;
--EXEC ReadModalidades

EXEC CreateTipoAfiche @Nombre = PDF;
EXEC CreateTipoAfiche @Nombre = JPG;
--EXEC ReadTipoAfiche

EXEC CreateSede @Nombre = CARTAGO, @Abreviacion = CR_C;
EXEC CreateSede @Nombre = SAN_JOSE, @Abreviacion = CR_SJ;
EXEC CreateSede @Nombre = ALAJUELA, @Abreviacion = CR_A;
EXEC CreateSede @Nombre = SAN_CARLOS, @Abreviacion = CR_SC;
EXEC CreateSede @Nombre = LIMON, @Abreviacion = CR_L;
--EXEC ReadSede

