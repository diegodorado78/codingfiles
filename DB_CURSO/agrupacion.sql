-- uso de UNION para unir dos grupos de DATASETS
SELECT CONCAT(nombre," ", apellido) AS nombre_completo FROM autores -- puede ser sin AS nombre_completo
UNION -- AMBOS DATASETS DEBE RETORNAR EL MISMO NUMERO DE COLUMNAS NO CONCAT(),ventas
SELECT CONCAT(nombre," ",apellido) AS nombre_completo FROM usuarios;
-- alternativa
SELECT CONCAT(nombre," ", apellido) AS nombre_completo," " AS email FROM autores -- " " sirve como columna vacia
UNION 
SELECT CONCAT(nombre," ",apellido) AS nombre_completo,email FROM usuarios;
-- subCONSULTAS
-- obtener nombre_completo de autores que hayan vendido mas que el avg de todas las ventas
SELECT AVG(ventas) FROM libros;  -- 797.8000

SET @promedio = (SELECT AVG(ventas) FROM libros);
SELECT autor_id 
FROM libros
GROUP BY(autor_id) 
HAVING SUM(ventas)>@promedio; -- autores que ventas>avg()

-- procedimiento con CONSULTA ANIDADA
SELECT 
autor_id 
FROM libros
GROUP BY(autor_id) 
HAVING SUM(ventas)>(SELECT AVG(ventas) FROM libros); -- ESTE BLOQUE SE EJECUTA PRIMERO

-- procedimiento con CONSULTA ANIDADA Y nombre_completo
SELECT CONCAT (nombre, " ", apellido) AS nombre_completo
FROM autores
WHERE autor_id IN( -- LA SUBCONSULTA ES UNA LISTA POR ESO PUEDO USAR EL in
SELECT autor_id FROM libros GROUP BY(autor_id) 
HAVING SUM(ventas)>(SELECT AVG(ventas) FROM libros));

-- validar registros con EXIST
SELECT IF ( -- if recibe tres argumento valor a ev, si si , si no
    EXISTS(SELECT libro_id FROM libros  WHERE titulo= "akelarre"), -- uso llave primaria por optimizacion
    "Disponible", -- si sí
    "No Disponible" -- si no
) AS Mensaje; -- pongo alias para el resultado

