import React from 'react';

const modelsData = [
  {
    id: 1,
    name: 'GPT-4',
    description: 'OpenAI大型语言模型',
    company: 'OpenAI',
    version: '4.0',
    releaseDate: '2023-03-14',
    link: 'https://openai.com/gpt-4',
    country: 'USA',
    type: '模型',
  },
  {
    id: 2,
    name: '文心一言',
    description: '百度大语言模型应用',
    company: '百度',
    version: '1.0',
    releaseDate: '2023-06-01',
    link: 'https://wenxin.baidu.com',
    country: '中国',
    type: '应用',
  },
  // 你可以自己添加更多数据
];

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>中美大模型及应用最新版本列表</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 1000 }}
      >
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>名称</th>
            <th>功能介绍</th>
            <th>所属公司</th>
            <th>版本号</th>
            <th>发布日期</th>
            <th>国家</th>
            <th>类型</th>
            <th>链接</th>
          </tr>
        </thead>
        <tbody>
          {modelsData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.company}</td>
              <td>{item.version}</td>
              <td>{item.releaseDate}</td>
              <td>{item.country}</td>
              <td>{item.type}</td>
              <td>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1890ff' }}
                >
                  访问
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: 20, color: '#888' }}>
        数据静态示例，后续可自行维护更新
      </p>
    </div>
  );
}

export default App;
