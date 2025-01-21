# TS 模块解析策略

 基本上和 ES 大同小异。

 坑更加的多。

 - moduleResolution:

  - classic: 传统的解析策略，和 ES6 的模块解析策略基本一致，但是有一些区别。

  - node: node 的解析策略，和 node 的模块解析策略基本一致。

  - nodenext: node 的解析策略，但是支持 ES6 的模块解析。

  - bundled: bun 的解析策略，和 bun 的模块解析策略基本一致。

  TS 模块解析策略感觉和 CommonJS 差不多，只不过多了查找 package.json 中的 types 字段和 .d.ts 文件。