##1.技术栈
* react
* taro.js
* redux

##2.注意事项（遇到的坑）
```javascript
1.redux的使用
(1)首先在constants文件夹中定义相关模块的事件名
格式 export const 事件名=string
(2)在actions中返回对应事件名的action对象
 格式 import {事件名} from 'constants'
 		export const actionname = ()=>{
 		return {
 		}
 		}
(3)在 reducer中根据constants中相应事件名做出相应操作
格式 import {事件名} from 'constants'
	const INIT_STATE={}
	export default function module(state=INIT_STATE,aciton){
		swich(action.type){
			case:事件名
		}
	}
(4)将各个模块的reducer使用 import { combineReducers } from 'redux'
							export export default combineReducers({
  counter,
  Todo,
  movie
})

2.使用Taro.request()发送ajax的坑
将url复制到浏览器，查看浏览器中的request header中的content-type，将Taro.request中的heaer设置为相应的content-type
当请求携带参数是 将请求头 'content-type':'application/x-www-form-urlencoded' 这样设置
3.在列表渲染中使用条件渲染，taro.js不支持这么使用，若有相关需求
需要Array.filter(item=>{}).map()实现相关需求
4.若出现莫名其妙的问题，更新taro即可！
5.taro在列表渲染中无法使用自定义组件，自定义组件无法获取props和无法执行生命周期函数
```
##3.使用

本项目电影部分后端使用豆瓣api。音乐部分使用github上面的一个网易云音乐的api，项目地址[https://binaryify.github.io/NeteaseCloudMusicApi/#/](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
需要将该项目在本地运行才可以使用本项目

##4.运行效果
