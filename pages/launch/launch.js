// pages/launch/launch.js
Page({
  data: {
    images: [],
    currentIndex: 0,
    carouselInterval: null
  },
  onLoad: function () {
    // 生成图片URL数组
    let imageUrls = [];
    for (let i = 1; i <= 15; i++) {
      imageUrls.push(`https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/landing/${i}.jpg`);
    }
    this.setData({ images: imageUrls });
    // 开始图片轮播
    this.startCarousel();
  },
  startCarousel: function () {
    // 清除已有定时器
    if (this.data.carouselInterval) {
      clearInterval(this.data.carouselInterval);
    }
    
    let interval = setInterval(() => {
      let nextIndex = (this.data.currentIndex + 1) % this.data.images.length;
      this.setData({ currentIndex: nextIndex });
      if (nextIndex === this.data.images.length - 1) {
        // 最后一张图片显示完毕，清除定时器并跳转
        clearInterval(interval);
        this.setData({ carouselInterval: null });
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/index/index',
            fail: (err) => {
              console.error('跳转失败:', err);
              // 跳转失败时尝试再次跳转
              wx.navigateTo({
                url: '/pages/index/index'
              });
            }
          });
        }, 2000);
      }
    }, 2000);
    this.setData({ carouselInterval: interval });
  },
  skipToIndex: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },
  onUnload: function () {
    // 页面卸载时清除定时器
    if (this.data.carouselInterval) {
      clearInterval(this.data.carouselInterval);
      this.setData({ carouselInterval: null });
    }
  }
})