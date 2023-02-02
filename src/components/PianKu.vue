<template>
  <div id="main">
    {{bt}}
    pianku
    {{ data }}
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'

export function decrypt(str, key) {
  key = CryptoJS.MD5(key).toString();
  console.log(key)
  var crypto_key = CryptoJS.enc.Utf8.parse(key);
  console.log(crypto_key.toString())

  var decrypt_str = CryptoJS.TripleDES.decrypt(str, crypto_key,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
  );
  return decrypt_str.toString(CryptoJS.enc.Utf8)
}

console.log("准备解密")
console.log(decrypt("EGn3FXxpQFa9Tsawz/czWfVGO22cJy1SH1visWg83ynWkP1U1Vj/1nwiUcbeQKysSTptJNv3hpI4BhKp8ZtWyg==","jk0BINPAsg5OrKVZ/2h9Ri8TqxRdcfDZ8fko+BohZ2s="))
// console.log(decrypt("SIg54C9I0rgA8RG6E8JAQqc1O5uKrZCqUIDALEZ2nFnSwuVIfsPOiOFccC4LSAGtGeYgealuH3ISKcGp5vQ8TA==", "Yc0l8kliNcvMqQlz5EgsrC8TqxRdcfDZ8fko+BohZ2s="))
console.log(decrypt("oyujjvcC/DOC4o7QZiXh5wCMHQ5agWj7EOg7Zobw8AWba3ovNr4XE+TYDNjxAka/xPVQGrMPj++DAfkzD+wDRQ==","yjqSfuzaHpmuameITepCDy8TqxRdcfDZ8fko+BohZ2s="))


export default {
  name: "PianKu",

  data(){
    return{
      data :[],
      bt:""
    }
  },
  created() {
    this.load()
    this.test()
  },

  methods:{
    load(){
      this.request.get("/pianku"+"?word=银河之心").then(res =>{
        console.log(res)

        this.data = res.data
      })
    },
    test(){
      this.request.get("/test").then(res =>{
        console.log(res)
        this.bt = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>