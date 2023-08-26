import { useRouteError } from "react-router-dom";

import Heading from "./Components/Heading/Heading";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <Heading
          nama="Salah"
          job="Ini bakal jadi text bawahnya title yang intinya kea penjelasan lebih lanjut terkait titlenya gitu"
        />
    </div>
  );
}
