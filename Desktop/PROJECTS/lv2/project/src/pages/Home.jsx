import "../App.css";
import React from "react";
import { Form } from "components/Form";
import { ListsToBeSorted } from "components/ListsToBeSorted";

//

function Home() {
  return (
    <div>
      <Form />
      <ListsToBeSorted />
    </div>
  );
}

export default Home;
