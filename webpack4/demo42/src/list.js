import $ from "jquery";
import _ from "lodash";
import common from "./common";
import "./common.css";
import "./list.css";

// 判断是不是一个数组
const result = _.isArray($(".red"));
console.log(result);
