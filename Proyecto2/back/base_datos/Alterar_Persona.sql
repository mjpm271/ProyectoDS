ALTER TABLE Persona
ADD CONSTRAINT df_Habilitado
DEFAULT 1 FOR Habilitado;

ALTER TABLE Persona
ADD CONSTRAINT df_Coordinador
DEFAULT 0 FOR Coordinador;