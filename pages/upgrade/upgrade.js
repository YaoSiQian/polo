Page({
  data: {
    points: 0,
    level: 1,
    products: []
  },

  onLoad: function() {
    const app = getApp();
    this.setData({
      points: app.globalData.points,
      level: app.globalData.level,
      products: app.globalData.products
    });
  },

  onShow: function() {
    const app = getApp();
    this.setData({
      points: app.globalData.points,
      level: app.globalData.level
    });
  },

  navigateToDetail(e) {
    const productId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `description/description?id=${productId}`
    })
  }
})