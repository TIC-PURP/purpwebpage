import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

// Crear tema con tipografía responsiva
let theme = createTheme({
  typography: {
    h6: {
      fontWeight: "bold",
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "0.65rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
    },
  },
});
theme = responsiveFontSizes(theme);

const InfoCard = ({ title, subtitle, features, bgColor, sx }) => (
  <ThemeProvider theme={theme}>
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 3,
        background: bgColor || "linear-gradient(to bottom, #88b04b, #6b8e23)",
        color: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        ...sx,
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
          {subtitle}
        </Typography>

        <hr
          style={{
            margin: "7px 0",
            border: "0.5px solid rgba(255, 255, 255, 0.2)",
          }}
        />

        <List>
          {features.map((feature, thing) => (
            <ListItem key={thing.id} disableGutters>
              <ListItemIcon sx={{ color: "#ffffff", minWidth: 28 }}>
                <CheckIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  variant: "body1",
                  sx: { color: "#ffffff" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </ThemeProvider>
);

// ✅ PropTypes
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

// ✅ DefaultProps
InfoCard.defaultProps = {
  bgColor: "linear-gradient(to bottom, #88b04b, #6b8e23)",
  sx: {},
};

export default InfoCard;
