import Typewriter from "typewriter-effect";

export default function messsage() {


  function redirectCallback(){
    console.log("ijasijasi")
    //router.push("/")
  }
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 100px;
          padding: 0;
          font-size: 55px;
          font-weight: 400;
          line-height: 1.8;
          color: #a8ff60;
          background: #000 !important;
          font-family: sans-serif;
        }

        .lds-ripple {
          position: absolute;
          left: 50%;
          top: 50%;
          display: inline-block;
          width: 80px;
          height: 80px;
        }
        .lds-ripple div {
          position: absolute;
          border: 4px solid #a8ff60;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
          }
        }
        

      `}</style>
      <Typewriter
        options={{
          strings: [
            "·−−− · − ·−−−−· ·− ·· −− · ·−−− · − ",
            "Email sending...",
            "Done ✔️ ",
            "SMS sending...",
            "Done ✔️ ",
          ],
          autoStart: true,
          loop: false,
          deleteSpeed: 10,
          pauseFor: 60,
          callFunction: {redirectCallback}
        }}
      />

      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
