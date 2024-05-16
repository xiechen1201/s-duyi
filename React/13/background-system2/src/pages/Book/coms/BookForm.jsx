import { typeOptionCreator } from '@/utils/tool';
import { useDispatch, useSelector } from '@umijs/max';
import { useEffect, useRef } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import '@toast-ui/editor/dist/i18n/zh-cn';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button, Form, Image, Input, Select, Upload } from 'antd';

function BookForm({ type, bookInfo, setBookInfo, submitHandle }) {
  // state
  let dispatch = useDispatch();
  const { typeList } = useSelector((state) => state.type);

  useEffect(() => {
    if (!typeList.length) {
      dispatch({
        type: 'type/_initTypeList',
      });
    }
  }, []);

  // ref
  let formRef = useRef();
  let editorRef = useRef();

  // 回填数据
  if (formRef.current && editorRef.current) {
    formRef.current.setFieldsValue(bookInfo);

    if (editorRef.current.getInstance().getMarkdown() === '') {
      editorRef.current.getInstance().setHTML(bookInfo.bookIntro);
    }
  }

  // handler
  function addHandle() {
    const content = editorRef.current.getInstance().getHTML();
    updateInfo(content, 'bookIntro');
    submitHandle();
  }

  function updateInfo(newValue, key) {
    setBookInfo({ ...bookInfo, [key]: newValue });
  }

  return (
    <Form
      name="basic"
      ref={formRef}
      initialValues={bookInfo}
      autoComplete="off"
      onFinish={addHandle}
    >
      {/* 书籍标题 */}
      <Form.Item
        label="书籍标题"
        name="bookTitle"
        rules={[{ required: true, message: '请输入书名' }]}
      >
        <Input
          value={bookInfo?.bookTitle}
          onChange={(e) => updateInfo(e.target.value, 'bookTitle')}
        />
      </Form.Item>
      {/* 书籍介绍，需要使用到 markdown editor */}
      <Form.Item
        label="书籍介绍"
        name="bookIntro"
        rules={[{ required: true, message: '请输入书本相关的介绍' }]}
      >
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          language="zh-CN"
          ref={editorRef}
        />
      </Form.Item>
      {/* 下载链接 */}
      <Form.Item
        label="下载链接"
        name="downloadLink"
        rules={[{ required: true, message: '请输入书籍链接' }]}
      >
        <Input
          value={bookInfo?.downloadLink}
          onChange={(e) => updateInfo(e.target.value, 'downloadLink')}
        />
      </Form.Item>
      {/* 所需积分 */}
      <Form.Item
        label="所需积分"
        name="requirePoints"
        rules={[{ required: true, message: '请选择下载所需积分' }]}
      >
        <Select
          style={{ width: 200 }}
          onChange={(value) => updateInfo(value, 'requirePoints')}
        >
          <Select.Option value={20} key={20}>
            20
          </Select.Option>
          <Select.Option value={30} key={30}>
            30
          </Select.Option>
          <Select.Option value={40} key={40}>
            40
          </Select.Option>
        </Select>
      </Form.Item>
      {/* 书籍分类 */}
      <Form.Item
        label="书籍分类"
        name="typeId"
        rules={[{ required: true, message: '请选择书籍分类' }]}
      >
        <Select
          style={{ width: 200 }}
          onChange={(value) => updateInfo(value, 'typeId')}
        >
          {typeOptionCreator(Select, typeList)}
        </Select>
      </Form.Item>
      {/* 书籍图片的预览，这个是在修改书籍的时候会显示之前书籍的图片 */}
      {type === 'add' ? null : (
        <Form.Item label="当前封面" name="bookPicPreview">
          <Image src={bookInfo?.bookPic} width={100} />
        </Form.Item>
      )}
      {/* 书籍封面 */}
      <Form.Item label="书籍封面" valuePropName="fileList">
        <Upload
          action="/api/upload"
          listType="picture-card"
          maxCount={1}
          onChange={(e) => {
            if (e.file.status === 'done') {
              // 说明上传已经完成
              const url = e.file.response.data;
              updateInfo(url, 'bookPic');
            }
          }}
        >
          <PlusOutlined />
        </Upload>
      </Form.Item>
      {/* 确认修改按钮 */}
      <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {type === 'add' ? '确认新增' : '修改'}
        </Button>
        <Button type="link" htmlType="submit" className="resetBtn">
          重置
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BookForm;
