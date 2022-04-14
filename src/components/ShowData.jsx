import React from "react";
import { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { MyContext } from "../Context";
const Showdata = () => {
  const { final } = useContext(MyContext);
  return (
    <div>
      <TableContainer
        style={{ display: "flex", justifyContent: "center", marginLeft: "0%" }}
      >
        <Table
          style={{ width: "100%", justifyContent: "center" }}
          size="small"
          arial-lable="caption table"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "yellow", color: "black" }}>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date of birth</TableCell>
              <TableCell>state of residence</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>pin code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {final.map((e, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.age}</TableCell>
                  <TableCell>{e.dateofbirth}</TableCell>
                  <TableCell>{e.stateofresidence}</TableCell>
                  <TableCell>{e.address}</TableCell>
                  <TableCell>{e.pincode}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Showdata;
