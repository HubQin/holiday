// pages/bymonth/bymonth.js
Page({
  data: {
    allMonths: [

      {
        id: 1,
        month: '一月',        
      },
      {
        id: 2,
        month: '二月',
      },
      {
        id: 4,
        month: '四月',
      },
      {
        id: 5,
        month: '五月',
      },
      {
        id: 6,
        month: '六月',
      },
      {
        id: 9,
        month: '九月',
      },
      {
        id: 10,
        month: '十月',
      },
    ],
    index: 0,
    Height: '',
    imgUrl:'../../images/1.jpg',

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
  
  onLoad: function () {

  },

  bindPickerChange: function (e) {
    console.log("shuju:",e.detail.value);
    let index = e.detail.value;
    let id = this.data.allMonths[index].id;
    console.log(id)
    let url = '../../images/' + id + '.jpg';
    this.setData({
      imgUrl: url,
      index: index,
    })
  },

  imgHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid*imgh/imgw + "px"//等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
      Height:swiperH//设置高度
    })
  }
  
})