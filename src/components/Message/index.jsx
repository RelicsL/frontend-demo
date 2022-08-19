import { message } from "antd";
import get from 'lodash/get';

export function showError(s) {
  message.destroy();
  message.config({
      top: window.innerHeight - 120,
      duration : 4,
  });
  message.error(s);
}

export function showMessage(s) {
  message.destroy();
  message.config({
      top: window.innerHeight - 120,
      duration : 2,
  });
  message.success(s);
}

export function showInfo(s) {
  message.config({
      top: window.innerHeight - 120,
      duration : 2,
  });
  message.info(s);
}

export function getError(err){
  return get(err, 'response.data.msg');
}