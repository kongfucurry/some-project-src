import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  InboxOutlined,
  GithubOutlined,
  ShoppingCartOutlined,
  FolderOutlined,
  BellOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import { Layout, Menu,Input,Space,Tree } from 'antd';
import React, { useState } from 'react';
// import tree from './doctree'
import './App.css'
import menu from './menu'
import treeData from './doctree';


//左侧菜单栏
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem('台账', 'sub1', [
    getItem('专职档案员台账', '1'),
    getItem('兼职档案员台账', '2'),
    getItem('系统管理员台账', '3'),
  ]),
  getItem('档案收集', 'sub2', [
    getItem('在线收集', '4'),
    getItem('离线收集', '5'),
    getItem('批量挂载', '6'),
  ]),
  getItem('档案整理', 'sub3', [
    getItem('整理档案', '7'),
    getItem('档案接收', '8'),
    getItem('档案整理', '9'),
    getItem('监督指导', '10'),
  ]),
  getItem('档案保存', 'sub4', [
    getItem('档案整理', '11'),
    getItem('档案鉴定', '12'),
    getItem('档案销毁', '13'),
    getItem('档案移交', '14'),
    getItem('载体管理', '15'),
    getItem('全卷宗管理', '16'),
    getItem('备份恢复', '17'),
  ])
];
//文件树
const { DirectoryTree } = Tree;
// const { DirectoryTree } = Tree;
// const treeData = [
//   {
//     title: 'parent 0',
//     key: '0-0',
//     children: [
//       {
//         title: 'leaf 0-0',
//         key: '0-0-0',
//         isLeaf: true,
//       },
//       {
//         title: 'leaf 0-1',
//         key: '0-0-1',
//         isLeaf: true,
//       },
//     ],
//   },
//   {
//     title: 'parent 1',
//     key: '0-1',
//     children: [
//       {
//         title: 'leaf 1-0',
//         key: '0-1-0',
//         isLeaf: true,
//       },
//       {
//         title: 'leaf 1-1',
//         key: '0-1-1',
//         isLeaf: true,
//       },
//     ],
//   },
//   {
//     title: 'parent 2',
//     key: '0-1',
//     children: [
//       {
//         title: 'leaf 1-0',
//         key: '0-1-0',
//         isLeaf: true,
//       },
//       {
//         title: 'leaf 1-1',
//         key: '0-1-1',
//         isLeaf: true,
//       },
//     ],
//   },
//   {
//     title: 'parent 3',
//     key: '0-1',
//     children: [
//       {
//         title: 'leaf 1-0',
//         key: '0-1-0',
//         isLeaf: true,
//       },
//       {
//         title: 'leaf 1-1',
//         key: '0-1-1',
//         isLeaf: true,
//       },
//     ],
//   },
// ];



const { Header, Sider, Content } = Layout;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  //菜单栏点击事件
  const onClick = (e) => {
    console.log('click ', e);
  };


  //左侧导航栏收起效果
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  //----


  // content部分
  // search搜索栏
  const { Search } = Input;
  const suffix = (
  <AudioOutlined
      style={{
      fontSize: 16,
      color: '#1890ff',
      }}
  />
  );
const onSearch = (value) => console.log(value);
//------------------


//content
////文件树显示
const onSelect = (keys, info) => {
  console.log('Trigger Select', keys, info);
};
const onExpand = (keys, info) => {
  console.log('Trigger Expand', keys, info);
}




  
  return (
    <Layout style={{height:600}}>
      {/* //侧边导航栏 */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{height:64,textAlign:'center',padding: 32 }}><GithubOutlined style={{color:'white'}}/></div>
        <Menu
        theme='dark'
      onClick={onClick}
      style={{
        
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          {/* 头部横向导航栏右侧点击 */}
          <div style={{float: 'right',}}>
          <a class='headerinfo'><ShoppingCartOutlined />我的借阅</a>
          <a class='headerinfo'><FolderOutlined />收藏夹</a>
          <a class='headerinfo'><BellOutlined /></a>
          </div>
        </Header>
          {/* 中间数据树部分 */}
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
            // backgroundColor:'red'
          }}
        >
          <Search
      placeholder="节点名称"
      onSearch={onSearch}
      style={{
        color: 'gray',
        margin: 10,
        width: 150,
      }}
    />
    <div style={{width:150}}>
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
    </div>

        </Content>
      </Layout>
    </Layout>
  );
};
export default App;


