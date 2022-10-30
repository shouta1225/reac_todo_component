import React from 'react';

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo,index) => {
          return (
            <div key={todo} className="list-row">
              {/* ↑はreactで繰り返し処理を行う場合、reactの裏で動く仮想DOMが何個目の要素か正確に比較し、差分を取るために必要 */ }
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};