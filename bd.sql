-- Base de datos para el ejercicio 1
-- lista de libro
use ejercicio1;
DELIMITER //
DROP PROCEDURE IF EXISTS listarLibros//
CREATE PROCEDURE listarLibros(in usr varchar(20), in pass varchar(20) )
BEGIN
    if usr = 'admin' and pass = 'admin' then
        SELECT * FROM libro;
    else
        SELECT 'Usuario o contraseña incorrectos' as error;
    end if;
END//
