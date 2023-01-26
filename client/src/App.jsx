import React, { useState, useEffect } from "react";
import LiveChatPage from "./components/live-chat-page/LiveChatPage";
import Login from "./components/log-in-page/Login";

function App() {
  const [continueAsGuest, setContinueAsGuest] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const [currentUserData, setCurrentUserData] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [chatData, setChatData] = useState();
  const [userList, setUserList] = useState();
  const ApiUrl = "https://chat-app-api-server.onrender.com";

  const contextData = {
    continueAsGuest,
    setContinueAsGuest,
    showUsernameModal,
    setShowUsernameModal,
    currentUserData,
    setCurrentUserData,
    currentMessage,
    setCurrentMessage,
    newUser,
    setNewUser,
    chatData,
    setChatData,
    userList,
    setUserList,
    ApiUrl,
  };

  useEffect(() => {
    fetch(`${ApiUrl}/users`)
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  useEffect(() => {
    fetch(`${ApiUrl}/users`)
      .then((res) => res.json())
      .then((data) => setUserList(data))
      .then(setNewUser(false));
  }, [newUser]);

  //Preloads initial chat data
  useEffect(() => {
    fetch(`${ApiUrl}/last50messages`)
      .then((res) => res.json())
      .then((data) => setChatData(data));
  }, []);

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        {continueAsGuest ? <LiveChatPage /> : <Login />}
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
