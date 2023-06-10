Ejercicios

Aquí un listado de ejercicios con los cuales puedes practicar a partir de los datos que se encuentran en el archivo sentencias.sql

    Tu puedes agregar más datos (reales) si así tú lo deseas. Si aun no poses el archivo puedes descargarlo en el siguiente link

Libros

-Obtener todos los libros escritos por autores que cuenten con un seudónimo.
     SELECT * FROM autores WHERE seudonimo IS NOT NULL;
______________________________________________

-Obtener el título autor de todos los libros publicados desde el 2003 cuyos autores poseen pseudónimo.
     SELECT titulo, nombre 
     FROM Libros -- ESTA ES LA TABLA PRINCIPAL LA QUE UNO CON Autores
     INNER JOIN autores ON libros.autor_id = autores.autor_id -- ESTA ES LA UNION DE LAS DOS TABLAS
     AND seudonimo IS NOT NULL AND fecha_publicacion > curdate() - INTERVAL 17 YEAR;
______________________________________________
-Obtener todos los libros escritos por autores que cuenten con un seudónimo y que hayan nacido ante de 1965.
SELECT  titulo
FROM Libros 
INNER JOIN autores ON libros.autor_id= autores.autor_id
AND seudonimo IS NOT NULL AND autores.fecha_nacimiento > 1965;
______________________________________________

-Colocar el mensaje no disponible a la columna descripción, en todos los libros publicados antes del año 2000.
 UPDATE libros SET descripcion = 'no disponible' WHERE fecha_publicacion < '2000-01-01';
 ______________________________________________

-Obtener la llave primaria de todos los libros cuya descripción sea diferente de no disponible.
SELECT libro_id FROM libros WHERE descripcion <> 'no disponible';
______________________________________________

-Obtener el título de los últimos 2 libros escritos por el autor con id 7.
SELECT titulo FROM libros WHERE autor_id=7 ORDER BY fecha_publicacion DESC LIMIT 2  ;
______________________________________________

-Obtener en un mismo resultado la cantidad de libros escritos por autores con seudónimo y sin seudónimo.
    Ejemplo
    con seudónimo 	sin seudónimo
    10 	20
SELECT
      (SELECT COUNT(autor_id) FROM autores WHERE seudonimo IS NULL ) AS sin_seudonimo, 
      (SELECT COUNT(autor_id) FROM autores WHERE seudonimo IS NOT NULL ) AS con_seudonimo;
______________________________________________

-Obtener la cantidad de libros publicados entre enero del año 2000 y enero del año 2005.
SELECT titulo FROM libros WHERE fecha_publicacion BETWEEN '2000-01-01' AND '2005-01-01';
______________________________________________

-Obtener el título y el número de ventas de los cinco libros más vendidos.

SELECT titulo, ventas FROM libros ORDER BY ventas DESC LIMIT 5;
______________________________________________

-Obtener el título y el número de ventas de los cinco libros más vendidos de la última década.
SELECT titulo, ventas FROM libros WHERE fecha_publicacion BETWEEN '2010-01-01' AND '2020-01-01' ORDER BY ventas DESC LIMIT 5;
 -- SOLO EXISTEN DOS REGISTROS QUE CUMPLEN CON LA CONDICION
______________________________________________

-Obtener la cantidad de libros vendidos por los autores con id 1, 2 y 3.
SELECT  autor_id,SUM(ventas) FROM libros  GROUP BY autor_id LIMIT 3;
______________________________________________

-Obtener el título del libro con más páginas.
SET @max = (SELECT max(paginas) FROM libros); -- creo una variable con el max pero si la tabla cambia esta no
SELECT titulo FROM libros WHERE paginas=@max;
ó
SELECT 
titulo
FROM libros
GROUP BY(titulo) 
HAVING SUM(paginas)=(SELECT MAX(paginas) FROM libros);
______________________________________________

-Obtener todos los libros cuyo título comience con la palabra “La”.
SELECT titulo FROM libros WHERE LEFT(titulo,2) = 'La';
ó
SELECT titulo FROM libros WHERE titulo LIKE 'la%'; -- % para cuando EL SUBSTRING esta al principio
______________________________________________

-Obtener todos los libros cuyo título comience con la palabra “La” y termine con la letra “n”.
SELECT titulo FROM libros WHERE (LEFT(titulo,2) = 'La' AND RIGHT(titulo,1)= 'n') OR(LEFT(titulo,2) = 'sa' AND RIGHT(titulo,1)= 's') ;
______________________________________________

- Establecer el stock en cero a todos los libros publicados antes del año de 1995
UPDATE Libros SET stock = 0 WHERE  YEAR(fecha_publicacion) < '1995';
______________________________________________

-Mostrar el mensaje Disponible si el libro con id 1 posee más de 5 ejemplares en stock, en caso contrario mostrar el mensaje No disponible.
SELECT IF (stock>5,"Disponible", "No Disponible") AS mensaje FROM libros WHERE libro_id=1;
______________________________________________

-Obtener el título los libros ordenados por fecha de publicación del más reciente al más viejo.
SELECT titulo FROM libros ORDER BY fecha_publicacion DESC;
______________________________________________
- Obtener el nombre de los autores cuya fecha de nacimiento sea posterior a 1950
SELECT CONCAT(nombre," ", apellido) AS nombre_completo, fecha_nacimiento FROM autores WHERE YEAR(fecha_nacimiento) > 1950;

    Obtener la el nombre completo y la edad de todos los autores.

    Obtener el nombre completo de todos los autores cuyo último libro publicado sea posterior al 2005

    Obtener el id de todos los escritores cuyas ventas en sus libros superen el promedio.

    Obtener el id de todos los escritores cuyas ventas en sus libros sean mayores a cien mil ejemplares.
