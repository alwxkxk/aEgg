const PREFIX = 'room';

module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger, helper } = ctx;
    const nsp = app.io.of('/');
    socket.emit("res","you are connect middleware")
    console.log("123")

    await next();

    // 用户离开
    console.log("456")

  };
};