CREATE OR REPLACE VIEW prestamos_users_view AS
SELECT
usuarios.usuario_id,
usuarios.nombre,
usuarios.email,
usuarios.username,
COUNT(usuarios.usuario_id) AS total_prestados --  cuenta las multiples veces que aparece un user que presto

FROM usuarios
INNER JOIN libros_usuarios ON usuarios.usuario_id= libros_usuarios.usuario_id
            AND libros_usuarios.fecha_creacion >= CURDATE() - INTERVAL 5 DAY
GROUP BY usuarios.usuario_id;
-- ELMINAR VISTA 
DROP VIEW prestamos_users_view