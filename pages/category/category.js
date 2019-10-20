// pages/category/category.js
Page({
  /**
   * Page initial data
   */
  data: {
    productInfo: {},
    currentCategory: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.setData({
      productInfo: [
        {
          typeName: "水晶茶具",
          products: [
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1539.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1540.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1541.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1542.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1545.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1544.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            },
            {
              name: "国产(CHN)水晶矿优化厚壁小茶具",
              url:
                "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1543.JPG",
              price: 812,
              percentageOfDiscount: 50,
              priceDiscount: -406,
              percentageOfWithdraw: 60,
              priceWithdraw: 406
            }
          ]
        },
        {
          typeName: "水晶家私",
          products: [
            {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1561.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            },
            {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1562.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            },
            {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1563.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            },
            {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1564.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            },
            {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1565.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            }, {
              name: "国产(CHN)水晶矿优化去痣养生藤制家私",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1566.JPG",
              price: 1250,
              percentageOfDiscount: 50,
              priceDiscount: -625,
              percentageOfWithdraw: 60,
              priceWithdraw: 750
            }
          ]
        },
        {
          typeName: "水晶首饰",
          products: [
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1571.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            },
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1572.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            },
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1573.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            },
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1574.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            },
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1575.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            },
            {
              name: "国产(CHN)水晶矿优化手链",
              url: "https://gitee.com/cty9388/crystalProto/raw/master/images/pics/IMG_1576.JPG",
              price: 200,
              percentageOfDiscount: 50,
              priceDiscount: -100,
              percentageOfWithdraw: 60,
              priceWithdraw: 120
            }
          ]
        }
      ]
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {},

  clickTap(event) {
    let target = event.currentTarget;
    let dataset = target.dataset;
    let index = dataset.ind;

    this.setData({
      currentCategory: index
    });
    console.log(this.data.currentCategory);
  }
});
