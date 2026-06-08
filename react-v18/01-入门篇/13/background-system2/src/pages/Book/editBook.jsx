import { editBookApi, getBookByIdApi } from '@/services/book';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import BookForm from './coms/BookForm';

function EditBook(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    id && fetchData();
    async function fetchData() {
      const { data } = await getBookByIdApi(id);
      setBookInfo(data);
    }
  }, []);

  async function submitHandle() {
    await editBookApi(bookInfo._id, bookInfo);
    navigate('/book/bookList');
    message.success('编辑成功！');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: 800 }}>
        <BookForm
          type="edit"
          bookInfo={bookInfo}
          setBookInfo={setBookInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default EditBook;
