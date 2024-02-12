# Morpheus Yellow Paper

이 문서는 Morpheus 풀 노드, Morpheus 스마트 컨트랙트 및 관련 증명의 기술적 세부 정보를 설명합니다. 
익명의 개발자 Morpheus, Trinity 및 Neo가 기여한 백서에 작성된 내용으로 제시됩니다. 백서 링크: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Morpheus의 Local Version 0.0.5:
---------
**Mac용 Morpheus Version 0.0.5**
- Google Drive에서 다운로드: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- 검증용 SHA 256 hash: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- 버전: Morpheus-0.0.5-x64.dmg

---------
**Linux Debian용 Morpheus Version 0.0.5**
- Google Drvie에서 다운로드: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- 설치 방법: 다음 명령을 실행하여 설치하십시오:
sudo dpkg -i /path/to/your/morpheus.deb
참고: 위 명령에서 "/path/to/your/morpheus.deb"를 사용자의 morpheus_0.0.5_amd64.deb 파일 경로로 대체하십시오.
- 검증용 SHA Hash:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
버전: morpheus_0.0.5_amd64.deb
---------

Morpheus와의 첫 상호작용은 2023년 10월 22일에 발생했습니다.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus 스마트 컨트랙트
다음은 Morpheus 스마트 컨트랙트에 의해 검증되어야하는 온체인 작업들 입니다.

1. Arbitrum에서 N2 Yield 스마트 컨트랙트의 포크를 재배포
- A) Thorchain을 통해 ETH를 잠그고, 수익을 Coder + Commpute Providers에 기부합니다.
- B) 기부된 ETH의 비례 비율을 계산합니다.

2. MOR의 영구 파괴 가능성:
- A) MOR 토큰의 소각 주소 혹은 소각 기능(funciton).

3. MOR 발행을 위한 ERC20 템플릿 컨트랙트
- A) Capital + Community에 기부된 ETH 수익에 비례하여 매일 MOR 토큰을 발행합니다.
- B) Coders + Compute providers에 수수료로 소각된 MOR에 비례하여 매일 MOR 토큰을 발행합니다.

4. Morpheus의 증명 - 개인 정보 보호, 오픈 소스 & 안전성을 증명합니다.
- A) 감사받은 에이전트 목록과 스마트 랭크 점수를 게시합니다.
- B) 감사받은 LLM의 목록과 스마트 랭크 점수를 게시합니다.
- C) 스마트 컨트랙트 목록과 스마트 랭크 점수를 게시합니다.
- D) 프롬프트 목록과 스마트 랭크 점수를 게시합니다.

5. 보호 기금
- A) 해킹, 오류, 버그 또는 기타 손실을 유발하는 공격이 발생한 경우 MOR 및 ETH를 분배합니다.
- B) 지불을 위한 미리 정의된 시나리오. 극단적인 경우에는 포크 / 롤백을위한 정책.
- C) 공격 사례 및 그들의 해결책을 결정하는 개발자.
- D) 버그 바운티 / 화이트 해커를 위한 자금.
- E) 국가 주체의 공격으로부터 보호하기 위한 자금.

## Morpheus 스마트 컨트랙트 다이어그램
MOR 발행 및 소각에 대한 다이어그램과 설명.
필요한 스마트 컨트랙트에 대한 설명.
이더리움의 분배를 자세히 설명하는 다이어그램.

### Morpheus MOR 스마트 컨트랙트 보상 분배
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Day1 과 Day2의 MOR 토큰 분배 예시
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## ETH Contributer (주소 0x123) 의 분배 계산 예시

### 1단계
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### 2단계
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### 3단계
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Compute Provider (주소 0x123) 의 분배 계산 예시

### 1단계
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### 2단계
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR 토큰 분배 파이 차트
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus 개발자 도구 및 기술 스택.
- Llama2 - 로컬에서 실행되는 강력한 오픈 소스 LLM.
- Ollama - Llama2를 쉽게 설치할 수 있는 패키징.
- LangChain - LLM을 벡터 스토어 및 API에 연결하기 위한 개발자 도구.
- LangSmith Editor - LangChain에서 에이전트를 구축하기 위한 로우 코드.
- SmartContractRank Algorithm - 사용자의 의도에 기반한 스마트 컨트랙트 선별.
- AgentRank Algorithm - 사용자를 위한 작업을 실행하기 위한 전문 에이전트 선별.
- PromptRank Algorithm - 예상 의도/동작에 기반한 사용자를 위한 프롬프트 선별.
- Filecoin - 스토리지 및 클라우드 컴퓨팅 제공.
- Akash Network - LLM/에이전트 실행을 위한 오픈 컴퓨트 네트워크.
- Wallets - Shapeshift, Exodus, 기타 오픈소스 옵션.

## Web3 작업용 에이전트/LLM을 위한 Morpheus 풀 노드 다이어그램
코더가 수행한 에이전트 감사는 에이전트의 명시된 기능이 제시된 대로 작동한다는 '에이전트 증명'을 생성합니다. 물론 악성 코드는 포함되지 않습니다.

감사 프로세스, 감사를 수행 할 수있는 사람 및 결과를 인증하는 방법에 대한 설명을 위한 자리 표시자가 있습니다. 또한 감사원에 대한 인센티브도 제공됩니다.

사용자 상호작용 시 생성된 프롬프트 증명은 표현된 의도가 스마트 컨트랙트 선택과 일치하고 트랜잭션 값이 사용자와 확인되었음을 보여줍니다. 

## Morpheus 사용자 & 기여자 다이어그램
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### 사용자 프롬프트에서 Web3 작업 승인까지의 UX 흐름을 보여주는 다이어그램
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Morpheus 로컬 설치 버전을 보여주는 다이어그램.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Morpheus P2P 설치 버전을 보여주는 다이어그램.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Morpheus 분산 버전을 보여주는 다이어그램.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## 커뮤니티
- Smart Agency - Morpheus 사용자를 위한 사용 사례/에이전트를 구축하는 프리랜서 개발자.
- Global Developer Community - 성장하는 개발자, 스타트업 및 사용자 커뮤니티.
- Morpheus 개발자, compute & community에 수익을 기부 할 ETH 보유자를 모집하는 커뮤니티.
- Distributed Development Group - Morpheus 스마트 컨트랙트를 코딩하는 스마트 컨트랙트 개발자.
- Morpheus Dapps - 사용자의 Smart Agent와의 통합을 위한 마켓플레이스.
