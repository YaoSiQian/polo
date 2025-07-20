App({
  globalData: {
    points: 10,
    level: 1,
    completedTaskIds: [],
    products: [
      {
        id: 1,
        name: '雪团子',
        description: '可爱的雪团子，周围散发着魔力。【使用后可以提升1个等级，拓宽冰岛的大小】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/雪球.png',
        price: 20,
        requiredLevel: 1
      },
      {
        id: 2,
        name: '环保袋',
        description: '这是 Polo 最喜欢的款式！带上环保袋，就不用担心白色污染侵蚀土地啦！【使用后可以对 亲近自然 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/微信图片_20250718214442.jpg',
        price: 15,
        requiredLevel: 2
      },
      {
        id: 3,
        name: '公共交通卡',
        description: '一卡在手，天下 Polo 有！乘坐公共交通既轻松愉快，也低碳环保！【使用后可以对 绿色出行 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/微信图片_20250718221356.jpg',
        price: 20,
        requiredLevel: 2
      },
      {
        id: 4,
        name: '新鲜蔬果',
        description: 'Polo 最爱吃的健康食物，由于减少了长途运输带来的碳足迹而看起来十分新鲜。【使用后可以对 低碳饮食 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/微信图片_20250718215103.jpg',
        price: 20,
        requiredLevel: 2
      },
      {
        id: 5,
        name: '二手衣服',
        description: 'Polo 不需要穿衣服，但他收到这份充满岁月痕迹、重复利用的礼物十分开心【使用后可以对 废物利用 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/微信图片_20250719110342.jpg',
        price: 20,
        requiredLevel: 2
      },
      {
        id: 6,
        name: '竹质餐具',
        description: 'Polo 也想学习使用筷子，这份可降解的“教具”对他很有帮助！【使用后可以对 新材料 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/QQ20250719-111301.png',
        price: 20,
        requiredLevel: 2
      },
      {
        id: 7,
        name: '新能源汽车',
        description: 'Polo 不会开车，但他看到这份环保的礼物十分开心【使用后可以对 废物利用 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/微信图片_20250719112114.jpg',
        price: 20,
        requiredLevel: 2
      },
      {
        id: 8,
        name: '太阳能板',
        description: '当 Polo 发现这份礼物时，一定会很惊喜的【使用后可以对 环保 类任务提供积分增益】',
        image: 'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/Mini鹅创想营/cd2516/QQ20250719-111831.png',
        price: 20,
        requiredLevel: 2
      }
    ]
  },
  getPoints() {
    return this.globalData.points;
  },
  getLevel() {
    return this.globalData.level;
  },
  addPoints(points) {
    this.globalData.points += points;
    return this.globalData.points;
  },
  addLevel(amount) {
    this.globalData.level += amount;
    return this.globalData.level;
  },
  addCompletedTask(taskId) {
    if (!this.globalData.completedTaskIds.includes(taskId)) {
      this.globalData.completedTaskIds.push(taskId);
    }
  },
  getCompletedTasks() {
    return this.globalData.completedTaskIds;
  }
})