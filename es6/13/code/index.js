const URL = 'https://v.api.aa1.cn/api/bilibili-rs/';

/* fetch(URL)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* getBilibili();
async function getBilibili() {
  let result = await fetch(URL);

  console.log(result);

  //  let text = await result.text()
  //  console.log(text);

  let json = await result.json();
  console.log(json);
} */

// TODO:===========================

/* const request = new Request(URL);
fetch(request)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err);
  }); */

/* function getRequstInfo() {
  const url = 'https://v.api.aa1.cn/api/bilibili-rs/';
  const req = new Request(url, {});
  return req;
}
console.log(getRequstInfo()); */

// TODO:===========================

/* let resp = new Response('{"name":"张三"}', {
  // response 对象的一些配置
  ok: true,
  status: 200
});
async function getJSON(resp) {
  let res = await resp.json();
  console.log(res);
  return res;
}
getJSON(resp); */

// TODO:===========================

/* fetch(URL, {
  headers: {
    test: 'test'
  }
}).then((res) => console.log(res)); */

/* const headers = new Headers({ test: 'test' });
fetch(URL, {
  headers
}).then((res) => console.log(res)); */

/* fetch('https://v.api.aa1.cn/api/bilibili-rs/').then((res) => {
  console.log(res);
  console.log(res.headers.has('content-type'));
  console.log(res.headers.get('content-type'));

  res.headers.forEach((value, key) => console.log(key, value));

  for (const iterator of res.headers.entries()) {
    console.log(iterator);
  }
}); */
