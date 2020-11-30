// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

const produceNewsData = () => {
  // mock一组数据
  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|1-50': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
	  'name': '@cname', // 中文名称
	  "shopLogo": "@Image('20x20','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
      'id|+1': 1, // 属性值自动加 1，初始值为1
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      'birthday':'@date', // 日期
	  'city': Random.city(true), // 中国城0
	  'img':"@image('20x20','#c33')", //随机获取图片
	  'object|3':{object1:{
		'name': '@name', // 中文名称
		"shopLogo": "@Image('20x20','red', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
		'id|+1': 1, // 属性值自动加 1，初始值为1
		'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
		'birthday':'@date', // 日期
	  },object2:'object2',object3:'object3'},
    }]
  })
  let articles = [];

  //   for (let i = 0; i < 50; i++) {
  //     // let newArticleObject = {
  //     //   title: Random.csentence(5, 30), //  Random.csentence( min, max )
  //     //   thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
  //     //   author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
  //     //   date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串


  //     // }

  //     let table = {
  //       //   "data": { // 随机生成5到10个数组元素

  //       'name': Random.cname(), // 中文名称
  //       'id|+1': 1, // 属性值自动加 1，初始值为1
  //       'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
  //       'birthday': Random.date(), // 日期
  //       'city': Random.city(true), // 中国城市

  //       //   }
  //     }

  //     articles.push(table)
  //   }

  return {
    articles: data
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
