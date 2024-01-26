![Image1forYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Modelo de Cómputo "Yellowstone" de Morpheus
### Erik Voorhees
### 3 de enero de 2024

Una propuesta de revisión para la estructura de tokenomics de Morpheus en la incentivación de cómputo en una red de inteligencia artificial descentralizada.
Ver en Notion: https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1

## Resumen
En el Modelo de Cómputo Yellowstone, la red de Morpheus paga a los Proveedores solo por el cómputo realmente proporcionado a través de un proceso de oferta competitiva y asigna la producción escasa de Tokens pro-rata a los titulares de tokens MOR según el saldo, en lugar del pago. Esto mejora drásticamente la experiencia del usuario mientras minimiza la vulnerabilidad de Sybil. Yellowstone también incorpora las métricas importantes de tiempo y una prueba de Aprobado/Fallido para garantizar que los Proveedores sean suficientemente rápidos y precisos. Yellowstone preserva la privacidad al nunca enviar indicaciones o resultados a través del Router y minimiza las transacciones en la cadena de bloques para permitir una gran escala de operación. A través de este modelo, MOR logra un valor fundamental ya que permite el acceso perpetuo (aunque no ilimitado) al cómputo sin permisos, sin requerir transacciones por inferencia.

Si se adopta, este documento reemplaza la sección "Prueba de Cómputo, Registro y Recompensa" del [whitepaper de Morpheus](https://github.com/antonbosss/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/2.WhitePaper.md).

## Antecedentes
Morpheus utiliza la tokenomics para incentivar el cómputo suficiente y escalable como recurso para la inteligencia artificial generativa descentralizada y sin permisos. En su concepción original, Morpheus emitía el 24% de las emisiones de MOR directamente a los Proveedores de Cómputo, pro-rata según las solicitudes de inferencia recibidas, y priorizaba las solicitudes de inferencia a aquellos proveedores según la cantidad de MOR que poseían.

### Del whitepaper original:
"Las tarifas de transacción MOR pro-rata quemadas por cada Proveedor de Cómputo sirven como prueba del estado del Proveedor de Cómputo y ganan una proporción de los tokens MOR cada día.

Por ejemplo, si hay 100 Proveedores de Cómputo el día 1 cuando se lanza la red, entonces cada uno recibe una recompensa pro-rata según la cantidad de MOR que hayan quemado a través de las tarifas. En este caso, presumiendo que cada uno de los 100 proveedores de cómputo quemó 100 MOR, entonces el 1% de los 3,456 tokens MOR cada día = 34.56 MOR."

### Hay tres problemas principales con este enfoque:
1) Requiere que los usuarios paguen tarifas por transacción por inferencia. Aunque sean bajas, esto representa una fricción significativa y causará una mala experiencia de usuario y una inferioridad siempre presente en comparación con la experiencia de usuario de OpenAI. También requiere al menos una transacción en la cadena de bloques por inferencia, lo que probablemente no sea escalable incluso en L2. Cada evento de inferencia tiene un costo extremadamente bajo, y si se requiriera una transacción en la cadena de bloques, la viabilidad económica sería poco factible.
2) Este modelo es sustancialmente explotable porque los ingresos esperados para los proveedores de cómputo son mucho mayores que los costos reales de cómputo. Un adversario podría inundar solicitudes de inferencia de spam a su propio nodo de Proveedor de Cómputo y ganar una parte relativamente grande de tokens MOR cada día, aunque no se proporcionara valor económico a nadie. Es probable que conduzca a grandes cantidades de cómputo temprano (no utilizado), que desaparece una vez que la enorme oportunidad de ingresos se disipa, y los MOR gastados en ese subsidio temprano se perderían.
3) Si las solicitudes de inferencia se priorizan según la cantidad de MOR que poseen los Proveedores, entonces la red ignora el rendimiento de esos proveedores (tiempo de respuesta) y el costo de su procesamiento de inferencia. Estos son precisamente los dos factores que la red debería intentar optimizar (idealmente, el tiempo de respuesta y el costo de cómputo deberían ser lo más bajos posible). Si el proveedor que posee más MOR estaba utilizando una GPU de $200 de sus días de universidad, el rendimiento de inferencia para muchos usuarios sería extremadamente deficiente. La prioridad debería basarse en el precio de la oferta y el rendimiento, no en la posesión de MOR.

A continuación, se presenta el Modelo "Yellowstone" que modifica la tokenomics de Morpheus para la provisión de cómputo para abordar los problemas mencionados anteriormente. Este modelo funciona independientemente de la parte de las emisiones asignada al cómputo, y asumimos el estado actual del 24% de las emisiones totales.

### Los objetivos son:
* Permitir a los usuarios no pagar por inferencia (idealmente, no pagar en absoluto)
* Lograr una provisión eficiente, escalable y sostenible de recursos de cómputo sin permisos sin pagar en exceso por ello
* Incentivar la competencia de baja latencia y costos entre los Proveedores de Cómputo
* Minimizar el número de transacciones en la cadena de bloques (ya sea en L2 u otro lugar)
* Demostrar una demanda fundamentalmente sólida de MOR

## Modelo Yellowstone
Cuatro componentes involucrados:

### Usuarios
* Tienen Consultas
* Desean cálculos rápidos/precisos de forma gratuita y sin censura/vigilancia

### Proveedores
* Tienen capacidad de cómputo
* Desean dinero (MOR)

### Router
* Motor de procesamiento de alto rendimiento
* Puede estar relativamente centralizado al principio, pero en última instancia, debe descentralizarse

### Contrato de Cómputo
* Contrato inteligente sin permisos que recibe emisiones de MOR, realiza un seguimiento de créditos y débitos a los Proveedores, y paga a los Proveedores cuando se le llama.

## Pesos y Medidas Estándar

Existe una unidad atómica de inferencias en IA, medida en inferencias por segundo (IPS). Esto se puede comparar conceptualmente con el wei en la cadena de bloques. Las inferencias se utilizan para definir tasas en el enrutador de Yellowstone. Por lo tanto, el peso de una sola unidad de Morpheus AI es una inferencia. Dependiendo del tipo de solicitud, esto se puede aplicar a cualquier tarea de cómputo.

A medida que la IA y la cadena de bloques se fusionan en similitudes, Morpheus busca proporcionar un estándar de medidas de código abierto para aclarar la terminología utilizada tanto por la IA como por la cadena de bloques.

Hay dos tipos de indicaciones, definidas por el tamaño de la respuesta devuelta por un modelo:

***Indicaciones de Longitud Determinada***, donde la respuesta considera la longitud de la respuesta a devolver. Ejemplos de esto son:
- Creación de chat/imagen
- Diagnóstico de enfermedades
- Reconocimiento de objetos
- Detección de fraude

Las **Indicaciones de Longitud Indeterminada** requieren recursos para responder que solo son conocibles después de que se crea la respuesta. Ejemplos de indicaciones con respuestas no deterministas son:
- Canta una sonata sobre espaguetis.
- Genera un video de Feliz Cumpleaños
- Combina el modelo X con el modelo Y
- Corta un modelo 3D en un archivo .stl

Yellowstone se enfoca en las Indicaciones de Longitud Determinada. El enrutador descrito se construirá de manera que pueda manejar indicaciones no determinadas en el futuro, pero no para atenderlas hoy. Para lograr esto, utilizamos una medición estandarizada de la Inteligencia Artificial Descentralizada (DeAI).

## Tasas DeAI

### Expresiones de inferencias por segundo:

| Tipo | Respuesta | Tasa |
|------|----------|------|
| Determinada | Lenguaje | Tokens Inferidos por segundo (TPS)|
| Indeterminada - medios | Audio | Muestras Inferidas por segundo (MIPS) |
| Indeterminada - medios | Video | Marcos Inferidos por segundo (MIPS) |
| Indeterminada - tecnología futura | Formato Futuro Desconocido | NA |

La primera medida de inferencia para el enrutador de Yellowstone será tokens. Otros formatos de inferencia seguirán.

### Tiempo

El tiempo de bloque para la inferencia es de 12 segundos, lo que significa que un bloque de trans
 
## Definiciones

**"Usuarios"**: Definidos como cualquier entidad que tenga una dirección de MOR y envíe Solicitudes al Router, utilizando la computación. Esto puede ser una persona específica que envía Solicitudes desde un nodo de escritorio de Morpheus, o podría ser un bot, o podría ser una empresa o sitio web de terceros que interactúa con la red de Morpheus en nombre de sus usuarios finales (el uso de inferencia por parte de los usuarios finales no se rastrea ni se considera en el contrato de cómputo, excepto cuando hay un fallo de inferencia).

**"Proveedores"**: Definidos como cualquier entidad que ejecute un nodo que proporciona recursos de cómputo, tiene una dirección de MOR y ofrece ofertas de Tokens a través del Router. Cuando un Proveedor gana la oferta del Router, el Proveedor proporciona el recurso de cómputo (GPUs, etc.) para varios modelos de IA al Usuario.

**"Router"**: Definido como una aplicación de software que tiene una dirección de MOR y negocia el mercado de dos lados entre Usuarios y Proveedores. El Router registra y sigue las direcciones y ofertas de los Proveedores, procesa Solicitudes de los Usuarios, registra [milisegundos] y pruebas de Aprobación/Fallo de Solicitudes procesadas e instruye al Contrato de Cómputo para acreditar a los Proveedores elegibles para el pago en MOR. El Router nunca envía ni recibe transacciones de MOR (ni transacciones en ninguna cadena de bloques). El Router nunca ve el contenido de una Solicitud, ni la respuesta.

**"Contrato de Cómputo"**: Definido como un contrato inteligente que tiene una dirección de MOR, recibe todas las MOR emitidas asignadas al cubo de Cómputo, realiza un seguimiento de los montos adeudados a los Proveedores elegibles y paga MOR a los Proveedores elegibles cuando los Proveedores solicitan el pago.

**"Token" ("T")**: Es la menor cantidad de letras o píxeles ofertados a través del enrutador. A menudo, esto son ~4 caracteres de texto, o 5x5 píxeles de una imagen, etc. No debe confundirse con "tokens" de blockchain como los tokens ERC20 o el propio token MOR.

**"TokenMax"** a continuación se refiere a un número máximo de Tokens aceptados como pago por el Router.

**"RFC"**: significa "Request for Compute" (Solicitud de Cómputo). Un usuario envía un RFC al Router y especifica las unidades [LLM] a las que el usuario desea acceder, así como el [TokenMax], que es un límite en los T's aceptables en la respuesta. El Usuario querrá limitar esto porque números más altos = tiempos de espera más largos para respuestas, y cuentan más hacia [UserMax], que está limitado cada día.

### Protecciones del Contrato

Para evitar un ataque que reduzca o aumente la cantidad de MOR al manipular el uso de cualquier cómputo no utilizado, el pool de MOR no utilizado asignado a los Proveedores de Cómputo puede reducirse en no más del 1% por día de bloque. Esto es igual a las emisiones normales de cómputo + 1%.

### Incentivo de Inicio de Cómputo

Durante el primer año siguiente al período de inicio del Contrato de Capital, los 100 mejores Proveedores de Cómputo tendrán derecho a una cantidad pro-rata del 2,4% de las emisiones de MOR. Esto se calcula por los routers y se tiene en cuenta en el contrato de cómputo.

## Flujo de Trabajo
1) Usuarios, Proveedores y Router crean todas las claves públicas de MOR (esta es su identidad, todos los mensajes firmados como tal).
2) Si el Usuario tiene algún saldo de MOR, el Usuario puede enviar un mensaje firmado de Solicitud de Cómputo "RFC" al Router. El Usuario especifica [LLM] y [TokenMax].
3) El Router prioriza RFC según el saldo de MOR del Usuario (resuelve el problema de Sybil).
4) El Router selecciona un Proveedor que admite el [LLM], priorizado según la oferta más baja por Token en MOR.
5) El Router envía una comprobación de vida al Proveedor. Si es Aprobado, entonces
6) El Router conecta al Usuario con el Proveedor.
7) El Usuario envía una Consulta ([LLM],[prompt]) al Proveedor.
8) El Proveedor calcula la Consulta, envía el Resultado al Usuario.
9) El Usuario informa el Tiempo [milisegundos] entre los Pasos 4 y 5, los [Tokens] entregados y si es Aprobado/Fallido al Router.
10) El Router instruye al Contrato de Cómputo para acreditar al Proveedor con MOR si [milisegundos] por [Token] no es peor que X% por debajo de la media de las últimas Z consultas para ese [LLM] y si el Usuario informó [Aprobado].
11) (Algún tiempo después) El Proveedor solicita el pago de MOR al Contrato de Cómputo y el Contrato de Cómputo envía el pago de MOR si es válido (primera transacción de blockchain hasta ahora, se puede agrupar).

![ComputeContractImage2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Resultado
* El Usuario recibe un Resultado rápido para su Consulta y no paga nada (esto llevará a una increíble experiencia de usuario y, por lo tanto, a la adopción). **Resuelve Objetivo 1.**
* El Contrato de Cómputo pagó por la Cómputo a través de un proceso de licitación competitiva y una verificación de calidad/satisfacción del Usuario que lo ordenó. **Resuelve Objetivo 2.**
* El Proveedor recibe dinero (MOR) del Contrato de Cómputo siempre que la respuesta sea lo suficientemente rápida. El Proveedor recibe exactamente lo que pidió para proporcionar la computación. Si su solicitud es demasiado alta, otros ofrecerán menos, por lo que el sistema es eficiente y reducirá los precios de los Proveedores hacia el costo de la electricidad base. **Resuelve Objetivo 3**
* Se minimizó la cantidad de transacciones en cadena (muchas miles de Consultas pueden fluir sin una sola transacción en cadena). **Resuelve Objetivo 4**
* La capacidad de obtener cómputo rápido y gratuito impulsa la demanda de que los Usuarios mantengan Tokens MOR. **Resuelve Objetivo 5**
* Los Pasos 6 y 7 proporcionan una privacidad razonable (la Consulta nunca toca el Router, ni lo hace el Resultado). Los Proveedores se seleccionan de manera algo aleatoria y nunca conocen la identidad del Usuario excepto la dirección IP. Una mejor privacidad se puede lograr más adelante con TOR + FHE.
* El saldo MOR se redujo del Contrato de Cómputo. El contrato será solvente siempre que el pago de MOR < MOR ganado por período a partir de emisiones.
* Si el Usuario envía un RFC que excede el [UserMax] del Usuario, el Router rechazará la solicitud.
  
—-------------

## Presupuesto de Cómputo
La red Morpheus necesita determinar cuánto MOR está dispuesta a gastar en cómputo en un período dado (como cada día), esto se conoce como el Presupuesto de Cómputo. Cada período, hasta esta cantidad de MOR puede ser gastada por el Contrato de Cómputo. Este número multiplicado por el precio actual de MOR nos da un presupuesto en dólares para la adquisición de cómputo cada día.

Pregunta abierta 1: ¿Cómo debería determinarse el Presupuesto de Cómputo? La idea más simple es establecer el Presupuesto de Cómputo igual a las emisiones en el Contrato de Cómputo. De esta manera, el Contrato de Cómputo nunca se quedaría sin tokens. Pero, ¿qué hacer con los tokens no utilizados, dado que el máximo nunca se utilizaría cada día? Estos podrían, tal vez, ser asignados pro-rata a los actuales poseedores de tokens MOR. O podrían ser quemados. O podrían permanecer sin usar en el Contrato de Cómputo, para ser gastados en el futuro en cómputo (pero esto abre más preguntas de gobernanza).

## AccessRate
La red Morpheus asigna el recurso escaso de la producción de Ts a través del concepto de "AccessRate". El AccessRate determina cuántos Ts puede acceder cada token MOR por día. El acceso no utilizado no se acumula. El AccessRate siempre se muestra como una cantidad de Ts por 1 token MOR (como 1 MOR = 15,000 T). El AccessRate se determina en parte por MaxT, que cuantifica la cantidad máxima de Ts que la red puede comprar por día.

**AccessRate** = (1/Suministro MOR) * MaxT  
**MaxT** = ((Presupuesto de Cómputo MOR * Precio MOR) / Precio T) * 1000  
**UserMax** = MaxT * Saldo MOR del Usuario

### Suposiciones de Ejemplo:
**Suministro MOR** = 10,000,000 tokens MOR  
**Presupuesto de Cómputo MOR** = 3,000 tokens MOR por día  
**Precio MOR** = $20  
**Precio T** = $0.002 por 1000 Ts  
**Saldo del Usuario** = 5 tokens MOR

### Resultado de Ejemplo:
**MaxT** = 30,000,000,000 Ts (este es el máximo de Ts que la red puede comprar/producir cada día)  
**AccessRate** = 3,000 (así que cada token MOR concede acceso a 3,000 Ts por día)  
**UserMax** = 15,000 (un Usuario con 5 tokens MOR puede acceder hasta 15,000 Ts por día)

- Cada período (cada día), Morpheus como red tiene suficientes fondos para comprar X cantidad de Ts a proveedores de cómputo. X es una función de la cantidad de MOR que el Contrato de Cómputo está dispuesto a gastar (el "Presupuesto de Cómputo") multiplicado por el precio actual de MOR dividido por la tasa de mercado para Ts.
- Si el Presupuesto de Cómputo es de 3,000 MOR, y cada uno vale $20, entonces la red puede comprar (producir) hasta $60,000 de Ts ese día. Si la tasa actual para 1,000 Ts es de $0.002, entonces la red puede comprar hasta 30 mil millones de Ts (30m x 1000 Ts).
- Esa producción potencial de 30 mil millones de Ts se asigna por el saldo MOR, pro rata. Supongamos que hay 10,000,000 MOR en existencia. Un usuario con 500 tokens MOR (0.005% del total) podría acceder libremente hasta 1.5 millones de Ts ese día.
- Mientras el Presupuesto de Cómputo esté en o por debajo del nivel de emisiones, el Contrato de Cómputo no puede quedarse sin MOR.
- En realidad, la mayoría de los tokens permanecerán en billeteras e intercambios, y solo una fracción se usará para demandar la producción de Ts.

## Notas
* La demanda fundamental de MOR proviene de usuarios que desean acceder a la inteligencia artificial generativa y otras formas de cómputo en la red Morpheus.

* El tipo de hardware del proveedor es irrelevante para la red, siempre que cumpla con el test de aprobar/fallar del usuario. Cualquier proveedor que ofrezca más consultas de las que puede procesar eficientemente será penalizado al no aprobar este test.

* El modelo anterior paga a los proveedores SOLO cuando hay demanda de su cómputo. Esto evita la situación en la que se emiten grandes cantidades de MOR prematuramente cuando la red no lo necesita.

* Los proveedores deben demostrar que tienen un determinado LLM, firmando el hash del modelo LLM con su clave. Esto no demuestra que lo hayan usado, pero demuestra que lo descargaron e instalaron, lo cual representa trabajo, evitando así algunas formas de fraude sensibles a Sybil. Si los proveedores proporcionan resultados deficientes al usuario, este puede enviar [Fail] junto con [milisegundos] de vuelta al Router, y al proveedor no se le acreditará ese cómputo. Morpheus no necesita que todas las respuestas sean perfectas... solo necesita que haya respuestas suficientes que sean lo suficientemente buenas en comparación con las alternativas competidoras.

* Los ataques de Sybil al inundar la red con RFCs se evitan mediante el AccessRate. El "costo" de enviar un RFC es el costo de adquirir un token MOR dividido por la cantidad de RFC presentados en su nombre. El costo nunca es cero, y sin embargo, el usuario no sentirá una pérdida cada vez que se haga un RFC.

* La aprobación/fall es determinada por el usuario y controla la calidad en cierta medida. El usuario transmite el resultado de aprobación/fallo junto con [milisegundos] de vuelta al Router. Si es un fallo, no hay recompensa o punto de penalización (por determinar). No hay incentivo para falsificar un fallo de un proveedor (no hay incentivo monetario para hacerlo). Este mecanismo evita que los proveedores envíen resultados rápidos pero inútiles.
  Consideración: tal vez No Recompensa ocurra en caso de fallo solo si el MOR del usuario > MOR del proveedor. De lo contrario, solo un punto negativo que el Router puede usar en su lógica de privatización.

* Las cuatro partes (Usuario, Proveedor, Router y Contrato de Cómputo) tienen una dirección MOR única como su identidad. Todos los mensajes entre las partes requieren firmas (pero la mayoría no requiere transacciones en la cadena de bloques).

* Los proveedores deben tener un saldo no nulo para desalentar el ataque de Sybil desde el lado del proveedor.

* Si el criterio de [milisegundo] es más alto, la red será generalmente más rápida, pero desalienta a los proveedores más pequeños.

* Hay un desincentivo para proporcionar resultados lentos (sin ingresos después del cálculo).

* Un Router alojado centralmente para empezar probablemente está bien (descentralizar el Router eventualmente (¿IPFS? ¿O consorcio de nodos PoS?))
