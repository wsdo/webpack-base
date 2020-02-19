/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2020-02-19 14:41:58
 * @LastEditors  : starkwang
 * @LastEditTime : 2020-02-19 16:11:53
 * @Description: file content
 */
import _ from "lodash";
function CreateDom() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["Welcome", "to", "webpack", "base"], " ");
  document.body.appendChild(element);
  return element;
}

CreateDom()
