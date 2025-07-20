Page({
  navigateToTask: function() {
    wx.navigateTo({
      url: '/pages/task/task'
    });
  },
  navigateToPOLO: function() {
    wx.navigateTo({
      url: '/pages/myPOLO/myPOLO'
    });
  },
  navigateToUpgrade: function() {
    wx.navigateTo({
      url: '/pages/upgrade/upgrade'
    });
  },
  navigateToSnow: function() {
    wx.navigateTo({
      url: '/pages/snow/snow'
    });
  }
})