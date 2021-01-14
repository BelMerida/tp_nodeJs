
# tp_nodeJs

Pasos para ejecutar el programa del Ejercicio 7:

1.Ejecutar en la consola el comando "node index.js".

2.abrir el archivo crearrPersonas.html en el navegador web.

3.Llenar los campos del formulario y presionar el boton "submit" para el enviado.

Respuestas del Ejercicio 2:

1.Un servidor HTTP es un software que forma parte del servidor, cuyo objetivo es devolver la información cuando recibe peticiones por parte de los usuarios. Es decir, permite que los usuarios que desean ver una pagina web lo puedo hacer desde su navegador. 

2. Los verbos HTTP son un conjunto de métodos de solicitud para indicar la acción a realizar. Los mas conocidos son: GET, POST, HEAD, PUT, DELETE 

3.Un Request es el mensaje de petición que el navegador envía al servidor.
Un response es el mensaje que envía el servidor al cliente tras haber recibido una petición.  
Los headers son los que permiten al cliente y al servidor enviar información adicional junto a una petición o una respuesta. 

4. Un queryString es parte de una url la cual contiene la información que deben pasarse a la aplicación web.

5. El response code es el código del estado de la respuesta que envia el servidor, los cuales indican si se ha realizado satisfactoriamente una solicitud. Los posibles valores devueltos pueden ser: 
Informativas 100-199
Satisfactorias 200-299
Redirecciones 300-399
Errores de los clientes 400-499
Errores del servidor 500-599

6. En un Get los datos se envían de manera visible, en cambio en un post la información proporcionada es no visible.

7. El verbo http que se utiliza es GET
8. Las estructuras de datos JSON representan datos estructurados es utilizado para el intercambio de datos. Puede tomar la forma de cualquier tipo de dato, no solo arreglos u objetos, por ejemplo una cadena o un número.
Ejemplo:
{
    "arrayColores":[{
            "rojo":"#f00",
            "verde":"#0f0",
            "azul":"#00f",
            "cyan":"#0ff",
            "magenta":"#f0f",
            "amarillo":"#ff0",
            "negro":"#000"
        }
    ]
} 
Las estructuras de datos XML definen etiquetas personalizadas para descripción y organización de datos. De esta manera la información pueda ser almacenada, transmitida, procesada, visualizada e impresa, por muy diversos tipos de aplicaciones y dispositivos.
Ejemplo:
<libreria>
<libro categoría="COOKING">
<título lang="en">Everyday Italian</título>
<autor>Giada De Laurentiis</autor>
<año>2005</año>
<precio>30.00</precio>
</libro>
<libro categoría="INFANTIL">
<título lang="en">Harry Potter</título>
<autor>J K. Rowling</autor>
<año>2005</año>
<precio>29.99</precio>
</libro>
</libreria>

9. El estándar SOAP define como dos objetos de diferentes procesos pueden comunicarse por medio de intercambio de datos XML. Consiste en tres partes: un envelope, el cual define que hay un el mensaje y como procesarlo, un conjunto de reglas de codificación para expresar instancias de tipos de datos y una convención para representar llamadas a procedimientos y respuestas.

11. Los headers son esquemas de key value que contienen información sobre el http request y el navegador. También contener los datos de las cookies.
El key content-type se utiliza para inficar el media type del recurso, es decir dice al cliente que tipo de contenido será retornado. 

Ejercicio 3:
La diferencia entre el primer GET con el segundo GET es que luego realizar el POST podemos observar que los datos fueron agregados correctamente. 

