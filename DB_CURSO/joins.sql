-- INNER JOIN muestra los registros que estan en la interseccion de las dos tablas
-- Obtener todos los titulos y nombre de los autores con INNER JOIN
SELECT
 libros.titulo, -- INDICO LA TABLA ORIGEN DEL DATO QUE QUIERO
 CONCAT(autor.nombre, " ", autor.apellido) AS nombre_autor,
 libros.fecha_creacion
FROM libros
INNER JOIN autores ON libros.autor_id = autores.autor_id; -- ESTA ES LA UNION DE LAS DOS TABLAS

-- EL MISMO PERO CON ALIAS
SELECT
 li.titulo, -- INDICO LA TABLA ORIGEN DEL DATO QUE QUIERO
 CONCAT(au.nombre, " ", au.apellido) AS nombre_autor,
 li.fecha_creacion
FROM libros as li
INNER JOIN autores as au ON li.autor_id = au.autor_id; -- ESTA ES LA UNION DE LAS DOS TABLAS

 -- EL MISMO CAMBIANDO ON POR USING -> CUANDO ESTAN NORMALIZADAS Y TIENEN EL MISMO NOMBRE
SELECT
 li.titulo, -- INDICO LA TABLA ORIGEN DEL DATO QUE QUIERO
 CONCAT(au.nombre, " ", au.apellido) AS nombre_autor,
 li.fecha_creacion
FROM libros as li
INNER JOIN autores AS au USING(autor_id);

 -- EL MISMO USANDO on PARA CONDICIONAR LA UNION 
SELECT
 li.titulo, -- INDICO LA TABLA ORIGEN DEL DATO QUE QUIERO
 CONCAT(au.nombre, " ", au.apellido) AS nombre_autor,
 li.fecha_creacion
FROM libros as li
INNER JOIN autores AS au ON au.autor_id=li.autor_id
AND au.seudonimo IS NOT NULL;

-- LEFT JOIN -- relacion muchos a muchos, se crea una nueva tabla con las dos primary keys de las que relaciono
-- obtener el nombre completo de los usuarios y los libros que han prestado
usuarios=a
libros_usuarios = b 
 
SELECT CONCAT(nombre, " ", apellido), -- info de la tabla A
libros_usuarios.libro_id --  info de la interseccion
FROM usuarios
LEFT JOIN libros_usuarios ON usuarios.usuario_id = libros_usuarios.usuario_id 
WHERE libros_usuarios.libro_id IS NOT NULL; -- RESTRICCION PARA QUE MUESTRE SOLO LOS USERS QUE HAN PRESTADO LIBROS

-- SENTENCIA PARA VER LOS QUE NO HAN PRESTADO LIBROS
SELECT CONCAT(nombre, " ", apellido), -- info de la tabla A
libros_usuarios.libro_id --  info de la interseccion
FROM usuarios -- tabla A, la que es incluida en el left join
LEFT JOIN libros_usuarios ON usuarios.usuario_id = libros_usuarios.usuario_id 
WHERE libros_usuarios.libro_id IS  NULL; 

-- RIGHT JOIN -- EL ANTERIOR EJEMPLO PERO CON RIGHT JOIN (la tabla B es la que incluida)
libros_usuarios = a 
usuarios=b

SELECT CONCAT(nombre, " ", apellido), -- info de la tabla A
libros_usuarios.libro_id --  info de la interseccion
FROM libros_usuarios
RIGHT JOIN usuarios ON libros_usuarios.usuario_id = usuarios.usuario_id  -- muestra interseccion y B
WHERE libros_usuarios.libro_id IS NOT NULL; -- condicion que limita a la interseccion

-- MULTIPLES JOINS
-- Obtener nombre completos de usuarios que han prestado libros, el libro debe ser de un
-- autor con seudonimo y el prestamo tuvo que haber hecho hoy. SOLO RESPONDE UN NOMBRE QUE CUMPLE TODAS LAS COND
usuarios
libros_usuarios
libros
autores

SELECT DISTINCT -- permite mostrar solo un nombre asi el user haya prestado varios libros
CONCAT(usuarios.nombre," ", usuarios.apellido) AS nomre_completo -- 1ro obtengo nombre_completo
FROM usuarios
-- PARA OBTENER LOS LIBROS PRESTADOS POR LOS USUARIOS HAGO UN JOIN CON LIBROS_USUARIOS
INNER JOIN libros_usuarios ON usuarios.usuario_id=libros_usuarios.usuario_id -- uno usuarios con libros_usuarios
                           AND DATE(libros_usuarios.fecha_creacion) = CURDATE() -- ESTA CONDICION PERMITE OBTENER LOS PRESTAMOS HECHOS HOY
-- AHORA PARA OBTENER LOS LIBROS PRESTADOS A AUTORES CON SEUDONIMO HAGO UN JOIN CON AUTORES
INNER JOIN libros ON libros_usuarios.libro_id=libros.libro_id -- cambio tablas y uno libros_user con libros
-- al bajar a este nivel ya puedo hacer un inner join con autores
INNER JOIN autores ON libros.autor_id=autores.autor_id -- uno libros con autores, uniendo la llave foranea con la primaria de autores
                   AND autores.seudonimo IS NOT NULL; -- Segunda condicion para filtrar los autores 

-- PRODUCTOS CARTESIANOS
-- SENTENCIA PARA DECIR QUE CADA USUARIOS DE LOS 3 QUE HAY PRESTARON CADA UNO DE LOS 10 LIBROS
SELECT  usuarios.nombre, libros.titulo FROM usuarios CROSS JOIN libros ORDER BY usuarios.nombre DESC;
-- RESULTADO, 30 REGISTROS 3 USER X 10 LIBROS
-- INSERTAR LOS REGISTROS EN LA TABLAS libros_usuario
INSERT INTO libros_usuarios (libro_id,usuario_id) SELECT libro_id, usuario_id 
FROM libros CROSS JOIN usuarios; -- tomo libro
-- RESULTADO 30 INSERCIONES EN LIBROS_USUARIOS, CADA USER PIDIO PRESTADO 10 LIBROS