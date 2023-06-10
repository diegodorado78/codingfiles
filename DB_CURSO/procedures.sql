-- rutinas particulares de cada gestor de BDD
DELIMITER //
CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT )
BEGIN
INSERT INTO libros_usuarios(libro_id,usuario_id) VALUES (libro_id,usuario_id); -- son los params que ingreo
UPDATE libros SET stock = stock-1 WHERE libros.libro_id=libro_id; -- ACTUALIZA EL STOCK 
END// 
DELIMITER ;

-- mostrar rutinas disponibles
SELECT name FROM mysql.proc WHERE db = database() AND type = 'PROCEDURE';
-- llamar al procedure
CALL prestamo(3,15); -- el user 3 realizo prestamo del libro 15
-- BORRAR PROCEDURE
DROP PROCEDURE prestamo;

-- RUTINA CON DEVOLUCION DE VALOR
DELIMITER //
CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT , OUT cantidad INT)
BEGIN
INSERT INTO libros_usuarios(libro_id,usuario_id) VALUES (libro_id,usuario_id); -- son los params que ingreo
UPDATE libros SET stock = stock-1 WHERE libros.libro_id=libro_id; -- ACTUALIZA EL STOCK
SET cantidad = (SELECT stock FROM libros WHERE libros.libro_id = libro_id); -- IMPRIMO EL STOCK ACTUALIZADO
END // 
DELIMITER ;

CALL prestamo(3,13, @cantidad); -- el user 3 realizo prestamo del libro 13
SELECT @cantidad; -- 9 
CALL prestamo(1,13, @cantidad); -- el user 3 realizo prestamo del libro 13
SELECT @cantidad; -- 8 el valor se modifico pq  el libro 13 se presto al user 3 y luego al 1-- RUTINA CON DEVOLUCION DE VALOR

-- RUTINA CON CONDICIONAL
DELIMITER //
CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT , OUT cantidad INT)
BEGIN
SET cantidad = (SELECT stock FROM libros WHERE libros.libro_id = libro_id); -- IMPRIMO EL STOCK ACTUALIZADO

IF cantidad > 0 THEN --CONDICION

INSERT INTO libros_usuarios(libro_id,usuario_id) VALUES (libro_id,usuario_id); -- son los params que ingreo
UPDATE libros SET stock = stock-1 WHERE libros.libro_id=libro_id; -- ACTUALIZA EL STOCK

SET cantidad =cantidad-1;

ELSE -- SINO Ó ELSEIF Y condicion
SELECT "No es posible prestar el libro " AS mensaje_error;

END IF;
END // 
DELIMITER;
SET @cantidad = -1; -- declaro la var cantidad y luego con el llamado de procedure se reduce la Q.
CALL prestamo(1,13, @cantidad); -- llamo tantas veces como sea necesario para agotar el stock
-- select @cantidad -> llamo tantas veces como sea necesario para agotar el stock entonces cant=0;

 -- PROCEDURE CON CONDICIONAL BAJO CASOS (switch case)
 DELIMITER //
 CREATE PROCEDURE tipo_lector(usuario_id INT)
 BEGIN
 SET @cantidad = (SELECT COUNT(*) FROM libros_usuarios
                  WHERE libros_usuarios.usuario_id = usuario_id);
  CASE 
   WHEN @cantidad > 20 THEN -- case 1:
   SELECT "Fanatico" AS mensaje;
   WHEN @cantidad > 10  AND @cantidad < 20 THEN
   SELECT "Aficionado" AS mensaje;
   WHEN @cantidad > 5  AND @cantidad < 10 THEN
   SELECT "Usuario Promedio" AS mensaje;
   ELSE -- default
      SELECT "Nuevo" AS mensaje;
  END CASE; 

 END //
 DELIMITER ;

 call tipo_lector(1); -- muestra el tipo del lector deacuerdo al numero de libros que han prestado
  call tipo_lector(2);
    call tipo_lector(3);
-- select * from libros_usuarios order by usuario_id; para mirar los libros prestados por cada user

-- PROCEDURE CON CICLOS (while) -- SE EJECUTA SI LA CONDICION SE CUMPLE
 DELIMITER //
CREATE PROCEDURE libros_azar()
BEGIN
 SET @iteracion = 0;
 WHILE @iteracion <5 DO -- se ejecuta siempre y cuando la condicion se ejecuta
 SELECT libro_id, titulo FROM libros ORDER BY RAND() LIMIT 1;
 SET @iteracion = @iteracion+1;
 END WHILE;
 END //
 DELIMITER ;
 CALL libros_azar();-- muestra 5 libros al azar, ahi se rompe el ciclo

 -- PROCEDURE CON CICLOS (REPEAT...DO WHILE) - HASTA QUE LA CONDICION SE CUMPLE
 DELIMITER //
CREATE PROCEDURE libros_azar()
BEGIN
 SET @iteracion = 0;
  REPEAT  

 SELECT libro_id, titulo FROM libros ORDER BY RAND() LIMIT 1;
 SET @iteracion = @iteracion+1;

 UNTIL @iteracion >= 5 -- SE EJECUTA HASTA QUE ESTA CONDICION SE EMPIECE A CUMPLIR
 END REPEAT;

 END //

 DELIMITER ;
 CALL libros_azar();-- MUESTRA 5 REGISTROS