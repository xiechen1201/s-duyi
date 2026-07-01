import { useState, useRef } from "react";

function setupCatList() {
  const catCount = 10;
  const catList = new Array(catCount);
  for (let i = 0; i < catCount; i++) {
    let imageUrl = "";
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl
    };
  }
  return catList;
}

function ChildCom4() {
  const itemsRef = useRef(new Map());
  const [catList, setCatList] = useState(setupCatList);

  const scrollToCat = (cat) => {
    console.log("🚀 ~ ChildCom4 ~ itemsRef:", itemsRef);
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Neo</button>
        <button onClick={() => scrollToCat(catList[5])}>Millie</button>
        <button onClick={() => scrollToCat(catList[8])}>Bella</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                itemsRef.current.set(cat.id, node);
              }}>
              <img src={cat.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ChildCom4;
