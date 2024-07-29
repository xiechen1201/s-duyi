const fileInput = document.getElementsByName('avatar')[0];

fileInput.addEventListener('change', function (e) {
  let file = e.target.files[0];

  const formData = new FormData();
  formData.append('dec', '这是一段文本描述');
  formData.append('filename', file);

  fetch('http://101.132.72.36:5100/api/upload', {
    method: 'POST',
    body: formData // 传入的是 formData 会自动修改 content-type=multipart/form-data
  }).then((res) => {
    console.log(res);
  });
});
