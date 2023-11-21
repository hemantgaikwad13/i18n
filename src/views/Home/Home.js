import React from 'react';
import "./Home.css";
import I18n from "./../../utilis/i18n"

function Home() {
    const usersCount= 15;
  return (
    <div>
      <h1>{I18n("welcomeMessage")}</h1>

      <p>{I18n("normalMessage")}</p>

      <h3>{I18n("greetingMessage")}</h3>
      
      <p>{I18n("userStatMessage", "<studentCount>", usersCount)}</p>

      <select
      defaultValue={localStorage.getItem("lang")}
      onChange={(e)=>{
        localStorage.setItem("lang",e.target.value);
        window.location.reload();
      }}>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>
      
    </div>
  )
}

export default Home
