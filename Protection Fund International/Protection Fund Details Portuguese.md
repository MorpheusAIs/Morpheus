# Proposta do Fundo de Proteção Morpheus

## Introdução

O white paper do Morpheus reserva 4% de todas as emissões de MOR com o objetivo de um "Fundo de Proteção" e delega aos provedores de código agirem como oráculos no caso de seus recursos serem necessários.
Tipos de ações:

- Pagamento de recompensa por bugs para evitar ataques.
- Pagamento de auditorias antes da implantação de novos Smart Contracts.
- Interrupção dos Smart Contracts em caso de ataque em andamento.
- Sinalização e mecanismo para pagamento após um ataque.
- Plano em caso de Evento de Perda Significativa (Cenário de Hard Fork)

## Casos Predefinidos que Disparam Pagamentos Menores

Antes dos Smart Contracts irem ao ar na rede Ethereum, aqui estão definidas as condições sob as quais o Fundo de Proteção pagará MOR ou stETH.

## Tipos de Pagamentos:

1. Bugs descobertos e divulgados de forma responsável aos desenvolvedores de um Contrato de Smart Morpheus Capital, Código, Computação, Comunidade ou Fundo de Proteção.
2. Pagamento de auditorias antes da implantação de novos Smart Contracts na rede Morpheus.
3. Perdas de usuários de MOR ou stETH no caso de um Smart Contract Morpheus ser explorado.
4. Reembolsando fornecedores que não receberam emissões de MOR no caso de falha do Smart Contract Morpheus.

Os valores dos pagamentos do fundo de proteção devem ser proporcionais ao bug, perda ou erro de emissão.

## Condições de Interrupção para Smart Contracts

Antes que os pagamentos por danos possam ser calculados, deve haver condições que disparem uma interrupção dos Smart Contracts no caso de um ataque em andamento.

## Sinalização e Mecanismo para Pagamento

Os provedores de código participarão da sinalização quando um pagamento deverá ser acionado. Primeiro, um incidente será detalhado e postado no repositório GitHub do Smart Contract afetado. Incluindo uma lista de endereços afetados e quantidades de MOR e / ou stETH.

Se a maioria dos provedores de código (medidos pelo peso de seus tokens MOR mantidos) que participarem do período de sinalização (não superior a 7 dias) validarem o relatório como VERDADEIRO, então um pagamento será acionado.

Uma vez que um pagamento seja acionado, o software enviará uma mensagem aos desenvolvedores para autorizar um pagamento aos endereços afetados nas quantidades especificadas.

## Plano em Caso de Evento de Perda Significativa

Um Evento de Perda Significativa é definido como um evento no qual as perdas de MOR excedem os recursos totais do Fundo de Proteção. Nesse caso, em vez de realizar um pagamento de MOR, os provedores de código deverão implantar novos Smart Contracts e corrigir manualmente os saldos de MOR afetados. Isso efetivamente causaria um hard fork no código / saldos de MOR e todos os provedores, detentores de tokens e outros provedores de infraestrutura teriam que atualizar seu código para os novos Smart Contracts.

No caso de stETH perdido em um Evento de Perda Significativa, o Fundo de Proteção deverá pagar na medida do possível, de forma proporcional ao valor das perdas de cada pessoa.

## Conclusão

Bugs e erros de software são uma realidade e marcam a história desde os dois hard forks não intencionais do Bitcoin até o The DAO durante os primeiros dias do Ethereum.

Portanto, planejar com antecedência para diferentes cenários e casos e como lidar com eles é uma abordagem sábia para proteger e mitigar riscos. Felizmente, ao reservar recursos com antecedência no Fundo de Proteção e também parte do fundo de proteção ganhando recompensas LP no AMM, os recursos dedicados à proteção dos usuários deveriam crescer ao longo do tempo.
