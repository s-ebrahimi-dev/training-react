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
//* =====================Example-2================================
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
// ======================Example-3 use-state================================
import { useState } from "react";

function UserList({ users, onDelete }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <span>{user.name}</span>

          <button onClick={() => onDelete(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default function App() {

  // آرایه کاربران اینجا قرار می‌گیرد
  const [users, setUsers] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Reza" },
    { id: 3, name: "Sara" }
  ]);

  // تابع حذف کاربر
  function handleDelete(userId) {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  }

  return (
    <div>
      <h1>User Management</h1>

      <UserList
        users={users}
        onDelete={handleDelete}
      />
    </div>
  );
}