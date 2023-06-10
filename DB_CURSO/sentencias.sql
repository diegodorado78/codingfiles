DROP DATABASE  IF EXISTS libreria_diego; -- borrar base de datos
CREATE DATABASE IF NOT EXISTS libreria_diego; -- crear base de datos

USE libreria_diego; -- elegir/usar una base de datos
-- DEFINIMOS COLUMNAS Y TIPO DE DATO E INGRESAMOS EN LA SENTENCIA DE CREACION DE TABLA
-- SENTENCIA PARA CREAR TABLA
CREATE TABLE IF NOT EXISTS autores(
autor_id INT  UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- llave primaria 
nombre VARCHAR(25) NOT NULL, /*alfanumerico de max 50 chars*/
seudonimo VARCHAR(50)UNIQUE,
apellido VARCHAR(25) NOT NULL,
genero ENUM('M','F'), --    CHAR(1) NOT NULL alfanumerico de 1 caracter
fecha_nacimiento DATE NOT NULL, -- YYYY-MM-DD
pais_origen VARCHAR(40) NOT NULL,
fecha_creacion DATETIME DEFAULT current_timestamp -- valor default para saber cuando se hizo registro
);
-- TABLA DOS CON LLAVE FORANEA
CREATE TABLE libros(
      libro_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- LLAVE PRIMARIA
      autor_id INT UNSIGNED NOT NULL, -- LLAVE FORANEA
      titulo VARCHAR(50) NOT NULL,
      descripcion VARCHAR(250) NOT NULL DEFAULT'',
      paginas INT  UNSIGNED NOT NULL DEFAULT 0,
      fecha_publicacion DATE NOT NULL,
      fecha_creacion DATETIME DEFAULT current_timestamp, -- valor default para saber cuando se hizo registro
      FOREIGN KEY (autor_id) REFERENCES autores(autor_id) ON DELETE CASCADE -- referencia 
);
-- TABLA USUARIOS
CREATE TABLE IF NOT EXISTS usuarios(
usuario_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
nombre VARCHAR(25) NOT NULL, 
apellido VARCHAR(25),
username VARCHAR(25) NOT NULL,
email VARCHAR(50) NOT NULL,
fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP 
);
 -- TABLA LIBROS_USUARIOS PARA LOS JOINS
CREATE TABLE libros_usuarios( -- que libro se presto a que usuario y que usuario presto que libro
      libro_id INT UNSIGNED NOT NULL, 
      usuario_id INT UNSIGNED NOT NULL,

      FOREIGN KEY(libro_id) REFERENCES libros(libro_id),
      FOREIGN KEY(usuario_id) REFERENCES usuarios(usuario_id),
      fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP -- peremite saber cuando se presto el libro
)
-- INSERTAR VALORES EN UNA TABLA varias fila(tuplas) de una vez
INSERT INTO autores(nombre,apellido,genero,fecha_nacimiento,pais_origen)
VALUES('test diego','test dorado','M','1993-07-13','colombia'),
      ('Mario','Mendoza','M','1993-07-13','colombia'),
      ('jose','saramago','M','1976-07-13','portugal'),
      ('gabriel','garcia','M','1960-02-13','colombia'),
      ('Ana','Frank','F','1940-10-28','Alemania');

SELECT * FROM autores;

INSERT INTO autores(nombre,apellido,seudonimo,genero,fecha_nacimiento,pais_origen)
VALUES('Stephen','King','Richard','M','1947-09-27','USA'),
      ('Joanne','Rowling','J.k Rowling','F','1968-09-27','UK');

INSERT INTO usuarios(nombre,apellido,username,email)
VALUES('Juan','Perez','juan_ma','juan_ma@gmail.com'),
      ('Fernando ','Dorado','ferdorado','ferdorado@gmail.com'),
      ('Maria ','Lopez','mclopez','mcami@gmail.com');
SELECT * FROM autores;

INSERT INTO libros(autor_id,titulo,fecha_publicacion)
VALUES(2,'satanas','2003-09-02'),
      (2,'akelarre','2014-01-02'),

      (4,'Hojarasca','1988-09-12'),
      (4,'Cien años de soledad','1881-09-03'),
      (4,'Amor en los tiempos del Colera','2005-04-05');
SELECT * FROM autores;
SELECT * FROM libros;
INSERT INTO libros(autor_id,titulo,fecha_publicacion)
VALUES(1,'Memorias de un moribundo','2019-07-13'),
      (1,'La revolucion','2009-01-02'),

      (3,'Ensayo sobre la Ceguera','1998-09-30'),
      (3,'El tunel','1993-07-13'),
      (3,'Caín','2015-04-05');
INSERT INTO libros(autor_id,titulo,fecha_publicacion)
VALUES(7,'harry potter y la piedra filosofal','2003-09-02'),
      (7,'harry potter y la camara de los secretos','2014-01-02'),
      (7,'harry potter y el prisionero de askaban','1988-09-12'),
      (7,'harry potter y el caliz de fuego','1881-09-03'),
      (7,'harry potter y la orden del fenix','2005-04-05');
SELECT * FROM autores;
SELECT * FROM libros;
-- ALTER TABLE PARA MODIFICAR TABLAS(AGREGAR,ELIMINAR)
ALTER TABLE libros ADD ventas INT UNSIGNED NOT NULL DEFAULT 0 ; -- AGREGAR COLUMNA
ALTER TABLE libros ADD stock INT UNSIGNED DEFAULT 10 ; -- AGREGAR COLUMNA
-- ALTER TABLE libros DROP COLUMN ventas; -- BORRAR COLUMNA

-- INSERTAR LOS VALORES DE LA RELACION ENTRE USUARIOS Y LIBROS
INSERT INTO libros_usuarios(libro_id,usuario_id)
VALUES (1,1),(2,1),(3,1) -- el usuario 1 pidio 3 libros del 1-3
       (6,3),(7,3),(8,3); -- el usuario 3 pidio 3 libros del 6-8

-- FUNCIONES (CONCAT LENGTH UPPER LOWER LEFT RIGHT TRIM)
SELECT CONCAT(nombre," ", apellido) as nombre_completo  FROM autores;-- muestra la union
SELECT FROM autores WHERE LENGTH(nombre) <7; -- muestra todos los autores con nombre menor a 7 char

SELECT UPPER(nombre), LOWER(APELLIDO) FROM autores; -- Tabla con las caracteristicas solicitadas
SELECT TRIM("   HOLA MUNDO  "); -- Elimina los espacios antes y luego del string no los espacios medios
-- FILTRAR LIBROS POR COMO EMPIEZA O TERMINA EL TITULO
SELECT * FROM libros where  LEFT(titulo,5) = 'harry'; -- muestra todos lo que empiezan con harry
SELECT * FROM libros where  RIGHT(titulo,6) = 'colera';-- muestra todos los terminan con colera
-- FUNCIONES CON NUMEROS
SELECT RAND();
SELECT ROUND(RAND()*100);
SELECT TRUNCATE(1.12345678,3); -- 3 ES EL NUMERO DE DECIMALES QUE QUIERO USAR
SELECT POW(2,4); -- ELEVA EL PRIMER ARG A LA POTENCIA EXPRESADA EN EL SEGUNDO ARG
-- FUNCIONES CON FECHA Y HORA
 SELECT NOW();
 SET @NOW = NOW(); -- DEFINIR VARIABLE
 SELECT SECOND(@NOW), -- MIRAR TODOS LOS DATOS EN UNA SOLA TABLA
         HOUR(@NOW),
         MONTH(@NOW),
         YEAR(@NOW);
SELECT DAYOFWEEK(@NOW), DAYOFMONTH(@NOW), DAYOFYEAR(@NOW); -- MIRAR EL NUMERO DEL DIA EN SEMANA...
SELECT DATE(@NOW); -- CONVERTIR DE TIMESTAMP A DATE => SOLO FECHA
SELECT CURDATE();
-- MOSTRAR REGISTROS INGRESADOS EN UNA FECHA ESPECIFICA
SELECT * FROM libros WHERE DATE(fecha_creacion)= CURDATE();
SELECT @NOW + INTERVAL 30 DAY; -- + O - MONTH SECOND YEAR ETC.

-- FUNCIONES SOBRE CONDICIONES
SELECT IF (10>9, "ES MAYOR", "ES MENOR"); -- 1 COND, 2 SI TRUE, 3 SI FALSE

SELECT IF (paginas=0,"el libro no tiene pags", paginas) FROM libros; -- si tiene paginas muestra el numero 
-- modificar valores de una columna haciendo update
UPDATE libros SET paginas=10 WHERE libro_id >5;
SELECT IFNULL(seudonimo,"el autor no tiene seudonimo") FROM autores; -- solo evalua si tiene o no valor, si tiene valor lo muestra sino el '' arg
-- OBTENER DATOS A PARTIR DE CONDICIONES
SELECT name FROM mysql.proc WHERE db = database() AND type ='FUNCTION';

-- llamo funciones rand() declaro var @pag y sentencias sql SELECT
 SELECT * FROM libros\G; -- PARA MOSTRAR EN FORMA INDIVIDUAL LOS REGISTROS

 SELECT titulo, libro_id from libros; -- mostrar solo ciertas columnas

select * from libros WHERE left(titulo,5) <> 'harry'; -- operador 'diferente de'
-- BUSQUEDAS CON OPERADORES LOGICOS AND OR NOT
SELECT * FROM libros WHERE titulo = 'Akelarre' AND autor_id= 2; -- las 2 cond se deben cumplir
SELECT * FROM libros WHERE titulo = 'Akelarre' OR autor_id= 6; -- al menos una se debe cumplir y muestra ambas
-- MULTIPLES BUSQUEDAS ESPECIFICAS EN UNA SOLA SENTENCIA SQL
SELECT * FROM libros WHERE  (autor_id=2 AND  titulo = 'Akelarre') OR( autor_id=4 AND titulo='hojarasca');
SELECT * FROM autores WHERE seudonimo IS NULL; -- NO PUEDO USAR = NULL
-- NEGACION 
SELECT * FROM autores WHERE seudonimo IS NOT NULL; 
SELECT * FROM autores WHERE seudonimo <=> NULL; -- OPERADOR CONDICION ESPECIAL
-- BETWEEN PARA MOSTRAR REGISTROS EN UN RANGO ESPECIFICO
SELECT titulo,fecha_publicacion from libros WHERE fecha_publicacion BETWEEN '1900-01-01' AND '2015-01-01';
-- SELECCIONAR REGISTROS A PARTIR DE UNA LISTA
SELECT * FROM libros WHERE  titulo = 'akelarre' OR
titulo= 'satanas' OR titulo = 'hojarasca';
-- FORMA MAS AMIGABLE USANDO IN()
SELECT  titulo, paginas FROM libros WHERE  titulo  IN ('akelarre','satanas','hojarasca'); -- where INclude()
 -- SELECCIONAR REGISTROS NO REPETIDOS CON DISTINCT
 SELECT DISTINCT titulo FROM libros;
-- ALIAS
 SELECT autor_id AS autor, titulo from libros;
 -- SELECT autor_id AS autor, titulo from libros AS books;
 -- ACTUALIZAR REGISTROS -AGREGAR COLUMNAS
ALTER TABLE libros ADD ventas INT UNSIGNED NOT NULL; -- AGREGAR COLUMNA
UPDATE libros SET descripcion = 'nueva descripcion'; -- cambio a todos los registros
-- ACTUALIZAR VENTAS (agregar VENTAS a todos lo registros)
UPDATE libros SET ventas= obtener_ventas();
UPDATE libros SET  ventas=5000 WHERE titulo='akelarre'; -- cambio a registro particular
-- DELETE FROM libros; -- elimina todos los registros
-- DELETE FROM libros WHERE autor_id=2; borra todos los registros del id=2 'mario mendoza'
-- DELETE FROM libros WHERE libro_id=1; borra un registro en particular usando su llave primaria
-- DELETE FROM libros WHERE autor_id=2; -- elimino primero los registros del autor
-- DELETE FROM autores WHERE autor_id=2; -- elimino el autor
-- PARA BASES DE DATOS MUY GRANDES
-- ON DELETE CASCADE  EN LA LLAVE FORANEA EN LA DEF DE LA TABLA
-- DELETE FROM autores WHERE autor_id=2; -- ELIMINA AUTOR Y LIBROS
-- TRUNCATE TABLE libros; -- difiere de delete porque resetea los metadatos

-- SENTENCIAS AVANZADAS
SELECT * FROM libros WHERE titulo LIKE 'harry%'\G; -- % para cuando EL SUBSTRING esta al principio
SELECT * FROM libros WHERE titulo LIKE 'h%'; -- % para cuando EL SUBSTRING esta al principio
SELECT * FROM libros WHERE titulo LIKE '%colera'; -- % para cuando EL SUBSTRING esta al final
SELECT * FROM libros WHERE titulo LIKE '%la%'; -- % para cuando EL SUBSTRING esta en cualquier lugar
SELECT * FROM libros WHERE titulo LIKE '___l____';-- titulo 8 char donde 4to 'l' 
SELECT * FROM libros WHERE titulo LIKE '_a%'; -- titulos donde 2do char sea 'a'
SELECT * FROM libros WHERE titulo LIKE '_a__y%'; -- titulos donde 2do char sea 'a' y 5to 'y'
-- EXPRESIONES REGULARES
SELECT * FROM libros WHERE titulo REGEXP '^[haS]'; -- titulos que empiecen con H ó A ó S
-- ORDENAR RESULTADOS ascendente
SELECT * FROM libros ORDER BY titulo; -- ordena de la A-Z
SELECT titulo FROM libros ORDER BY titulo; --  ASC muestra solo titulo ordenado de la A-Z
-- ORDENAR RESULTADOS descendente
SELECT titulo FROM libros ORDER BY titulo DESC; --  DESCmuestra solo titulo ordenado de la A-Z
SELECT titulo,libro_id FROM libros ORDER BY libro_id ASC; --  ordenar deacuerdo al numero del id
-- da igual si ordeno deacuerdo al id y titulo pues prima pues en este caso prima titulo
SELECT libro_id,titulo FROM libros ORDER BY titulo AND libro_id ASC; --  ordenar deacuerdO AL ID Y EL TITULO
-- limitar busquedas
SELECT titulo FROM libros LIMIT 5;
SELECT titulo FROM libros WHERE autor_id = 7 LIMIT 5; -- condicion y limit
SELECT  libro_id,titulo FROM libros  LIMIT 0,5; -- 5 registros desde el 0
SELECT  libro_id,titulo FROM libros  LIMIT 5,5; -- 5 registros desde el 5

-- FUNCIONES DE AGREGACION
SELECT COUNT(*)  FROM libros; -- cuenta EL TOTAL DE REGISTROS DE LIBROS
SELECT COUNT(*) AS total FROM autores WHERE seudonimo IS NOT NULL; -- F()sobre el resultado ue arroja (where seudonimo is not null)
SELECT COUNT(seudonimo) AS total FROM autores; -- la funcion trabaja sobre NOT NULLs entonces pongo la columna instead *
-- FUNCION SUMA, MAX, MIN y AVG
SELECT SUM(ventas) FROM libros; -- suma todos los valores de la columna ventas  
SELECT MAX(ventas) FROM libros; -- mostrar valor maximo de la columna
SELECT MIN(ventas) FROM libros; -- mostrar valor minimo de la columna
SELECT AVG(ventas) FROM libros; -- mostrar valor promedio de la columna
 -- USAR FUNCIONES AGRUPACION Y OTROS VALORES
SELECT autor_id, SUM(ventas) FROM libros GROUP BY autor_id; -- mostrar la suma de ventas de cada autor
SELECT autor_id, SUM(ventas) as total FROM libros GROUP BY autor_id ORDER BY total DESC LIMIT 1; -- MOSTRAR EL TOTAL DEL AUTOR QUE MAS VENDIO
SELECT autor_id, SUM(ventas) AS total FROM libros GROUP BY autor_id HAVING SUM(ventas)>100; -- mostrar la suma de autores que sumen mas de 100

SELECT CONCAT(nombre, " ", apellido) as nombre_completo FROM usuarios; --  resultado 3 datasets de usuarios

ALTER TABLE usuarios ADD edad INT UNSIGNED NOT NULL DEFAULT 0;

UPDATE autores SET seudonimo = 'M_mendoza' WHERE autor_id=2;
