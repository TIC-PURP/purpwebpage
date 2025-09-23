/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

// react-router components

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

import Contenedor from "../Contenedor";
import TextSection from "../TextSection";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
function CenteredBlogModal({ image, title, description, action, showImagen, buttonModal }) {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <Card
      sx={{
        height: "100%",
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <Contenedor position="relative" borderRadius="lg" mx={6} mt={2}>
        <Contenedor
          component="img"
          src={image}
          alt={title}
          borderRadius="xxl"
          width="100%"
          position="relative"
          zIndex={1}
        />
      </Contenedor>
      <Contenedor p={1} mt={-1} textAlign="center">
        <TextSection display="inline" variant="h3" textTransform="capitalize" fontWeight="regular">
          {title}
        </TextSection>
        <Contenedor mt={1} mb={3}>
          <TextSection variant="body2" component="p" color="text">
            {description}
          </TextSection>
        </Contenedor>
        <Button size="small" variant="gradient" color="light" onClick={toggleModal}>
          {buttonModal}
        </Button>
      </Contenedor>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <Contenedor
            position="relative"
            width="auto"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            sx={{ margin: 1 }}
          >
            <Contenedor display="flex" alginItems="center" justifyContent="space-between" p={2}>
              <TextSection variant="h5">{title}</TextSection>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </Contenedor>
            <Divider sx={{ my: 0 }} />
            <Contenedor p={2}>
              {showImagen ? (
                <Contenedor component="img" src={showImagen} width="100%" />
              ) : (
                <TextSection variant="body2" color="secondary" fontWeight="regular">
                  {description}
                </TextSection>
              )}
            </Contenedor>
            <Divider sx={{ my: 0 }} />
            <Contenedor display="flex" justifyContent="space-between" p={1.5}>
              <Button variant="gradient" color="dark" onClick={toggleModal}>
                {action}
              </Button>
            </Contenedor>
          </Contenedor>
        </Slide>
      </Modal>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogModal.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogModal;
