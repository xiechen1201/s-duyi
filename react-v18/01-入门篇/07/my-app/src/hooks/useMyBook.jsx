import { useState } from 'react';

export default function useMyBook() {
  const [bookName, setBookName] = useState('学习 ReactJS');
  return { bookName, setBookName };
}
