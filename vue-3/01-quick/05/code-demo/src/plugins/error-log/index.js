import ErrorLog from './index.vue';

const errorLogPlugin = {
  install(app, options = {}) {

    const defaultOptions = {
      logToConsole: true, // 是否把错误打印到控制台
      remotoLogging: false, // 是否把错误发送到远程服务器
      remoteUrl: '' // 远程服务器地址
    };

    const config = Object.assign({}, defaultOptions, options);

    // 两种错误：
    // 1、全局 Vue 错误
    // 2、未捕获的 Promise 错误

    app.config.errorHandler = (err, vm, info) => {
      handleError(err, info);
    };

    window.addEventListener('unhandledrejection', (event) => {
      handleError(event.reason.toString(), 'unhandled promise rejection error!');
    });

    function handleError(error, info) {
      // 是否在控制台输出
      if (config.logToConsole) {
        // console.error 是被改写的
        console.error(`[错误: ${info}]`, error);
      }

      // 是否发送到远程服务器
      if (config.remotoLogging && config.remoteUrl) {
        fetch(config.remoteUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            error: error.message, // 错误信息
            stack: error.stack, // 错误堆栈
            info: info,
            time: new Date().toDateString()
          })
        });
      }
    }

    app.component(ErrorLog.name, ErrorLog);
  }
};

export default errorLogPlugin;
