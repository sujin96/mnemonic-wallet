import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
} from "../../node_modules/@mui/material/index";
import { Link } from "../../node_modules/react-router-dom/index";

export default function CreatePw({ updatePw, password }) {
  const [validatepw, setValidatePw] = useState("");

  const handleInputValue = (e) => {
    updatePw(e.target.value);
  };

  const validatePassword = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setValidatePw(e.target.value);
    }
  };

  return (
    <Stack sx={{ height: "90vh" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 150, px: 2, marginTop: 5 }}
      >
        <Stack
          alignItems="left"
          justifyContent="center"
          sx={{
            marginLeft: 3,
            flexGrow: 1,
            height: 100,
            fontSize: 50,
            fontWeight: "bolder",
          }}
        >
          암호생성
        </Stack>
      </Stack>
      <Stack sx={{ width: 500, marginLeft: 5 }}>
        <TextField
          id="outlined-password-input"
          label="새암호"
          type="password"
          autoComplete="current-password"
          onChange={handleInputValue}
        />
        {validatepw === password ? (
          <TextField
            id="outlined-password-input"
            label="암호 확인 (Enter 눌러주세요)"
            type="password"
            autoComplete="current-password"
            onKeyUp={validatePassword}
            sx={{ marginTop: 3 }}
          />
        ) : (
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            type="password"
            helperText="Incorrect entry."
            variant="filled"
            onKeyUp={validatePassword}
            sx={{ marginTop: 3 }}
          />
        )}
      </Stack>
      {validatepw === password ? (
        <Stack
          direction="row"
          justifyContent="left"
          alignItems="center"
          sx={{ height: 100, marginLeft: 5, flexGrow: 1 }}
        >
          <Link to="/valimnemonic">
            <Button
              variant="contained"
              sx={{ height: 50, width: 200, margin: 1 }}
            >
              생성하기
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="left"
          alignItems="center"
          sx={{ height: 100, marginLeft: 5, flexGrow: 1 }}
        >
          <Button variant="outlined" sx={{ height: 50, width: 200, margin: 1 }}>
            생성하기
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
