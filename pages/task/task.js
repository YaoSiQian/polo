Page({
  data: {
    completedTasks: [],
    pendingTasks: [],
    points: 0,
    level: 1
  },
  onLoad: function() {
    this.loadTasks();
    const app = getApp();
    this.setData({
      points: app.globalData.points,
      level: app.globalData.level
    });
  },
  onShow: function() {
    const app = getApp();
    this.setData({
      points: app.globalData.points,
      level: app.globalData.level
    });
  },
  loadTasks: function() {
    const app = getApp();
    wx.request({
      url: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/deepseek_json_20250719_4ef900.json',
      success: (res) => {
        const allTasks = res.data;
        const completedIds = app.getCompletedTasks();
        // 分离已完成和未完成任务
        const completedTasks = allTasks.filter(task => completedIds.includes(task.id));
        let pendingTasks = allTasks.filter(task => !completedIds.includes(task.id));
        // 随机选择5个未完成任务
        pendingTasks = this.getRandomTasks(pendingTasks, 5);
        this.setData({
          completedTasks,
          pendingTasks
        });
      }
    });
  },
  getRandomTasks: function(tasks, count) {
    const shuffled = [...tasks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },
  navigateToSubmit: function(e) {
    const taskId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/task/submit/submit?uuid=${taskId}`
    });
  },
  completeTask: function(taskId) {
    const { pendingTasks, completedTasks } = this.data;
    const taskIndex = pendingTasks.findIndex(t => t.id == taskId);
    if (taskIndex !== -1) {
      const completedTask = pendingTasks[taskIndex];
      pendingTasks.splice(taskIndex, 1);
      completedTasks.push(completedTask);
      const app = getApp();
      app.addCompletedTask(taskId);
      this.setData({
        pendingTasks,
        completedTasks,
        points: app.globalData.points
      });
      // 使用wx.showModal代替dialog组件
      wx.showModal({
        title: '完成啦！',
        content: completedTask.improve,
        showCancel: false,
        confirmText: '确定'
      });
    }
  },
  refreshTasks: function() {
    this.loadTasks();
  }
})