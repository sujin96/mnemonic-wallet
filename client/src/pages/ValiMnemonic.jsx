import React, { useState } from "react";
import {
  Stack,
  Button,
  TextField,
} from "../../node_modules/@mui/material/index";
import axios from "../../node_modules/axios/index";
import { Link } from "../../node_modules/react-router-dom/index";

export default function ValiMnemonic({ mnemonic, password, updateAddress }) {
  const [inputdata, setInputData] = useState({ mnemonic: "" });

  const handleNewWallet = () => {
    axios
      .post("http://localhost:3001/wallet/newWallet", {
        mnemonic: mnemonic.mnemonic,
        password: password,
      })
      .then((res) => {
        updateAddress(res.data.address);
      });
  };

  const inputMnemonic = (e) => {
    setInputData({
      mnemonic: `${e.target.value}`,
    });
    console.log("mnemonic: ", mnemonic);
  };

  return (
    <Stack sx={{ height: "90vh" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 150, px: 2, marginTop: 5 }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            flexGrow: 1,
            height: 100,
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          비밀 백업 구문 확인
        </Stack>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: 100, marginTop: 1 }}
      >
        <Stack>백업구문을 입력하세요.</Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 400, marginTop: 1 }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Mnemonic"
          multiline
          rows={15}
          sx={{ flexGrow: 1, height: 350, margin: 10, fontSize: 20 }}
          onChange={inputMnemonic}
        />
      </Stack>
      {inputdata.mnemonic === mnemonic.mnemonic ? (
        <Stack
          direction="row"
          justifyContent="right"
          alignItems="center"
          sx={{ height: 100, marginLeft: 5, flexGrow: 1 }}
        >
          <Link to="/newwallet">
            <Button
              variant="contained"
              sx={{ height: 50, width: 200, margin: 1 }}
              onClick={handleNewWallet}
            >
              확인
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="right"
          alignItems="center"
          sx={{ height: 100, marginLeft: 5, flexGrow: 1 }}
        >
          <Button variant="outlined" sx={{ height: 50, width: 200, margin: 1 }}>
            확인
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
