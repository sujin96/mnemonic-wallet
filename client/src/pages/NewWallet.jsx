import React from "react";
import { Stack, Button } from "../../node_modules/@mui/material/index";

export default function NewWallet({ address }) {
  return (
    <Stack direction="column" sx={{ height: "90vh" }}>
      <Stack direction="column" sx={{ height: 200 }}>
        <Stack justifyContent="center" alignItems="center" sx={{ height: 200 }}>
          <img src="/free-icon-firecracker-1286612.png" />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ height: 100 }}>
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
          축하합니다.
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ height: 20 }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            flexGrow: 1,
            height: 20,
            fontSize: 20,
            fontWeight: "bolder",
          }}
        >
          {address}
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ fontSize: 20, height: 50, marginTop: 7 }}
      >
        테스트를 통과하셨습니다. 비밀 복구 구문을 안전하게 보관할 책임은
        본인에게 있습니다.
      </Stack>
      <Stack
        alignItems="left"
        justifyContent="center"
        sx={{
          fontSize: 20,
          height: 100,
          marginTop: 7,
          marginLeft: 20,
          fontWeight: "bolder",
        }}
      >
        안전하게 관리하는 팁
        <Stack
          alignItems="left"
          justifyContent="center"
          spacing={2}
          sx={{ fontSize: 15, marginTop: 3 }}
        >
          <Stack>* 백업을 여러장소에 보관하세요.</Stack>
          <Stack>* 구문을 누구와도 공유하지 마세요.</Stack>
          <Stack>
            * BEBMASK에서는 절대로 비밀 복구 구문을 갑자기 물어보지 않습니다.
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
