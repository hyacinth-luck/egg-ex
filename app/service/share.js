'use strict';
const { Service } = require('egg');
class ShareService extends Service {
  async getCourseDetail() {
    const url = 'https://api-id.teachee-dev-backend.com/api/clientCourseAPI/courseDetail';
    const { data } = await this.ctx.curl(url, { courseId: '12', logId: new Date() });
    return data;

  }
}

module.exports = ShareService;
