import React, { useContext } from "react";
import "./App.css";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import Showdata from "./components/ShowData";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { MyContext } from "./Context";
function App() {
  const { currentStep, final } = useContext(MyContext);
  const stepHandle = (step) => {
    switch (step) {
      case 1:
        return <FormOne />;
      case 2:
        return <FormTwo />;
    }
  };
  return (
    <div className="Header">
      <h1 style={{ color: "blue" }}>Multi-Pages-Form</h1>
      <div className="entries">
        <Stepper
          style={{ width: "90%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {stepHandle(currentStep)}
      {final.length > 0 ? <Showdata /> : ""}
    </div>
  );
}

export default App;
