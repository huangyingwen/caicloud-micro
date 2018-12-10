## 惯例

- all.yml 保存通用词汇
- error.yml 专用保存前后端接口错误的翻译，[参考文档](https://github.com/caicloud/platform/blob/master/docs/api/errors.md)
  - 页面可使用 `i18n.get('error.' + returnData.reason)` 获得消息
- \<resource\>.yml or \<module\>.yml 保存模块或资源相关的页面的词汇

  ```
  # cluster.yml
  # cluster properties 集群属性名称的翻译
  name: ...
  ..

  # cluster actions 通常为页面按钮、菜单文字等
  actions:
    name: ...
    ...

  # page tips 通常为页面的文字提示1
  tips:
    confirmDelete: ...
    ...

  # 更多分组 ...
  ```

- 页面开发时，先基于**中文(zh-cn)开发**，保证 zh-cn/\*.yml 包含全部引用的 i18n Key，再可通过脚本工具生成 en/\*.yml，对照中文翻译
