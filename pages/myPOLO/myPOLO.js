Page({
  data: {
    points: 0,
    level: 1,
    polarBearImage: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/北极熊.svg',
    islandImages: [
      'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/level/1.jpg',
      'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/level/2.jpg',
      'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/level/3.jpg'
    ]
  },
  onLoad() {
    const app = getApp();
    // 限制level最大为3
    const level = Math.min(app.globalData.level, 3);
    this.setData({
      points: app.globalData.points,
      level: level
    });
  },
  onShow() {
    const app = getApp();
    // 限制level最大为3
    const level = Math.min(app.globalData.level, 3);
    this.setData({
      points: app.globalData.points,
      level: level
    });
  }
});