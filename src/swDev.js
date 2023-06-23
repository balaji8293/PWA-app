export default function swDev() {

  function determineAppServerKey(){
    var vapidPublicKey = ''
  }

  let swUrl = `${process.env.PUBLIC_URL}sw.js`;
  navigator.serviceWorker.register(swUrl).then((response)=>{
    console.warn("response from swDev",response);
  })
}
