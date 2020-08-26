import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 查询全部
  router.get('/', controller.home.index);
  // 条件查询
  router.get('/condition', controller.home.condition);
  // 插入数据
  router.get('/inserts', controller.home.inserts);
  // 更新数据
  router.get('/updatesDo', controller.home.updates);
  // 删除数据
  router.get('/delateItem', controller.home.delateItems);
};
