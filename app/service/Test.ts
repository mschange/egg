import { Service } from 'egg';

import { ValueObject } from '../interface/test'

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    // const result = await this.app.mysql.query('select * from blog_content');
    const result = await this.app.mysql.select('blog_content')
    console.log(result, 'result')
    return {
      result,
      name
    };
  }
  // 条件查询
  public async condition(id: number) {
    const result = await this.app.mysql.select('blog_content', {
      where: {type: id},
      columns: ['title', 'content', 'introduce'],
    })
    return result;
  }
  // 插入insert
  public async inserts(obj: ValueObject) {
    const result = await this.app.mysql.insert('blog_content', {
      title: obj.title,
      type: obj.type,
      introduce: obj.introduce,
      content: obj.content
    })
    return result ? {
      code: 200,
      message: '插入成功'
    } : {
      code: 500,
      message: '插入失败'
    }
  }
  // 更新update
  public async updates(obj: ValueObject) {
    const options = {
      where: {
        type: obj.type
      }
    };
    const result = await this.app.mysql.update('blog_content', obj, options);
    return result.affectedRows === 1 ? {
        code: 200,
        message: '修改成功',
        result
      } : {
        code: 500,
        message: '修改失败'
      };
  }
  // 删除数据
  public async delateItem(obj: number) {
    const result = await this.app.mysql.delete('blog_content', {type: obj});
    return result.affectedRows === 1 ? 
      {
        code: 200,
        message: '删除成功'
      } : {
        code: 500,
        message: '删除失败'
      }
  }
} 
