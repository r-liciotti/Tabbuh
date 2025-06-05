function SplashWindwos() {
  return (
    <div
      id="SplashScreen"
      className="absolute top-0 left-0 z-10 flex h-full w-full flex-row items-center justify-center border-2 bg-black/40"
    >
      <div className="tabooStyle relative flex h-auto min-h-3/8 w-5/6 flex-col gap-4 bg-white p-4 lg:h-2/5 lg:w-1/3">
        {/* <HeaderWidonws title="Iniza Partita" /> */}
        <img src="./Logo.png" alt="Logo" className="mx-auto size-60" />
        <div className="mt-14 flex h-full w-full flex-col gap-4">
          <p className="text-left text-xl font-black text-gray-600">TABBUh!</p>
          <p className="text-left text-lg text-gray-600">
            gioco da tavolo Taboo, dove due squadre si sfidano nel indovinare
            più parole possibile senza usare le parole Taboo!
          </p>
          <div className="mb-3 flex w-full grow items-end justify-center">
            {/* <GeneralButton
              title="GIOCA"
              onClick={() => startTurn()}
              classList="h-16 !font-bold text-2xl w-full"
              bgColor="#00c950"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashWindwos;
