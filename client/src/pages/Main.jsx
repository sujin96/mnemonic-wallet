import React from "react";
import { Stack, Box } from "@mui/material";
import { Button } from "../../node_modules/@mui/material/index";
import { Link } from "../../node_modules/react-router-dom/cjs/react-router-dom.min";
import KeyIcon from "@mui/icons-material/Key";

export default function Main() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Stack direction="row" sx={{ height: 100 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1, height: 200 }}
        >
          <KeyIcon color="primary" fontSize="large" />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ height: 300, px: 2 }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            flexGrow: 1,
            height: 100,
            fontSize: 40,
            fontWeight: "bolder",
          }}
        >
          BEBMASK 방문을 환영합니다.
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ fontSize: 20, height: 50 }}
      >
        니모닉 지갑을 생성하는 간단한 앱입니다. 반갑습니다.
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: 100, flexGrow: 1 }}
      >
        <Link to="/makewallet">
          <Button
            variant="contained"
            sx={{ height: 50, width: 300, margin: 1 }}
          >
            시작하기
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
