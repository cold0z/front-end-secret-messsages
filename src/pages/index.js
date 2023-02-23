import { FavoritesContextProvider } from "@/store/context";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [encodedMessage, setEncodedMessage] = useState("");
  const [messasge, setMesasge] = useState("");
  const [hiddenMessasge, setHiddenMessasge] = useState("");
  const [agents, setAgents] = useState([]);
  const [selectedOption, setSelectedOption] = useState("hidden");
  const [agent, setAgent] = useState("");
  const [title, setTitle] = useState("");
  const [messasgeAlert, setMesasgeAlert] = useState("");
  const [sent, setSent] = useState(false);
  const [blur, setBlur] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    fetch("https://secret-messages.onrender.com:10000/agents", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNyIsIm5hbWUiOiJKb2huIn0sImlhdCI6MTY3NzEwNjU2MSwiZXhwIjoxNzU0ODY2NTYxfQ.aGOkxnXB7QXwei-c8KVfC2k4Z1BPLpgaEvFNzRV3LX0",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setAgents(json);
      });
  }, []);


  function clearrForm(){ 
    setAgent("")
    setTitle("")
    setMesasge("")
    setHiddenMessasge("")
  }

  function onValueChange(e) {
    setSelectedOption(e.target.value);
    if (e.target.value === "hidden") {
      setBlur("");
      setHiddenMessasge(getTypingHiddenPassword(messasge));
    } else if (e.target.value === "blur") {
      setHiddenMessasge(messasge);
      setBlur("blur");
    } else {
      setBlur("");
      setHiddenMessasge(messasge);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    const body = { title: title, agent: agent, message: messasge };
    console.warn("submitHandler", body);

    fetch("https://secret-messages.onrender.com:10000/send", {
      body: JSON.stringify(body),
      method: "post",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNyIsIm5hbWUiOiJKb2huIn0sImlhdCI6MTY3NzA2Nzg5MSwiZXhwIjoxNjc3MTIxODkxfQ.hWlQwgTmNhAmpFv-zLsEH3531LETsFdQMy8t0l_HzJw",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.info("result:", response);
        setLoading(false);
        if (response.code === 200) {
          setMesasgeAlert(response.message);
          clearrForm();
          setSent(true);

          setTimeout(function () {
            router.replace("/message");
          }, 3000);
        }
      })

      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }

  const getLastIndexChar = (string) => {
    return string.slice(string.length - 1);
  };

  const getTypingHiddenPassword = (value) => {
    return Array(value.length).join("•") + getLastIndexChar(value);
  };

  function handleMessasge(e) {
    setMesasge(messasge + getLastIndexChar(e.target.value));
    setHiddenMessasge(getTypingHiddenPassword(e.target.value));
  }

  return (
    <div className="container" style={{ marginTop: 200 }}>
      <h1>Sending Secret Messages with the Courier API</h1>
      <div className="card">
        <div className="card-body">
          {sent ? (
            <div className="alert alert-success" role="alert">
              {messasgeAlert}
            </div>
          ) : (
            ""
          )}

          {loading ? (
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <form>
              <div className="mb-3">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={agents}
                  sx={{ width: "100%" }}
                  onChange={(e, v) => setAgent(v.id)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Agents"
                      onChange={({ target }) => setAgent(target.value.id)}
                    />
                  )}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title Email
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.currentTarget.value);
                  }}
                  className="form-control"
                  id="title"
                  placeholder=""
                />
              </div>
              <div className="row">
                <label htmlFor="message" className="form-label">
                  Secret Messsage
                </label>
                <div className="col-9">
                  <textarea
                    className={`form-control ${blur}`}
                    id="messasge"
                    onChange={handleMessasge}
                    rows="6"
                    value={hiddenMessasge}
                  />
                </div>
                <div className="col-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeMessage"
                      id="hiddenMessasge"
                      value="hidden"
                      checked={selectedOption === "hidden"}
                      onChange={onValueChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hiddenMessasge"
                    >
                      Hidden Message
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeMessage"
                      id="blur"
                      value="blur"
                      checked={selectedOption === "blur"}
                      onChange={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="blur">
                      Messasge blured
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeMessage"
                      id="NormalMessage"
                      value="normal"
                      checked={selectedOption === "normal"}
                      onChange={onValueChange}
                    />
                    <label className="form-check-label" htmlFor="NormalMessage">
                      Message Clear
                    </label>
                  </div>
                </div>
                <br />
              </div>
              <br />
              <button
                className="btn btn-lg btn-success"
                onClick={submitHandler}
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
