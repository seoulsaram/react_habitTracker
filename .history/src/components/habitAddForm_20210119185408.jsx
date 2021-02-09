import React from "react";

const HabitAddForm = (props) => {
  //함수 안에서는 this없이도 접근할 수 있음
  const formRef = React.createRef();
  const inputRef = React.createRef();

  //오브젝트타입.

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    //form태그를 사용해서 서밋을 하면 브라우저가 새로고침되는데, 이걸 방지하는 코드.
    name && props.onAdd(name);
    //이름이 있다면~ onAdd에 이름을 보내줄거야

    //this.inputRef.current.value= '';
    formRef.current.reset();
    //해빗을 추가한 뒤 인풋창을 리셋시켜줌.
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
