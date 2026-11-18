//* ====================Passing Event Handlers As Props ======================

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

// *================================Example-1====================================

// function VehicleCard({
//   model = "Unknown vehicle",
//   year = 2026,
//   isAvailable = false,
// }) {
//   return (
//     <article>
//       <h2>{model}</h2>
//       <p>{year}</p>
//       <p>{isAvailable ? "Available" : "Unavailable"}</p>
//     </article>
//   );
// }

// function VehicleCard({ model, year }) {
//   return (
//     <article>
//       <h2>{model}</h2>
//       <p>{year}</p>
//     </article>
//   );
// }

// function VehicleList({ vehicles }) {
//   return (
//     <div>
//       {vehicles.map((vehicle) => (
//         <VehicleCard
//           key={vehicle.id}
//           model={vehicle.model}
//           year={vehicle.year}
//         />
//       ))}
//     </div>
//   );
// }

// function App() {
//   const vehicles = [
//     { id: 1, model: "BMW X5", year: 2022 },
//     { id: 2, model: "Toyota Camry", year: 2023 },
//     { id: 3, model: "Mercedes C200", year: 2021 },
//   ];

//   return (
//     <VehicleList vehicles={vehicles} />
//   );
// }
// export default App
// *===========================Example-2========================================
// function Button({ onPress }) {
//   return (
//     <button onClick={onPress}>
//       Click me
//     </button>
//   );
// }

// function App() {
//   function handleClick() {
//     console.log("Button clicked!");
//   }

//   return <Button onPress={handleClick} />;
// }
// export default App
//* =======================Naming Event Handler Props==================================
// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

//* ==================Naming Props After App-Specific Interactions======================================
// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

//* =======================Event Propagation ===============================
// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }
//* ==============================Stopping Propagation====================================
// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }
//* ====================Event Delegation=========================
// با کلیک روی هرکدام از دکمه‌ها، رویداد به والد منتقل می‌شود و تابع handleClick اجرا خواهد شد.
// export default function Toolbar() {

//   function handleClick(event) {

//     const action = event.target.closest("button")?.dataset.action;

//     if (!action) return;

//     if (action === "play") {
//       alert("Playing Movie!");
//     }

//     if (action === "upload") {
//       alert("Uploading Image!");
//     }

//     if (action === "delete") {
//       alert("Deleting File!");
//     }
//   }

//   return (
//     <div className="Toolbar" onClick={handleClick}>

//       <button data-action="play">
//         Play Movie
//       </button>

//       <button data-action="upload">
//         Upload Image
//       </button>

//       <button data-action="delete">
//         Delete File
//       </button>

//     </div>
//   );
// }
//* ==============Event Delegation=======Example-2================================

// export default function UserList() {

//   const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Reza" },
//     { id: 3, name: "Sara" }
//   ];

//   function handleAction(event) {

//     const button = event.target.closest("button");

//     if (!button) return;

//     const action = button.dataset.action;
//     const userId = button.dataset.userid;

//     if (action === "edit") {
//       alert(`Editing user ${userId}`);
//     }

//     if (action === "delete") {
//       alert(`Deleting user ${userId}`);
//     }
//   }

//   return (
//     <div onClick={handleAction}>

//       {users.map(user => (

//         <div key={user.id}>

//           <span>{user.name}</span>

//           <button
//             data-action="edit"
//             data-userid={user.id}
//           >
//             Edit
//           </button>

//           <button
//             data-action="delete"
//             data-userid={user.id}
//           >
//             Delete
//           </button>

//         </div>

//       ))}

//     </div>
//   );
// }

//* ======================Example-3 use-state================================
// import { useState } from "react";

// function UserList({ users, onDelete }) {
//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <span>{user.name}</span>

//           <button onClick={() => onDelete(user.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {

//   // آرایه کاربران اینجا قرار می‌گیرد
//   const [users, setUsers] = useState([
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Reza" },
//     { id: 3, name: "Sara" }
//   ]);

//   // تابع حذف کاربر
//   function handleDelete(userId) {
//     setUsers(prevUsers =>
//       prevUsers.filter(user => user.id !== userId)
//     );
//   }

//   return (
//     <div>
//       <h1>User Management</h1>

//       <UserList
//         users={users}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// * ===================Weather-App=======================
import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const cities = [
    { name: "تبریز", temperature: "25", desc: "تقریبا ابری - احتمال بارش" },
    {
      name: "تهران",
      temperature: "18",
      desc: "تقریبا آفتابی - احتمال وزش باد",
    },
    { name: "شیروان", temperature: "11", desc: "نیمه آفتابی - رگبار پراکنده" },
    {
      name: "لاس وگاس",
      temperature: "19",
      desc: "کاملا صاف - احتمال برف و کولاک",
    },
  ];
  const [city, setCity] = useState("")

  return (
    <>
      <article id="weather-card">
        <header className="" id="weather-card.header">
          <div id="city-name">ایران، تبریز</div>
          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature"> 25 </span>
          </div>
          <div id="desc">تقریبا ابری - احتمال بارش</div>
          <div id="search-field">
            <input
              value={city}
              type="text"
              placeholder="نام شهر خود را جستجو کنید ..."
              id="search-input"
              className="w-full h-10 bg-black"
              onChange={(event) => {
                setCity(event.target.value)
              }}
            />
            <button id="search-btn">جستجو</button>
          </div>
        </header>
        <main>
          <div id="in-hours">
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/rainy.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
          </div>
        </main>
        <footer id="daily-section">
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
        </footer>
      </article>
      <div id="modal-screen" className="hide">
        <div id="modal-content">
          <div id="danger-icon">
            <i className="fa-solid fa-exclamation"></i>
          </div>
          <p id="modal-title">یافت نشد !</p>
          <p id="modal-caption">متاسفانه شهر مدنظر شما پیدا نشد !</p>

          <div id="modal-footer">
            <button id="close-btn">تایید</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
