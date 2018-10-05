module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    ctx.socket.emit('res', 'connected123!');
    console.log('connection!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};