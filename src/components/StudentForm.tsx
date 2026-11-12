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

    if (name !== "" && surname !== "" && age > 0 && rating >= 1 && rating <= 12) {
            Swal.fire({
                title: "Інформація про студента",
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <b>Ім'я:</b> ${name}<br>
                        <b>Прізвище:</b> ${surname}<br>
                        <b>Вік:</b> ${age}<br>
                        <b>Рейтинг:</b> ${rating}
                    </div>
                `,
                icon: "success",
                confirmButtonText: "ОК",
                confirmButtonColor: "#3a57e8",
            });
        } else {
            Swal.fire({
                title: "Помилка",
                text: "Перевірте правильність заповнення форми.",
                icon: "error",
                confirmButtonText: "Зрозуміло",
            });
        }
  };

  render() {
    const { name, surname, age, rating } = this.props;
    return (
      <form className="student-form" onSubmit={this.handleSubmit}>
        <h2>Форма студента</h2>

        <div className="field">
          <label>Ім'я:</label>
          <input type="text" defaultValue={name} ref={this.nameRef} />
        </div>

        <div className="field">
          <label>Прізвище:</label>
          <input type="text" defaultValue={surname} ref={this.surnameRef} />
        </div>

        <div className="field">
          <label>Вік:</label>
          <input type="number" defaultValue={age} ref={this.ageRef} />
        </div>

        <div className="field">
          <label>Рейтинг:</label>
          <input type="number" defaultValue={rating} ref={this.ratingRef} />
        </div>

        <button type="submit" className="btn btn-primary">
          Показати дані
        </button>
      </form>
    );
  }
}