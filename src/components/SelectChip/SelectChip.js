import * as React from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = ["Avío", "Refaccionario"];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="multiple-checkbox-label" sx={{ fontSize: "16px" }}>
          TIPOS DE CRÉDITOS
        </InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          sx={{ bgcolor: "#A8968B", fontSize: "16px" }}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="TIPOS DE CRÉDITOS" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                color: "#5B524D",
              }}
            >
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} sx={{ fontSize: "16px" }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
