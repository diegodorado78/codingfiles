START TRANSACTION -- TODOS LOS QUERIES A PARTIR DE AHORA SE EJECUTAN COMO UNO SOLO

SET @libro_id=15, @usuario_id=100;
-- primer  crud
UPDATE libros SET stock = stock-1 WHERE libro_id=@libro_id; -- ACTUALIZA EL STOCK
SELECT stock FROM libros WHERE libro_id=@libro_id;
-- segundo  crud
INSERT INTO libros_usuarios(libro_id, usuario_id)VALUES (@libro_id,@usuario_id);
SELECT * FROM libros_usuarios;

COMMIT; --  TERMINA LA TRANSACCION 
-- ROLLBACK PARA REVERTIR QUERIES ANTES DEL COMMIT

-- TRANSACCION DENTRO DE UN STORED PROCEDURE
-- RUTINA CON DEVOLUCION DE VALOR
DELIMITER //

CREATE PROCEDURE prestamo(usuario_id INT, libro_id INT)
BEGIN

DECLARE EXIT  HANDLER FOR SQLEXCEPTION -- EXIT CUANDO OCURRE UN ERROR PERO ANTES EJECUTA LO SIG
BEGIN

ROLLBACK; -- SI HAY UN ERROR EN ALGUN QUERY SE TERMINA LA TRANSACCION

END;
START TRANSACTION;

INSERT INTO libros_usuarios(libro_id,usuario_id) VALUES (libro_id,usuario_id); -- son los params que ingreo
UPDATE libros SET stock = stock-1 WHERE libros.libro_id=libro_id; -- ACTUALIZA EL STOCK

COMMIT;

END // 
DELIMITER ;

CALL prestamo(3,15); 

--  CALL prestamo(3,200) si pongo un valor invalido no se ejecuta pero tampoco muestra error
