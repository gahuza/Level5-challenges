// import React from "react";

// const DynamicList = (id) => {
//   function ItemList({items}) {
//     alert(`clicked item ${id}`);
//   }

//   return (
//     <div>
//       <h3>Dynamic lists()</h3>
//        <ul>
//       {items.map((item)=>(
       
//             <li key={item.id}>
//                 <button onClick={()=>handleClick(item.id)}>{item.name}</button>
//             </li>
       
//       ))}
//        </ul>
//     </div>
//   );
// };

// export default DynamicList;

import React from "react";

const DynamicList = ({ items }) => {
  // Event handler
  const handleClick = (id) => {
    alert(`Clicked item ${id}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Dynamic List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ margin: "8px 0" }}>
            <button
              onClick={() => handleClick(item.id)}
              style={{
                padding: "6px 12px",
                borderRadius: "5px",
                border: "1px solid #333",
                cursor: "pointer",
                backgroundColor: "#eee",
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;

