# Morpheus黃皮書

本文檔描述了Morpheus全節點、Morpheus智能合約以及相關證明的技術細節。
如白皮書所述，由匿名開發者Morpheus、Trinity和Neo共同貢獻。白皮書鏈接：https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## Morpheus的本地版本0.0.5已上線：
---------
**Mac的Morpheus版本0.0.5**
- 從Google Drive下載：https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- 用於驗證的SHA 256哈希：9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- 版本：Morpheus-0.0.5-x64.dmg

---------
**Linux Debian的Morpheus版本0.0.5**
- 下載：https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- 安裝指南：運行以下命令安裝：
```bash
sudo dpkg -i /path/to/your/morpheus.deb
```
注意：在上述命令中，將"/path/to/your/morpheus.deb"替換爲您的morpheus_0.0.5_amd64.deb文件路徑。
- 用於驗證的SHA哈希：
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
版本：morpheus_0.0.5_amd64.deb
---------

Morpheus的首次交互發生在2023年10月22日。
![Morpheus20231022首次交互](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus智能合約
需要通過Morpheus智能合約驗證的鏈上行爲。

1. 在Arbitrum上重新部署的N2收益智能合約分支
   - A) 通過Thorchain鎖定ETH，將收益捐贈給編碼者和計算提供者。
   - B) 計算捐贈的ETH的比例分配。

2. 永久可驗證的MOR銷燬：
   - A) MOR代幣的銷燬地址或銷燬函數。

3. 用於發行MOR的ERC20模板合約
   - A) 按照捐贈的ETH收益的比例，每日向資本+社區鑄造MOR代幣。
   - B) 按照通過費用銷燬的MOR的比例，每日向編碼者+計算提供者鑄造MOR代幣。

4. Morpheus的證明 - 展示隱私、開源和安全
   - A) 發佈經審計的代理及其智能排名分數的列表。
   - B) 發佈經審計的LLMs及其智能排名分數的列表。
   - C) 發佈智能合約及其智能排名分數的列表。
   - D) 發佈提示及其智能排名分數的列表。

5. 保護基金
   - A) 在黑客攻擊、錯誤、漏洞或其他導致損失的攻擊情況下，分配MOR和ETH。
   - B) 預定義的支付場景集合。在極端情況下進行分叉/回滾的政策。
   - C) 開發者負責確定攻擊情況及其補救措施。
   - D) 爲漏洞賞金/白帽黑客設置的基金。
   - E) 用於保護免受國家級行爲者攻擊的基金。

## Morpheus智能合約圖表
MOR鑄造和銷燬的圖表及描述。
所需智能合約的描述。
詳細說明ETH分配的圖表。

### Morpheus MOR智能合約獎勵分配
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### 第1天和第2天的MOR代幣分配示例。
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## 對地址0x123 ETH貢獻者的示例分配計算

### 第一步
![ETH捐贈者圖1](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### 第二步
![給予ETH的圖2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### 第三步
![給予ETH的圖3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## 對地址0x123計算提供者的示例分配計算

### 第一步
![計算提供者的MOR](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### 第二步
![計算提供者的MOR2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR代幣分配餅圖
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus開發者工具及技術棧。
- Llama2 - 可本地運行的健壯開源LLM。
- Ollama - 方便Llama2安裝的打包工具。
- LangChain - 開發者工具，用於將LLM連接到向量存儲和API。
- LangSmith編輯器 - 在LangChain上構建代理的低代碼工具。
- SmartContractRank算法 - 根據用戶意圖篩選智能合約
- AgentRank算法 - 爲用戶執行動作篩選專業代理。
- PromptRank算法 - 根據預測的意圖/動作爲用戶篩選提示。
- Filecoin - 存儲和雲計算提供。
- Akash網絡 - 用於運行LLM/代理的開放計算網絡。
- 錢包 - Shapeshift、Exodus、其他開源選項。

## Morpheus全節點圖表，用於Web3動作的代理/LLM。
由編碼者執行的代理審計，生成“代理證明”，證明代理的聲明功能如所呈現，當然不包含惡意代碼。

佔位符，用於描述審計流程，誰可以進行審計以及如何證明其結果。還有支付給審計員的激勵。

在用戶交互時生成的提示證明，顯示錶達的意圖符合智能合約選擇，並且與用戶確認的交易值匹配。

## Morpheus用戶和貢獻者圖表
![Morpheus用戶和貢獻者圖表](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### 圖表展示了從用戶提示到批准Web3動作的用戶體驗流程。
![用戶提示的web3任務和票證處理的UX流程](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### 圖表展示了Morpheus本地安裝版本。
![Morpheus本地圖表](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### 圖表展示了Morpheus P2P安裝版本。
![MorpheusP2P圖表](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### 圖表展示了Morpheus去中心化版本。
![Morpheus去中心化](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## 社區
- 智能代理機構 - 自由職業開發者爲Morpheus用戶構建用例/代理。
- 全球開發者社區 - 不斷成長的開發者、創業公司和用戶社區。
- 社區招募ETH持有者，捐贈收益給Morpheus開發者、計算和社區。
- 分佈式開發組 - 編寫Morpheus智能合約的智能合約開發者。
- Morpheus Dapps - Morpheus集成市場，與用戶的智能代理相結合。
