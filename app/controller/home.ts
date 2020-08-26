import { Controller } from 'egg';

export default class HomeController extends Controller {
  // 查询全部
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  // 条件查询
  public async condition() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.condition(ctx.query.id);
  }
  // 插入数据
  public async inserts() {
    const { ctx } = this;
    const obj = {
      title: '这是是新加一条数据2',
      type: 2,
      introduce: '新加的introduce内容2',
      content: '新加的内容2'
    }
    ctx.body = await ctx.service.test.inserts(obj);
  }
  // 更新数据
  public async updates() {
    const { ctx } = this;
    const obj = {
      title: '这是更新后的title',
      type: 2,
      introduce: '更新后的内容',
      content: '更新的内容啊，看看行不行'
    }
    ctx.body = await ctx.service.test.updates(obj);
  }
  // 删除数据
  public async delateItems() {
    const { ctx } = this;
    const obj = 2;
    ctx.body = await ctx.service.test.delateItem(obj);
  }
}
