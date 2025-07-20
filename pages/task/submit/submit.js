Page({
  data: {
    taskId: '',
    taskName: '',
    imageUrl: '',
    taskData: null
  },
  onLoad: function(options) {
    const app = getApp();
    wx.request({
      url: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/deepseek_json_20250719_4ef900.json',
      success: (res) => {
        const task = res.data.find(item => item.id == options.uuid);
        this.setData({
          taskId: options.uuid,
          taskName: task.name,
          taskData: task
        });
      }
    });
  },
  chooseImage: function() {
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imageUrl: res.tempFilePaths[0]
        });
      }
    });
  },
  submitTask: function() {
    if (!this.data.imageUrl) {
      wx.showToast({
        title: '请上传图片',
        icon: 'none'
      });
      return;
    }
    
    // 模拟提交到服务器
    setTimeout(() => {
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      });
      
      // 增加积分
      const app = getApp();
      const newPoints = app.addPoints(10); // 每个任务增加10积分
      
      // 返回任务页并刷新数据
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      prevPage.completeTask(this.data.taskId);
      
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  }
})