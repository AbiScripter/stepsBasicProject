import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const message = ["Learn React", "Apply for Jobs", "Invest Your Income"];
let current = 0;

//!my code
// export default function App() {
//   function handleBtnClick(e) {
//     // console.dir(e.target);

//     // console.log(btnVal);
//     if (
//       (current == 2 && e.target.id == "next") ||
//       (current == 0 && e.target.id == "previous")
//     ) {
//       // console.log(current, e.target.id);
//       return;
//     }

//     let indicatorContainer = document.querySelector(".numbers");

//     if (e.target.id == "next") {
//       document;
//       indicatorContainer.children[current + 1].classList.add("active");
//     } else if (e.target.id == "previous") {
//       indicatorContainer.children[current].classList.remove("active");
//     }

//     current = e.target.id == "previous" ? --current : ++current;
//     setDisplayText(message[current]);

//     // .children[current].classList.add(setActiveClass);
//   }
//   const [displayText, setDisplayText] = useState(message[current]);
//   const [activeClass, setActiveClass] = useState("");
//   return (
//     <div className="steps">
//       <div className="numbers">
//         <div style={{ backgroundColor: "#7950f2" }}>1</div>
//         <div>2</div>
//         <div>3</div>
//       </div>

//       <p className="message">{displayText}</p>

//       <div className="buttons">
//         <button onClick={handleBtnClick} id="previous">
//           Previous
//         </button>
//         <button onClick={handleBtnClick} id="next">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

//!corrected code
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step <= 1) return;
    setStep((s) => s - 1);
  }

  function handleNext() {
    if (step >= 3) return;
    setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <p onClick={handleClose} style={{ cursor: "pointer" }}>
        X
      </p>
      {/*//! ternary operator (conditional rendering) */}
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}:{message[step - 1]}
          </p>

          <div className="buttons">
            <button onClick={handlePrevious} id="previous">
              Previous
            </button>
            <button onClick={handleNext} id="next">
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

//!Challenge
function Challenge() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  function haa(count) {
    if (count == 0) {
      return "Today is";
    } else if (count > 0) {
      return `${count} days from today is`;
    } else {
      return `${count} days ago was`;
    }
  }

  const currDate = new Date();
  console.log(currDate);
  currDate.setDate(currDate.getDate() + counter);
  console.log(currDate);

  // Function to update the date when the counter increases
  const handleCountPlus = () => {
    setCounter((c) => c + step);
  };

  const handleCountMinus = () => {
    setCounter((c) => c - step);
  };

  const handleStepPlus = () => {
    setStep((s) => s + 1);
  };

  const handleStepMinus = () => {
    setStep((s) => s - 1);
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {counter} </span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>
        <span>{haa(counter)}</span>
        <span>{currDate.toDateString()}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<Challenge />);
