const app = getApp()

Page({
  data: {
    product: null,
    currentPoints: 0,
    currentLevel: 1,
    showLevelRequirement: false
  },

  onLoad(options) {
    const productId = parseInt(options.id)
    const product = app.globalData.products.find(p => p.id === productId)
    
    this.setData({
      product: product,
      currentPoints: app.getPoints(),
      currentLevel: app.getLevel(),
      showLevelRequirement: product.requiredLevel > 1
    })
  },

  handlePurchase() {
    const { product, currentPoints, currentLevel } = this.data
    
    if (currentLevel < product.requiredLevel) {
      wx.showToast({
        title: `需要等级${product.requiredLevel}才能购买`,
        icon: 'none'
      })
      return
    }
    
    if (currentPoints >= product.price) {
      app.addPoints(-product.price)
      
      if (product.name === '雪团子') {
        app.addLevel(1)
        wx.showToast({
          title: '等级提升成功!',
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: '购买成功!',
          icon: 'success'
        })
      }
      
      this.setData({
        currentPoints: app.getPoints()
      })
      
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    } else {
      wx.showToast({
        title: '积分不足',
        icon: 'none'
      })
    }
  }
})