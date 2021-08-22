import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { getCurrentUser } from "../../utils/actions";

import UserLogged from "../account/UserLogged";
import UserGuest from "../account/UserGuest";
import Loading from "../../components/Loading";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    user ? setLogin(true) : setLogin(false);
  }, []);

  if (login == null) {
    return <Loading isVisible={true} text="Cargando...." />;
  }

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
