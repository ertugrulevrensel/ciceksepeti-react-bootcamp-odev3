import React, { useEffect, useState } from "react";
import Modals from "./Modals";

function Card() {
  //create state

  const [getData, setData] = useState([]);
  const [getEdt, setEdt] = useState("");
  //fetch data

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let datas = [];
        for (let i = 0; i < 9; i++) {
          datas[i] = data[i];
        }
        setData(datas);
      });
  }, []);
  //deleted selected card

  function handleDelete(id) {
    document.getElementById(id).classList.add("back-animation");
    var succes = document.getElementById("succes");
    //delete animation
    succes.classList.toggle("v-visible");
    setTimeout(() => {
      succes.classList.toggle("v-visible");
    }, 3000);
    setTimeout(() => {
      document.getElementById(id).style = "display: none !important";
    }, 475);
  }
  //keep id for edit card

  function edt(id) {
    setEdt(id);
  }
  //edited selected card

  function handleEdit(id) {
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;
    if (getData[id - 1].title !== title || getData[id - 1].body !== body) {
      var succes = document.getElementById("succes");
      succes.classList.toggle("v-visible");
      setTimeout(() => {
        succes.classList.toggle("v-visible");
      }, 3000);
    } else {
      var fail = document.getElementById("fail");
      fail.classList.toggle("v-visible");
      setTimeout(() => {
        fail.classList.toggle("v-visible");
      }, 3000);
    }
    //change data

    const item = getData.map((card) => {
      if (id === card.id) {
        return { ...card, title: title, body: body };
      }
      return card;
    });
    setData(item);
  }
  //show and edit modal

  function edited(title, body) {
    var modal = document.getElementById("modal");
    if (modal.className.indexOf("v-visible") === -1) {
      modal.classList.toggle("transparent-bg");
      modal.classList.toggle("back-animation");
      modal.classList.toggle("v-visible");
      modal.classList.toggle("animation");
      var inputTitle = document.getElementById("title");
      var inputBody = document.getElementById("body");
      inputTitle.value = title;
      inputBody.value = body;
    } else {
      modal.classList.toggle("transparent-bg");
      modal.classList.toggle("back-animation");
      modal.classList.toggle("animation");
      setTimeout(() => {
        modal.classList.toggle("v-visible");
      }, 475);
    }
  }
  return (
    <div className="d-grid gridDiv width90">
      {getData.map((item) => {
        return (
          <div
            id={item.id}
            className="gridCell align-center justify-center d-flex flex-d-col"
          >
            <img
              className="gridImg"
              src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg"
              alt=""
            ></img>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="d-flex space-between full-w">
              <button
                onClick={() => {
                  edited(item.title, item.body);
                  edt(item.id);
                }}
              >
                <i class="far fa-edit fa-2x"></i>
              </button>
              <button onClick={() => handleDelete(item.id)}>
                {" "}
                <i class="far fa-trash-alt fa-2x"></i>
              </button>
            </div>
          </div>
        );
      })}
      <Modals id={getEdt} editSave={handleEdit} toggle={edited} />
      <div
        id="succes"
        className="v-hidden d-flex p-fixed align-center justify-center status"
      >
        <div className="d-flex align-center justify-center"></div>
        <p>Save Succesfully..</p>
      </div>
      <div
        id="fail"
        className="v-hidden d-flex p-fixed align-center justify-center status"
      >
        <div className="d-flex align-center justify-center"></div>
        <p>Nothing Changed..</p>
      </div>
    </div>
  );
}

export default Card;
