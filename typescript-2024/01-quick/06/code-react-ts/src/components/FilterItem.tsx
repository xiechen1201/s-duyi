type PropsType = {
  filterTodos: (title: string) => void;
};

function FilterItem({ filterTodos }: PropsType) {
  return (
    <>
      <input type='text' onChange={(e) => filterTodos(e.target.value)} />
    </>
  );
}

export default FilterItem;
