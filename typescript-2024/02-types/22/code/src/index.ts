const roles = ["角色列表", "用户删除", "用户查询", "权限详情"] as const
type Role = typeof roles[number]; //"角色列表" | "用户删除" | "用户查询" | "权限详情"