DELIMITER //-- CAMBIO EL CIERRE DE SENTENCIAS CON //
CREATE FUNCTION agregar_dias(fecha DATE, dias INT)
RETURNS DATE
READS SQL DATA -- para solucionar error de deterministic
DETERMINISTIC
BEGIN
 RETURN fecha + INTERVAL dias DAY;
END//
 DELIMITER ; 
-- llamar la funcion
SET @now = CURDATE(); -- DEFINO LA VARIABLE FECHA PARA PASARALA COMO ARG
SELECT agregar_dias(@now,30); -- DEBE DEVOLVER LA FECHA ACTUAL MAS DOS MESES

DROP FUNCTION agregar_dias; -- eliminar funcion()

-- FUNCION OBTENER PAGINAS
DELIMITER //
CREATE FUNCTION obtener_paginas()
RETURNS INT
READS SQL DATA -- para solucionar error de deterministic
DETERMINISTIC
BEGIN 
SET @paginas = (SELECT(ROUND(RAND()*300)+100)); -- PARA ALMACENAR EL VALOR DEBO (SELECT)
RETURN @paginas;
END//
-- FUNCION OBTENER VENTAS
CREATE FUNCTION obtener_ventas()
RETURNS INT
READS SQL DATA -- para solucionar error de deterministic
DETERMINISTIC
BEGIN 
SET @ventas = (SELECT(ROUND(RAND()*500)+100)); -- PARA ALMACENAR EL VALOR DEBO (SELECT)
RETURN @ventas;
END//
DELIMITER ; 

SELECT obtener_paginas();
SELECT obtener_ventas();
 -- ACTUALIZAR PAGINAS (agregar paginas a todos lo registros)
 UPDATE libros SET paginas= obtener_paginas();
