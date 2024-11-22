GamerHub CRUD con MongoDB
Descripción
GamerHub es una aplicación CRUD que permite gestionar un listado de gamers utilizando MongoDB como base de datos. La aplicación permite crear, leer, actualizar y eliminar registros de gamers, reflejando habilidades en el desarrollo backend con Node.js y Express.js.

Características
Crear un nuevo registro de gamer con nombre, email y juego favorito.
Listar todos los registros almacenados.
Actualizar la información de un gamer existente.
Eliminar registros según su ID.
Conexión con MongoDB usando Mongoose.
Requisitos
Node.js (versión 14 o superior)
MongoDB (local o en la nube, como Atlas)
npm (administrador de paquetes)
Instalación
1. Clona el repositorio
bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
cd gamerhub-crud
2. Instala las dependencias
bash
Copiar código
npm install
3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto y añade la conexión a MongoDB:

bash
Copiar código
MONGO_URI=mongodb://localhost:27017/gamerhub
PORT=5000
4. Inicia el servidor
bash
Copiar código
npm start
El servidor estará disponible en http://localhost:5000.

Uso
Rutas CRUD
Método	Ruta	Descripción
POST	/api/gamers	Crear un nuevo gamer.
GET	/api/gamers	Listar todos los gamers.
PUT	/api/gamers/:id	Actualizar un gamer.
DELETE	/api/gamers/:id	Eliminar un gamer.
Ejemplo de datos para POST
json
Copiar código
{
  "username": "JohnDoe",
  "email": "john.doe@example.com",
  "favoriteGame": "Minecraft"
}
