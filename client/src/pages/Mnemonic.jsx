import React from "react";
import { Stack, Button } from "../../node_modules/@mui/material/index";
import { Link } from "../../node_modules/react-router-dom/index";

export default function Mnemonic({ mnemonic }) {
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
          Secret Recovery Phrase
        </Stack>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: 100, marginTop: 1 }}
      >
        <Stack>
          비밀 백업 구문을 이용하면 계정을 쉽게 백업하고 복구할 수 있습니다.
        </Stack>
        <Stack sx={{ color: "red" }}>
          경고: 백업구문은 절대로 공개하지 마세요. 이 구문이 있는 사람은 귀하의
          코인을 영원히 소유할 수 있습니다.
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 400, marginTop: 1 }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ flexGrow: 1, height: 350, border: 3, margin: 10, fontSize: 20 }}
        >
          {mnemonic.mnemonic}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="right"
        alignItems="center"
        sx={{ height: 100, flexGrow: 1 }}
      >
        <Link to="/createpw">
          <Button
            variant="contained"
            sx={{ height: 50, width: 200, margin: 1 }}
          >
            시작하기
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
