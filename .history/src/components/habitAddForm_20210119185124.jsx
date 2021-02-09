import React from 'react';


const HabitAddForm = (props) => {(
        formRef = React.createRef();
        inputRef = React.createRef();
        
        //오브젝트타입.
      
        onSubmit = (event) => {
          event.preventDefault();
          const name = this.inputRef.current.value;
          //form태그를 사용해서 서밋을 하면 브라우저가 새로고침되는데, 이걸 방지하는 코드.
          name && this.props.onAdd(name);
          //이름이 있다면~ onAdd에 이름을 보내줄거야 
      
          //this.inputRef.current.value= '';
          this.formRef.current.reset();
          //해빗을 추가한 뒤 인풋창을 리셋시켜줌.
        };       
    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
    <input
      ref={this.inputRef}
      type="text"
      className="add-input"
      placeholder="Habit"
    />
    <button className="add-button">Add</button>
  </form>       
    )
};

export default HabitAddForm;




export default HabitAddForm;
