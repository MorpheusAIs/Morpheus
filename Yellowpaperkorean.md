# 모르페우스 옐로우 페이퍼

본 논문에서는 모피어스 풀노드, 모피어스 스마트 컨트랙트 및 관련 증명의 기술적 세부 사항을 설명합니다.
익명의 개발자 Morpheus, Trinity 및 Neo가 기고한 백서에 작성된 대로 제시되었습니다. 백서 링크: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## Morpheus 로컬 버전 0.0.5는 다음 위치에서 제공됩니다.
---------
**Mac용 Morpheus 버전 0.0.5**
- Google 드라이브에서 다운로드: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- 검증을 위한 SHA-256 해시: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- 버전: Morpheus-0.0.5-x64.dmg

---------
**Linux Debian용 Morpheus 버전 0.0.5**
- 다운로드: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- 지침: 설치하려면 다음 명령을 실행하세요.
sudo dpkg -i /path/to/your/morpheus.deb
참고: 위 명령에서 "/path/to/your/morpheus.deb"를 morpheus_0.0.5_amd64.deb 파일 경로로 바꾸세요.
- 확인을 위한 SHA-256 해시:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
버전: morpheus_0.0.5_amd64.deb
---------

모피어스와의 첫 상호작용은 2023년 10월 22일입니다.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## 모피어스 스마트 계약
Morpheus 스마트 계약으로 검증해야 하는 체인 작업에 대해 설명합니다.

1. Arbitrum에 재배포된 N2 수익률 스마트 계약 포크
- A) Thorchain을 통해 ETH를 잠그고, Coders + Compute Providers에 수익금을 기부하세요.
- B) 기부된 ETH의 비율을 계산합니다.

2. MOR의 영원히 입증 가능한 파괴:
- A) 주소 소각 또는 MOR 토큰 소각 기능.

3. MOR 발행을 위한 ERC20 템플릿 계약
- A) 기부된 ETH 수익률에 비례하여 Capital + Community에 매일 MOR 토큰을 발행합니다.
- B) 수수료를 통해 소각된 MOR에 비례하여 Coders + 컴퓨팅 제공업체에 매일 MOR 토큰을 발행합니다.

4. 모피어스 증명 - 개인 정보 보호, 오픈 소스 및 안전성 입증
- A) 감사된 에이전트 목록과 스마트 순위 점수를 게시합니다.
- B) 감사된 LLM 목록과 스마트 순위 점수를 게시합니다.
- C) 스마트 계약 목록 및 해당 스마트 순위 점수를 게시합니다.
- D) 프롬프트 및 스마트 순위 점수 목록을 게시합니다.

5. 보호기금
- A) 해킹, 오류, 버그 또는 기타 손실을 초래하는 공격이 발생한 경우 MOR 및 ETH를 배포합니다.
- B) 지불을 위해 미리 정의된 시나리오 세트. 극단적인 경우 포크/롤백에 대한 정책.
- C) 공격 사례 파악 및 해결을 담당하는 개발자입니다.
- D) 버그 바운티/화이트 해커를 위한 자금.
- E) 국가 행위자로부터 보호하기 위한 기금.

## 모피어스 스마트 계약 다이어그램
MOR 주조 및 소각에 대한 설명과 다이어그램.
필요한 스마트 계약에 대한 설명입니다.
ETH 분포를 자세히 설명하는 다이어그램.

### 모피어스 MOR 스마트 계약 보상 분배
![새 버킷](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### 1일차와 2일차의 MOR 토큰 분배 예시.
![제목 없는 스프레드시트 - Google 스프레드시트 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## 주소 0x123 ETH 기여자의 분포 계산 예

### 1단계
![ETHDontator의 다이어그램1](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### 2단계
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### 3단계
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## 주소 0x123 컴퓨팅 공급자에 대한 분포 계산 예

### 1단계
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### 2단계
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR 토큰 분배 원형 차트
![모디스트](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## 모피어스 개발자 도구 및 기술 스택.
- Llama2 - 강력한 오픈 소스 LLM이 로컬에서 실행됩니다.
- Ollama - Llama2를 쉽게 설치할 수 있도록 패키징합니다.
- LangChain - LLM을 벡터 스토어 및 API에 연결하기 위한 개발자 도구입니다.
- LangSmith 편집기 - LangChain에서 에이전트를 구축하기 위한 로우 코드입니다.
- SmartContractRank 알고리즘 - 의도에 따라 사용자를 위한 스마트 계약 큐레이팅
- AgentRank 알고리즘 - 사용자를 위한 작업을 실행하기 위한 전문 에이전트를 선별합니다.
- PromptRank 알고리즘 - 예상 의도/행동을 기반으로 사용자를 위한 프롬프트를 큐레이팅합니다.
- Filecoin - 스토리지 및 클라우드 컴퓨팅 제공
- Akash 네트워크 - LLM/에이전트 실행을 위한 개방형 컴퓨팅 네트워크입니다.
- 지갑 - Shapeshift, Exodus, 기타 오픈 소스 옵션.

## Web3 작업용 에이전트/LLM에 대한 Morpheus 전체 노드 다이어그램.
에이전트의 명시된 기능이 제시된 대로 "에이전트 증명"을 생성하는 코더가 수행하는 에이전트에 대한 감사입니다. 물론 악성 코드도 포함되어 있지 않습니다.

감사를 수행할 수 있는 사람과 감사 결과를 인증하는 방법에 대한 설명을 위한 자리 표시자입니다. 또한 감사자에게 인센티브를 지급합니다.

표현된 의도를 보여주는 사용자 상호 작용 시 생성된 프롬프트 증명은 스마트 계약 선택과 일치하며 거래 값이 사용자에게 확인됩니다.

## 모피어스 사용자 및 기여자 다이어그램
![Morpheus 사용자 기여자 다이어그램](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### 다이어그램은 사용자 프롬프트부터 Web3 작업 승인까지의 UX 흐름을 보여줍니다.
![안내된 web3 작업 및 티켓팅을 위한 UX 흐름](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### 다이어그램은 모피어스 로컬 설치 버전을 보여줍니다.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### 모피어스 P2P 설치 버전을 보여주는 다이어그램입니다.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### 다이어그램은 모피어스 분산 버전을 보여줍니다.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## 지역 사회
- 스마트 에이전시 - Morpheus 사용자를 위한 사용 사례/에이전트를 구축하는 프리랜서 개발자입니다.
- 글로벌 개발자 커뮤니티 - 개발자, 스타트업 및 사용자 커뮤니티가 성장하고 있습니다.
- Morpheus 개발자, 컴퓨팅 및 커뮤니티에 수익금을 기부하기 위해 ETH 보유자를 모집하는 커뮤니티입니다.
- 분산 개발 그룹 - 모피어스 스마트 계약을 코딩하는 스마트 계약 개발자.
- Morpheus Dapps - 사용자의 스마트 에이전트와 Morpheus 통합을 위한 마켓플레이스입니다.
