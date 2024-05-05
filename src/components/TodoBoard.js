import React, { useState } from "react";


function TodoBoard(props) { //TodoBoard 데이터 가져오기

    const [FinishedList, setFinishedList] = useState([])

    const finish = (index) => { 
        // 이동할 항목 피니시에 넣어주기

        const itemToFinish = props.TodoList[index];

        setFinishedList(prevList => [...prevList, itemToFinish]);

        props.TodoList.splice(index, 1);
        // TodoList에서 해당 항목을 제거합니다.
        
    }

    const Item_delete = (index) => {    
        //index 와 idx 요소가 맞으면 그것을 제외하고 재배열함
        //재배열후 변수에 담음
        const updatedFinishedList = FinishedList.filter((_, idx) => idx !== index);
        
    
        // 상태를 업데이트하여 화면을 다시 렌더링합니다.
        setFinishedList(updatedFinishedList);

    }

    return (
        <div>
            <div className="wrapper">

                <div className="todo">
                    <div className="title_Wrapper">
                        <div className="todo_title">해야 할 일</div>
                    </div>

                    <div className="list">
                        {props.TodoList.map((item, index) => (
                            <div className="todo_item_Wrapper" key={index}>
                                <div className="todo_item">{item}</div>
                                <button className="finish_btn" type="button" onClick={() => finish(index)}>완료</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="finish">
                    <div className="title_Wrapper">
                        <div className="finish_title">해낸 일</div>
                    </div>

                    <div className="list">
                        {FinishedList.map((item, index2) => (
                            <div className="todo_item_Wrapper" key={index2}>
                                <div className="todo_item">{item}</div>
                                <button className="finish_btn" type="button" onClick={() => Item_delete(index2)}>삭제</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoBoard
