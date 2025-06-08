import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useGameStore } from "../../store/gameStore";
import GeneralButton from "../Buttons/GeneralButton";
import HeaderWidonws from "./HeaderWindows";

function BugReportWindows() {
  const { activeTeam, puasePlayTurn } = useGameStore();
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (sent) {
      puasePlayTurn();
      return;
    }

    setSending(true);

    const datetime = new Date().toLocaleString();
    const userAgent = navigator.userAgent;

    const templateParams = {
      description,
      team: activeTeam,
      datetime,
      device: userAgent,
    };

    emailjs
      .send(
        "service_mjux30t", // <-- sostituisci col tuo Service ID
        "template_2sqep1j", // <-- sostituisci col tuo Template ID
        templateParams,
        "J0PAEQR5Y5MKse-F-", // <-- sostituisci con la tua Public Key (dashboard > account > API keys)
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setDescription("");
        alert("Segnalazione inviata con successo!");
      })
      .catch((err) => {
        setSending(false);
        alert("Errore durante l'invio: " + err.text);
      });
  };

  return (
    <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-row items-center justify-center border-2 bg-black/40">
      <div className="tabooStyle relative flex h-auto min-h-3/8 w-5/6 flex-col gap-4 bg-white p-4 lg:h-2/5 lg:w-1/3">
        <HeaderWidonws title="Segnala Bug" showTurn={false} />
        <div className="flex w-full justify-end">
          <span
            className="icon-[mingcute--close-fill] size-8"
            onClick={puasePlayTurn}
          ></span>
        </div>
        <div className="flex h-full w-full flex-col gap-4">
          <textarea
            placeholder="Descrivi il bug riscontrato..."
            className="w-full rounded-xl border p-2 text-black"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={sending || sent}
          />

          <div className="mb-3 flex grow items-end justify-center">
            <GeneralButton
              title={
                sending
                  ? "Invio in corso..."
                  : sent
                    ? "Riprendi!"
                    : "Invia Segnalazione"
              }
              onClick={handleSubmit}
              classList="h-16 !font-bold text-xl w-full"
              bgColor={sent ? "#aaa" : "#00c950"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugReportWindows;
