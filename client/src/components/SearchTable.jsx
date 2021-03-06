import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import SearchRow from "./SearchRow";

const SearchTable = ({ cities }) => {
  return (
    <TableContainer sx={{ marginBottom: 5 }}>
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
            Name
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Country
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Continent
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Population
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            2-digit code
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            3-digit code
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Currency
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Weather
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
            Temperature
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Parse all cities on local cache into table. Resets on page reload.*/}
        {cities.map((row, index) => (
          <SearchRow key={index} city={row} />
        ))}
      </TableBody>
    </TableContainer>
  );
};
export default SearchTable;
