# Papel Amarillo de Morpheus


Este documento describe los detalles técnicos del nodo completo de Morpheus, el Contrato Inteligente de Morpheus y las pruebas relacionadas. Se presenta tal como está escrito en el libro blanco contribuido por los desarrolladores anónimos Morpheus, Trinity y Neo. Enlace al libro blanco aquí: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Versión Local 0.0.5 de Morpheus está en vivo en:
---------
**Morpheus Versión 0.0.5 por Mac**
- Descargar desde Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash for validation: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versión: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Versión 0.0.5 por Linux Debian**
- Descargar: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instrucciones: Para instalar, ejecuta el siguiente comando:
sudo dpkg -i /path/to/your/morpheus.deb
NOTA: En el comando anterior, reemplace "/path/to/your/morpheus.deb" con tu camino hacia el morpheus_0.0.5_amd64.deb file.
- SHA Hash para verificación:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versión: morpheus_0.0.5_amd64.deb
---------

Primera interacción con Morpheus 22 de octubre de 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus Contratos Inteligentes
En acciones en cadena que deben ser validadas por el contrato inteligente de Morpheus.

1. Bifurcación del contrato inteligente de rendimiento N2 redistribuida en Arbitrum
- A) Bloquear ETH a través de Thorchain, donar el rendimiento a Coders + Compute Providers.
- B) Calcular el prorrateo de ETH donado

2. Destrucción siempre demostrable de MOR:
- A) Dirección de grabación o función de grabación para tokens MOR.

3. Modelo de contrato ERC20 para la emisión de MOR
- A) Mint tokens MOR diariamente a Capital + Comunidad prorrateado al rendimiento de ETH donado.
- B) Mint tokens MOR diariamente para codificadores + proveedores de computación prorrateados al MOR quemado a través de tarifas.

4. Prueba de Morfeo: demuestre privacidad, código abierto y seguridad
- A) Publicar lista de Agentes auditados y sus puntajes de Smart Rank.
- B) Publicar la lista de LLM auditados y sus puntuaciones de Smart Rank.
- C) Publicar la lista de contratos inteligentes y sus puntuaciones de Smart Rank.
- D) Publicar una lista de indicaciones y sus puntuaciones de clasificación inteligente.

5. Fondos de Protección
- A) Distribuir MOR & ETH en casos de hacks, errores, bugs u otros ataques que causen pérdidas.
- B) Conjunto predefinido de escenarios de pago. Políticas de bifurcación/reversión en casos extremos.
- C) Desarrolladores encargados de determinar casos de ataques y sus soluciones.
- D) Fondos para recompensas por errores/hackers de sombrero blanco.
- E) Fondos para protección frente a actores del Estado Nación.

## Morpheus Diagramas de Contratos Inteligentes
Diagramas más descripciones de la acuñación y quema del MOR.
Descripciones de los contratos inteligentes requeridos.
Diagramas que detallan la distribución de ETH.

### Distribución de recompensas de contratos inteligentes Morpheus MOR
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Ejemplo de Distribución de MOR Tokens del día 1 y del día 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Ejemplo de cálculo de distribución para la dirección 0x123 Contribuidor de ETH

### Paso uno
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Paso dos
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Paso tres
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Ejemplo de cálculo de distribución para la dirección 0x123 Proveedor de computación

### Paso uno
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Paso dos
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Gráfico circular de distribución de tokens MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Herramientas de desarrollo y pila tecnológica de Morpheus.
- Llama2: LLM robusto de código abierto que se ejecuta localmente.
- Ollama - Embalaje para fácil instalación de Llama2.
- LangChain: herramienta de desarrollo para conectar LLM a tiendas y API de Vector.
- LangSmith Editor: código bajo para crear agentes en LangChain.
- Algoritmo SmartContractRank: selección de contratos inteligentes para el usuario según la intención
- Algoritmo AgentRank: selección de agentes especializados para ejecutar acciones para el usuario.
- Algoritmo PromptRank: selección de mensajes para los usuarios en función de la intención/acción proyectada.
- Filecoin - Almacenamiento y suministro de computación en la nube
- Akash Network: red informática abierta para ejecutar LLM/agentes.
- Carteras - Shapeshift, Exodus, otras opciones de código abierto.

## Diagramas de nodo completo de Morpheus para el agente/LLM para acciones Web3.
Auditorías de Agentes realizadas por Codificadores que generan una "Prueba de Agente" de que las funciones declaradas del Agente son tal como se presentan. Y, por supuesto, no contiene ningún código malicioso.

Marcador de posición para la descripción del proceso de auditoría, quién puede realizar auditorías y cómo certificar sus resultados. También se pagan incentivos a los auditores.

La prueba rápida generada en el momento de la interacción del usuario que muestra la intención expresada, coincide con la selección del contrato inteligente y los valores de la transacción se confirman con el usuario.

## Diagrama de usuario y colaborador de Morpheus
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### El diagrama muestra el flujo de UX desde la solicitud del usuario hasta la aprobación de la acción Web3.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### El diagrama muestra la versión de instalación local de Morpheus..
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### El diagrama muestra la versión de instalación de Morpheus P2P..
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### El diagrama muestra la versión descentralizada de Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Comunidad
- Agencia inteligente: desarrolladores independientes que crean casos de uso/agentes para usuarios de Morpheus.
- Comunidad global de desarrolladores: comunidad de desarrolladores, startups y usuarios en crecimiento.
- La comunidad recluta titulares de ETH para donar el rendimiento a los desarrolladores, la informática y la comunidad de Morpheus.
- Grupo de Desarrollo Distribuido - Desarrolladores de Contratos Inteligentes para codificar Contratos Inteligentes Morpheus.
- Morpheus Dapps - Marketplace para integraciones de Morpheus con el Smart Agent del usuario.
