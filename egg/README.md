# aegg

## API
所有响应数据都以JSON格式返回。TODO:会在helper里规范格式。
### HTML

### socketio

#### room
所有房间的消息都是以"msg"为主题发送。
- 系统信息 “system-room”

```javascript
//只需要发送一次，后端就会把socket列入系统信息房间，该房间每秒推送一次系统信息。
socket.emit("system-room.join");
//离开房间
socket.emit("system-room.leave");
```


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org