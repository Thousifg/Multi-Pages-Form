import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { MyContext } from "../Context";
const Formone = () => {
  const { setStep, userData, setUserData } = useContext(MyContext);
  return (
    <div>
      <div>
        <TextField
          label="Name"
          margin="normal"
          variant="outlined"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          value={userData["Name"]}
        />
      </div>
      <div>
        <TextField
          label="Age"
          margin="normal"
          variant="outlined"
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          value={userData["Age"]}
        />
      </div>
      <div>
        <TextField
          label="Date of birth"
          margin="normal"
          variant="outlined"
          onChange={(e) =>
            setUserData({ ...userData, dateofbirth: e.target.value })
          }
          value={userData["Date of birth"]}
        />
      </div>
      <Button onClick={() => setStep(2)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
};

export default Formone;
