import { addBookApi } from '@/services/book';
import { useNavigate } from '@umijs/max';
import { useState } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import BookForm from './coms/BookForm';

function AddBook(props) {
  let navigate = useNavigate();

  let [newBookInfo, setNewBookInfo] = useState({
    bookTitle: '',
    bookIntro: '',
    downloadLink: '',
    requirePoints: '',
    bookPic: '',
    typeId: '',
  });

  async function submitHandle() {
    let { code, msg } = await addBookApi(newBookInfo);
    if (code !== 0) {
      return message.warning(msg);
    }
    navigate('/book/bookList');
    message.success('添加成功！');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '1000px' }}>
        <BookForm
          type="add"
          bookInfo={newBookInfo}
          setBookInfo={setNewBookInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default AddBook;
