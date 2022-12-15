<template>
  <div id="main">
    pianku
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'

export function decrypt(str, key) {
  key = CryptoJS.MD5(key).toString();
  var crypto_key = CryptoJS.enc.Utf8.parse(key);
  var decrypt_str = CryptoJS.TripleDES.decrypt(str, crypto_key,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
  );
  return decrypt_str.toString(CryptoJS.enc.Utf8)
}

console.log(decrypt("SIg54C9I0rgA8RG6E8JAQqc1O5uKrZCqUIDALEZ2nFnSwuVIfsPOiOFccC4LSAGtGeYgealuH3ISKcGp5vQ8TA==", "Yc0l8kliNcvMqQlz5EgsrC8TqxRdcfDZ8fko+BohZ2s="))


export default {
  name: "PianKu",

  data(){
    return{
      data :[]
    }
  },
  created() {
    this.load()
  },

  methods:{
    load(){
      this.request.get("/pianku"+"?word=银河之心").then(res =>{
        console.log(res)

        this.data = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>