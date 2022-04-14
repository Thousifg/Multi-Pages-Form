import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { MyContext } from "../Context";

const Formtwo = () => {
  const { setStep, userData, setUserData, submitData } = useContext(MyContext);

  return (
    <div>
      <div>
        <div>
          <TextField
            label="state of residence"
            margin="normal"
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, stateofresidence: e.target.value })
            }
            value={userData["state of residence"]}
          />
        </div>
        <div>
          <TextField
            label="address"
            margin="normal"
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            value={userData["address"]}
          />
        </div>
        <div>
          <TextField
            label="pin code"
            margin="normal"
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, pincode: e.target.value })
            }
            value={userData["pin code"]}
          />
        </div>
        <Button variant="contained" color="secondary" onClick={() => setStep(1)}>
          Back
        </Button>
        <span></span>
        <Button variant="contained" color="primary" onClick={submitData}>
          submit
        </Button>
      </div>
    </div>
  );
};

export default Formtwo;
