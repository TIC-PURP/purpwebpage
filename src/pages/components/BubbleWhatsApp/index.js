import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import icono from "../../../assets/images/examples/emblema_PURP_3D.png";
import "react-whatsapp-chat-widget/index.css";

/* eslint-disable react/prop-types */
const ReactApp = ({ sub, text1, text2, phMensaje, btn }) => (
  <WhatsAppWidget
    phoneNo="6871100301"
    position="right"
    widgetWidth="300px"
    widgetWidthMobile="260px"
    autoOpenTimer={5000}
    messageBox
    iconSize="55"
    iconColor="white"
    iconBgColor="#25D366"
    headerIcon={icono}
    headerIconColor="pink"
    headerTxtColor="black"
    headerBgColor="#075E54"
    headerTitle="PURP"
    headerCaption={sub}
    bodyBgColor="#D0E9EA"
    chatPersonName="PURP"
    chatMessage={
      <>
        {text1}
        <br /> {text2}
      </>
    }
    footerBgColor="#EDF8F5"
    placeholder={phMensaje}
    btnBgColor="#25D366"
    btnTxt={btn}
    btnTxtColor="white"
  />
);

export default ReactApp;
