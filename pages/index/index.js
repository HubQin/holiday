//index.js

Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/9.jpg',
      '../../images/10.jpg',
    ],

    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgHeights: [],
    bg: '#C79C77',
    currentId: 0,
    texts: [
      '元旦：2018年12月30日至2019年1月1日放假调休，共3天。2018年12月29日(星期六)上班。',
      '春节：2月4日至10日放假调休，共7天。2月2日(星期六)、2月3日(星期日)上班。',
      '清明节：4月5日放假，与周末连休。',
      '劳动节：5月1日放假。',
      '端午节：6月7日放假，与周末连休。',
      '中秋节：9月13日放假，与周末连休。',
      '国庆节：10月1日至7日放假调休，共7天。9月29日(星期日)、10月12日(星期六)上班。',
    ],
  },
  
  onLoad: function () {},

  imgHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var imgHeight = winWid*imgh/imgw + "px";//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    var imgHeights = this.data.imgHeights;
    imgHeights[e.target.dataset.id] = imgHeight;
    this.setData({
      imgHeights:imgHeights, //设置高度
    })
  },

  bindchange: function (e) {
    console.log(e);
    this.setData({
      currentId: e.detail.current,
    })
  }
  
})
