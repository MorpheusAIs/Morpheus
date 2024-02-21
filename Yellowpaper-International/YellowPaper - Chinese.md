# Morpheus黄皮书

本文档描述了Morpheus全节点、Morpheus智能合约以及相关证明的技术细节。
如白皮书所述，由匿名开发者Morpheus、Trinity和Neo共同贡献。白皮书链接：https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## Morpheus的本地版本0.0.5已上线：
---------
**Mac的Morpheus版本0.0.5**
- 从Google Drive下载：https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- 用于验证的SHA 256哈希：9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- 版本：Morpheus-0.0.5-x64.dmg

---------
**Linux Debian的Morpheus版本0.0.5**
- 下载：https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- 安装指南：运行以下命令安装：
```bash
sudo dpkg -i /path/to/your/morpheus.deb
```
注意：在上述命令中，将"/path/to/your/morpheus.deb"替换为您的morpheus_0.0.5_amd64.deb文件路径。
- 用于验证的SHA哈希：
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
版本：morpheus_0.0.5_amd64.deb
---------

Morpheus的首次交互发生在2023年10月22日。
![Morpheus20231022首次交互](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus智能合约
需要通过Morpheus智能合约验证的链上行为。

1. 在Arbitrum上重新部署的N2收益智能合约分支
   - A) 通过Thorchain锁定ETH，将收益捐赠给编码者和计算提供者。
   - B) 计算捐赠的ETH的比例分配。

2. 永久可验证的MOR销毁：
   - A) MOR代币的销毁地址或销毁函数。

3. 用于发行MOR的ERC20模板合约
   - A) 按照捐赠的ETH收益的比例，每日向资本+社区铸造MOR代币。
   - B) 按照通过费用销毁的MOR的比例，每日向编码者+计算提供者铸造MOR代币。

4. Morpheus的证明 - 展示隐私、开源和安全
   - A) 发布经审计的代理及其智能排名分数的列表。
   - B) 发布经审计的LLMs及其智能排名分数的列表。
   - C) 发布智能合约及其智能排名分数的列表。
   - D) 发布提示及其智能排名分数的列表。

5. 保护基金
   - A) 在黑客攻击、错误、漏洞或其他导致损失的攻击情况下，分配MOR和ETH。
   - B) 预定义的支付场景集合。在极端情况下进行分叉/回滚的政策。
   - C) 开发者负责确定攻击情况及其补救措施。
   - D) 为漏洞赏金/白帽黑客设置的基金。
   - E) 用于保护免受国家级行为者攻击的基金。

## Morpheus智能合约图表
MOR铸造和销毁的图表及描述。
所需智能合约的描述。
详细说明ETH分配的图表。

### Morpheus MOR智能合约奖励分配
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### 第1天和第2天的MOR代币分配示例。
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## 对地址0x123 ETH贡献者的示例分配计算

### 第一步
![ETH捐赠者图1](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### 第二步
![给予ETH的图2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### 第三步
![给予ETH的图3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## 对地址0x123计算提供者的示例分配计算

### 第一步
![计算提供者的MOR](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### 第二步
![计算提供者的MOR2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR代币分配饼图
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus开发者工具及技术栈。
- Llama2 - 可本地运行的健壮开源LLM。
- Ollama - 方便Llama2安装的打包工具。
- LangChain - 开发者工具，用于将LLM连接到向量存储和API。
- LangSmith编辑器 - 在LangChain上构建代理的低代码工具。
- SmartContractRank算法 - 根据用户意图筛选智能合约
- AgentRank算法 - 为用户执行动作筛选专业代理。
- PromptRank算法 - 根据预测的意图/动作为用户筛选提示。
- Filecoin - 存储和云计算提供。
- Akash网络 - 用于运行LLM/代理的开放计算网络。
- 钱包 - Shapeshift、Exodus、其他开源选项。

## Morpheus全节点图表，用于Web3动作的代理/LLM。
由编码者执行的代理审计，生成“代理证明”，证明代理的声明功能如所呈现，当然不包含恶意代码。

占位符，用于描述审计流程，谁可以进行审计以及如何证明其结果。还有支付给审计员的激励。

在用户交互时生成的提示证明，显示表达的意图符合智能合约选择，并且与用户确认的交易值匹配。

## Morpheus用户和贡献者图表
![Morpheus用户和贡献者图表](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### 图表展示了从用户提示到批准Web3动作的用户体验流程。
![用户提示的web3任务和票证处理的UX流程](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### 图表展示了Morpheus本地安装版本。
![Morpheus本地图表](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### 图表展示了Morpheus P2P安装版本。
![MorpheusP2P图表](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### 图表展示了Morpheus去中心化版本。
![Morpheus去中心化](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## 社区
- 智能代理机构 - 自由职业开发者为Morpheus用户构建用例/代理。
- 全球开发者社区 - 不断成长的开发者、创业公司和用户社区。
- 社区招募ETH持有者，捐赠收益给Morpheus开发者、计算和社区。
- 分布式开发组 - 编写Morpheus智能合约的智能合约开发者。
- Morpheus Dapps - Morpheus集成市场，与用户的智能代理相结合。
