import { Box, Button, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { numberWithCommas } from "../helpers/CityTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CityEditModal from "./CityEditModal";
import CityDeleteModal from "./CityDeleteModal";

const AdminRow = ({ city }) => {
  // States to handle modals alongside functions to open/close.
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleEdit = (e) => {
    setOpenEdit(true);
  };

  const handleDelete = (e) => {
    setOpenDelete(true);
  };

  const handleClose = (e) => {
    setOpenEdit(false);
    setOpenDelete(false);
  };

  // Append commas into population integer from API for easier reading.
  var population = "";

  if (city.population !== null) {
    population = numberWithCommas(city.population);
  }

  return (
    <>
      <TableRow
        key={city.name.common}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          backgroundColor: "#f6f6f6",
        }}
      >
        <TableCell align="center">{city.name}</TableCell>
        <TableCell align="center">{city.state}</TableCell>
        <TableCell align="center">{city.country}</TableCell>
        <TableCell align="center">{city.rating}</TableCell>
        <TableCell align="center">{city.established}</TableCell>
        <TableCell align="center">
          {city.population !== null ? `${population}` : "Undefined"}
        </TableCell>
        <TableCell align="center">
          {city.currency !== null ? `${city.currency}` : "Undefined"}
        </TableCell>

        <TableCell>
          <Box>
            <Button startIcon={<EditIcon />} onClick={handleEdit}></Button>
            <Button startIcon={<DeleteIcon />} onClick={handleDelete}></Button>
          </Box>
        </TableCell>
      </TableRow>
      {/* Modals open upon useState boolean changing*/}
      {openEdit && (
        <CityEditModal
          open={openEdit}
          setOpen={setOpenEdit}
          handleClose={handleClose}
          city={city}
        />
      )}
      {openDelete && (
        <CityDeleteModal
          open={openDelete}
          setOpen={setOpenDelete}
          handleClose={handleClose}
          city={city}
        />
      )}
    </>
  );
};
export default AdminRow;
