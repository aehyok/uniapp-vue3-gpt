<template>日志记录列表</template>
<script setup>
import Request from "luch-request";
const http = new Request();

// http://101.35.211.235:3001/api/v1/log/getListByVersion?version=3.1.0.002

http
  .get("/so/api/v1/log/getListByVersion?version=3.1.0.002")
  .then((res) => {
    console.log(res, "then");
  })
  .catch((err) => {
    console.log(err, "catch");
  });
</script>
