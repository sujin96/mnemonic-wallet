import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import CreatePw from "./pages/CreatePw";
import Main from "./pages/Main";
import MakeWallet from "./pages/MakeWallet";
import Mnemonic from "./pages/Mnemonic";
import NewWallet from "./pages/NewWallet";
import ValiMnemonic from "./pages/ValiMnemonic";
import KeyIcon from "@mui/icons-material/Key";

function App() {
  const [password, setPassword] = useState("");
  const [mnemonic, setMnemonic] = useState({});
  const [address, setAddress] = useState("");

  const updateMnemonic = (mnemo) => {
    setMnemonic(mnemo);
  };

  const updatePw = (pw) => {
    setPassword(pw);
  };

  const updateAddress = (add) => {
    setAddress(add);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Stack sx={{ height: "100vh" }}>
        <Stack sx={{ height: 40 }}>
          <Box sx={{ fontSize: 40 }}>
            <KeyIcon color="primary" sx={{ margin: 1 }} />
            BEBMASK
          </Box>
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <Route path="/makewallet">
            <MakeWallet updateMnemonic={updateMnemonic} />
          </Route>
          <Route path="/mnemonic">
            <Mnemonic mnemonic={mnemonic} />
          </Route>
          <Route path="/createpw">
            <CreatePw updatePw={updatePw} password={password} />
          </Route>
          <Route path="/valimnemonic">
            <ValiMnemonic
              mnemonic={mnemonic}
              password={password}
              updateAddress={updateAddress}
            />
          </Route>
          <Route path="/newwallet">
            <NewWallet address={address} />
          </Route>
        </Stack>
      </Stack>
    </Switch>
  );
}

export default App;
