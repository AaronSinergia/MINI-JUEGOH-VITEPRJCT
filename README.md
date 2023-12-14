Requisitos | Entrega

Crearemos un proyecto en vite y desarrollaremos un mínimo de 3 juegos.

<Tres en raya>
Tres en raya
Para el juego del tres en raya tendremos en el apartado visual un tablero de juego de 3x3, también, tendremos dos botones para elegir quien comienza jugando, si las "X" o los "O", en el momento de la elección desaparecerán los botones y el resto de turnos irán cambiando al contrario, si acaba de jugar "X" le tocará en el siguiente a "O".
-
Habrá que tener en cuenta que no se pueda sustituir el valor de una casilla ya marcada.
-
Queremos controlar cuando alguien gana haciendo comprobaciones o cuando se queda empate, en ambos casos el resultado se puede mostrar en un alert.
-
En cuanto a maquetación no tiene por qué ser muy complicado mientras cumpla la funcionalidad, por ejemplo, este es el estilo que utiliza google Chrome.

<Piedra papel o tijera>
Piedra papel o tijera
-
Para este juego jugaremos contra la máquina, es decir, en nuestro código tendremos una aleatoriedad que será lo que saque la máquina.
-
El usuario podrá elegir que jugar en ese turno y tendremos dos contadores, uno de victorias y otro de derrotas.
-
Estas cantidades las guardaremos en el localStorage para que la siguiente vez que abramos la aplicación sigamos viendo el mismo conteo

<Bingo>
Bingo!
-
Para el juego del Bingo tendremos un botón para iniciar el juego, una vez esté iniciado se quitará ese botón y aparecerá uno de pausar partida, si pausamos aparecerá uno de reiniciar partida y otro de reanudarla.
-
Además, tendremos una serie de números que irán saliendo en pantalla, los cuales NO se pueden repetir y un panel que me indique que números han ido saliendo.
Os aportamos un ejemplo: ejemplo
-
No hará falta que hagáis el tema de las voces, sin embargo os aportamos el nombre de la herramienta por si queréis buscar cómo poder hacer que la propia página os "hable" o "cante" los números: SpeechSynthesisUtterance

Para todos estos juegos tendréis que seguir una serie de pasos, estos pasos son:

1️⃣ Estudiar el funcionamiento lógico del juego que se quiere desarrollar
2️⃣ Pensar la mejor manera de manipular nuestros datos, tomar decisiones de que tipos de datos vamos a utilizar en nuestras variables
3️⃣ Dividir los problemas. Será muy importante ante un problema muy grande ir desgranando en problemas más pequeños, de los que primero necesitemos a los últimos
4️⃣ Plasmar nuestros datos de JS en elementos visuales de HTML que podemos maquetar con CSS

Requisitos

Los requisitos para aprobar el proyecto serán los siguientes:

1️⃣ Página Full responsive
2️⃣ Proyecto en Vite (HECHO)
3️⃣ Componentes
4️⃣ Los 3 juegos deberán estar en el mismo proyecto, así que tendremos botones que simulen una navegación en la página para mostrar los diferentes juegos
5️⃣ Ningún bug - El desarrollo de los juegos tiene que contemplar todos los casos posibles y que nosotros al evaluarlo no consigamos romperlo
6️⃣ Variables de colores y estilos reutilizables para el CSS
