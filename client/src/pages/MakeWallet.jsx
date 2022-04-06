import React from "react";
import { Stack, Button } from "../../node_modules/@mui/material/index";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "../../node_modules/react-router-dom/index";
import axios from "../../node_modules/axios/index";

export default function MakeWallet({ updateMnemonic }) {
  const handleMnemonic = () => {
    axios.post("http://localhost:3001/wallet/newMnemonic").then((res) => {
      updateMnemonic(res.data);
    });
  };
  return (
    <Stack sx={{ height: "90vh", flexGrow: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 200, px: 2, marginTop: 5 }}
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
          BEBMASK가 처음이세요?
        </Stack>
      </Stack>
      <Stack direction="column" sx={{ height: 400 }}>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ flexGrow: 1 }}
        >
          <Stack alignItems="center" sx={{ flexGrow: 1, border: 1, margin: 1 }}>
            <Stack justifyContent="center" sx={{ height: 60, marginTop: 3 }}>
              <DownloadIcon fontSize="large" />
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "40vh",
                height: 50,
                marginTop: 3,
                fontSize: 20,
              }}
            >
              아니오. 이미 비밀 문구가 있습니다.
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: 50, marginTop: 2 }}
            >
              비밀 복구 구문을 사용하여 기존 지갑 가져오기
            </Stack>
            <Stack sx={{ height: 100, marginTop: 3 }}>
              <Button
                variant="contained"
                sx={{ height: 50, width: 300, margin: 1 }}
              >
                지갑 가져오기
              </Button>
            </Stack>
          </Stack>
          <Stack alignItems="center" sx={{ flexGrow: 1, border: 1, margin: 1 }}>
            <Stack justifyContent="center" sx={{ height: 60, marginTop: 3 }}>
              <AddIcon fontSize="large" />
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "40vh",
                height: 50,
                marginTop: 3,
                fontSize: 20,
              }}
            >
              설정을 시작하죠!
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: 50, marginTop: 2 }}
            >
              새 지갑과 시드 구문을 만듭니다.
            </Stack>
            <Stack sx={{ height: 100, marginTop: 3 }}>
              <Link to="/mnemonic">
                <Button
                  onClick={handleMnemonic}
                  variant="contained"
                  sx={{ height: 50, width: 300, margin: 1 }}
                >
                  지갑 생성
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
