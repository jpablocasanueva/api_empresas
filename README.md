
# DEMO API SIMPLILATAM


Esta es la primera itereacion de la API de Demo, la cual permite obtener la informacion de empresas y los empleados asociados a estas.

## Base de Datos

Se incluye el archivo database.sql, en este encuentran las tablas que soportan la API.

## API Reference

#### Listado de todas las empresas

```http
  GET /api/empresas
```
#### Listado de todos los empleados
```http
  GET /api/empleados
```


#### Crear Empresa

```http
  POST /api/empresas/

| Parameter  | Type     | Description                          | 
| :--------  | :------- | :------------------------------------|
| `nombre`   | `string` | **Required**. Nombre de la Empresa   |
| `rut`      | `string` | **Required**. Rut de la Empresa      |
| `direccion`| `string` | **Required**. Direccion de la Empresa|
| `telefono` | `string` | **Required**. Telefono de la Empresa |


#### Crear Empresa

```http
  POST /api/empleados/

| Parameter  | Type     | Description                          | 
| :--------  | :------- | :------------------------------------|
| `nombre`   | `string` | **Required**. Nombre del Empleado    |
| `rut`      | `string` | **Required**. Rut del Empleado       |
| `email`    | `string` | **Required**. Email     de la Empresa|




    


