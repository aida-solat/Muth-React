import React, { useEffect } from "react";
import "../Styles/LeftMenu.css";

function Menu(props) {
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");

    function changeMenuActive(e) {
      allLi.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((li) => li.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <p className="title">{props.title}</p>

      <ul>
        {props.menuObject &&
          props.menuObject.map((item) => (
            <li key={item.id}>
              <a href="#">
                <i>{item.icon}</i>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
