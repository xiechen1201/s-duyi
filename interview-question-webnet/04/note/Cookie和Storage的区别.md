# Cookie 和 Storage 的区别

- 兼容性

    - Cookie 兼容性好，Storage 兼容性差；

- 默认行为

    - 响应头中会携带 Cookie，坏处是容易被攻击，例如 CSRF 攻击；

    - Storage 不会携带；

- 大小

    - Cookie 大小为 4KB，Storage 大小为 5MB；

- 域名

    - Cookie 与 domain、path 关联；

    - Storage 只与 domain 关联；