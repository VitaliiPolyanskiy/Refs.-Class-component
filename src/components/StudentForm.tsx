import React from "react";
import Swal from "sweetalert2";
import "../styles/StudentForm.css";

type Props = {
    name: string;
    surname: string;
    age: number;
    rating: number;
};

export default class StudentFormClass extends React.Component<Props> {
  nameRef = React.createRef<HTMLInputElement>();
  surnameRef = React.createRef<HTMLInputElement>();
  ageRef = React.createRef<HTMLInputElement>();
  ratingRef = React.createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = this.nameRef.current?.value;
    const surname = this.surnameRef.current?.value;
    const age = Number(this.ageRef.current?.value);
    const rating = Number(this.ratingRef.current?.value);

           if (name !== "" && surname !== "" && age > 0 && rating >=1 && rating <= 12) {
            Swal.fire({
                title: "Информация о студенте",
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <b>Имя:</b> ${name}<br>
                        <b>Фамилия:</b> ${surname}<br>
                        <b>Возраст:</b> ${age}<br>
                        <b>Рейтинг:</b> ${rating}
                    </div>
                `,
                icon: "success",
                confirmButtonText: "ОК",
                confirmButtonColor: "#3a57e8",
            });
        } else {
            Swal.fire({
                title: "Ошибка",
                text: "Проверьте правильность заполнения формы.",
                icon: "error",
                confirmButtonText: "Понятно",
            });
        }
  };

  render() {
    const { name, surname, age, rating } = this.props;
    return (
      <form className="student-form" onSubmit={this.handleSubmit}>
        <h2>Форма студента</h2>

        <div className="field">
          <label>Имя:</label>
          <input type="text" defaultValue={name} ref={this.nameRef} />
        </div>

        <div className="field">
          <label>Фамилия:</label>
          <input type="text" defaultValue={surname} ref={this.surnameRef} />
        </div>

        <div className="field">
          <label>Возраст:</label>
          <input type="number" defaultValue={age} ref={this.ageRef} />
        </div>

        <div className="field">
          <label>Рейтинг:</label>
          <input type="number" defaultValue={rating} ref={this.ratingRef} />
        </div>

        <button type="submit" className="btn btn-primary">
          Показать данные
        </button>
      </form>
    );
  }
}
