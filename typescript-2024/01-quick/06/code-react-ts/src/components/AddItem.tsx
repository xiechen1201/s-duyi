import { useState } from 'react';

type PropsType = {
  addItem: (title: string) => void;
};

function AddItem({ addItem }: PropsType) {
  const [title, setTitle] = useState<string>('');

  return (
    <>
      <input type='text' onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => addItem(title)}>添加任务</button>
    </>
  );
}

export default AddItem;
