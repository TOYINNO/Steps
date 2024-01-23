import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1); //Note that we can only call useState on the top level of a function. Also, you cannot call useState using conditional statement e.g "if"
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);  // the "set" in setStep is provided by React to enable the updating mechanism. This make it possible for making changes to codes without mutating it.
    //Mechanism of State
    //In React, a view is updated by re-rendering (Re-rendering means react calls the component function again) the component
    //A component is re-rendered when its state is updated. So basically, we use the "set" function coming from the useState hook to update the "state" in react.
    //In conclusion, whenever you want to update a component view, you update the state.
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1); //we can also use call ball functions as shown below;
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>  we also use the callback functn as seen below; */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {" "}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              //onClick={() => alert("next")} // we can write it in the below format by calling the function
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
