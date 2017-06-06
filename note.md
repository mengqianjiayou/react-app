## react 技术栈
- react react-router4 redux react-redux

## 安装初始化package.json
``` 
yarn init -y
```
##webpack
``` 
$ npm install webpack webpack-dev-server
```
##　babel
``` 
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader url-loader html-webpack-plugin -D
```
## react 
``` 
npm install react redux react-redux react-router-dom react-dom -S
```
## fetch
``` 
npm install es6-promise whatwg-fetch -D
```
## express
``` 
npm install express -S
```
## scripts
``` 
"start":"webpack-dev-server --port 5000 --open --progress --colors",
"build":"webpack -p"
```
## 目录结构
- components 组件
- containers 页面组件,或者自己的subpage目录下
    - Home
        - subpage  智能组件
        - index.js 木偶组件
- index.js 用来控制显示哪个页面
- store 只有一个
- actions 用户发布动作
- reducers 定义规则的
- action-type 存储action的名字
