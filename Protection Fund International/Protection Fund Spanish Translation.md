# Propuesta del Fondo de Protección de Morfeo

## Introducción
En el Libro Blanco de Morfeo, se asigna el 4% del total de la emisión de MOR para la creación de un "Fondo de Protección" y se delega a los proveedores de código que actúan como oráculos cuando se necesitan sus recursos.

#### Los tipos de acciones incluyen:
- Recompensar el descubrimiento de errores o vulnerabilidades para prevenir ataques.
- Pagar por auditorías antes de desplegar nuevos contratos inteligentes.
- Detener contratos inteligentes en caso de un ataque.
- Evaluar daños e implementar un mecanismo de compensación después de un ataque.
- Planificar para pérdidas significativas (escenario de hard fork).

## Casos Predefinidos para Pagos Menores
Antes de que los contratos inteligentes se lancen en la red Ethereum, se definen las condiciones bajo las cuales el Fondo de Protección realizará pagos en MOR o stETH.

## Tipos de Pagos:
1. Errores descubiertos y revelados responsablemente a los desarrolladores de contratos inteligentes de Capital, Computación, Código, Comunidad y el Fondo de Protección.
2. Pago por auditorías antes de desplegar nuevos contratos inteligentes en la red de Morfeo.
3. Pérdidas de usuarios de MOR o sETH debido a errores en los contratos inteligentes de Morfeo.
4. Pagos en casos donde los participantes no recibieron la emisión de MOR debido a fallos en los contratos inteligentes de Morfeo.

Los pagos del fondo de protección deben ser proporcionales al error, pérdida o error de emisión.

## Condiciones para Detener Contratos Inteligentes
Antes de determinar los pagos por compensación de daños, se deben establecer las condiciones que desencadenan la detención de contratos inteligentes en caso de un ataque en curso.

## Evaluación de Daños y Mecanismo de Pago
Los proveedores de código participarán en la evaluación de daños necesaria para la compensación. Primero, el incidente será detallado y publicado en el repositorio de GitHub del contrato inteligente afectado, incluyendo una lista de direcciones afectadas y las cantidades de MOR y/o stETH.

Si la mayoría de los proveedores de código (medido por el peso de sus tokens MOR retenidos), participando en la evaluación de daños (no más de 7 días), confirman el informe como VERDADERO, se iniciará un pago.

Una vez iniciado el pago, el software enviará un mensaje a los desarrolladores solicitando autorización del pago a las direcciones afectadas en las cantidades especificadas.

## Plan en Caso de Daños Sustanciales
La pérdida sustancial se define como un evento donde las pérdidas de MOR exceden los recursos totales del Fondo de Protección. En este caso, en lugar de pagos de MOR, los proveedores de código deben desplegar nuevos contratos inteligentes y ajustar manualmente los balances de MOR afectados. Esto efectivamente desencadenará un hard fork del código/balance de MOR, y todos los proveedores, poseedores de tokens y otros proveedores de infraestructura necesitarán actualizar su código a los nuevos contratos inteligentes.

En caso de pérdida de stETH debido a daños significativos, el Fondo de Protección pagará la cantidad máxima posible de manera proporcional considerando el daño de cada persona.

## Conclusión
Los errores y fallos en el software son una realidad, marcada en la historia desde los dos hard forks no intencionales en Bitcoin hasta The DAO en los primeros días de Ethereum.

Por lo tanto, planificar para varios escenarios y casos y cómo tratarlos con antelación es un enfoque sabio para la protección y mitigación de riesgos. Afortunadamente, gracias a los recursos preasignados en el Fondo de Protección, así como parte del fondo que genera ingresos a través de recompensas por comisión por proporcionar liquidez en AMM, los recursos asignados para la protección del usuario aumentarán con el tiempo.