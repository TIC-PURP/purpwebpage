import Contenedor from "components/Contenedor";
import { Grid, Container } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
// Routes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import footerRoutes from "../../routes_ZH/footer.routes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes_ZH/routes";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};

function AvisoPrivacidad() {
  return (
    <Contenedor bgColor="white">
      <Contenedor>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <ThemeProvider theme={theme}>
            <TextSection
              variant="h2"
              sx={{ color: "#5B524D" }}
              textAlign="center"
              justify="center"
              mt={15}
              mb={6}
            >
              PURP, S.A. DE C.V.
            </TextSection>
          </ThemeProvider>
        </Grid>
        <Container>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mb={1}>
            1. 控制器數據
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            PURP, S.A DE C.V.（以下簡稱「控制者」）負責收集您的個人資料、其使用及其保護，地址為
            Carretera Internacional México 15, Km. 148 número 2,856 C.P. 81030, Colonia Zona
            Industrial, Guasave, Sinaloa.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            如何聯絡我們：
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              • Carretera Internacional México 15, Km. 148 número 2,856 C.P. 81030, Colonia Zona
              Industrial, Guasave, Sinaloa.
              <br />
              • 電子郵件: purp@purp.com.mx
              <br />• 電話: (687) 872 4548
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            2. 個人資料
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              控制者將透過 (i)
              直接、這是透過電子、光學、聲音、視覺手段或任何其他技術，如郵政郵件、互聯網或電話(ii)
              間接地、透過法律允許的其他來源，透過公開訪問的來源或傳輸； (iii)
              親自透過您的代理人或發起人（當您親自提供兩者的實際存在時）。此類個人資料可能包括以下全部或部分內容:
              <br />
              • 識別資料：
              全名、地址、家庭、手機及/或工作電話號碼、性別、國籍、出生日期、職業或專業、婚姻狀況.
              <br /> • 控制者不會收集或處理敏感的個人資料。
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            3. 處理個人資料的目的。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              控制者將僅根據本隱私權聲明的條款處理您的個人資料。您提供給我們的個人資料將用於以下必要目的，並在控制者與您（作為個人資料所有者）之間建立合約關係。
              <br />
              • 提供您所需的服務和產品；
              <br /> •
              告知與客戶簽訂合約或購買的產品或服務相關的產品或服務的變更；履行我們的專業義務；
              <br />• 有效且專業地遵守我們所要求的服務和所購買產品的品質的承諾。
              <br />
              • 評估所提供的服務和產品的品質。
              <br /> • 對消費者習慣進行內部研究。
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            4. 個人資料的傳輸。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            控制者要求在墨西哥共和國境內甚至境外提供服務和產品所需的範圍內轉移您的個人資料。控制者承諾確保遵守有關個人資料傳輸的法律保護原則。同樣，您承諾確保我們以及責任方企業集團旗下的任何公司始終尊重本隱私權聲明。我們承諾，未經您的同意，不會將您的個人資訊傳輸給第三方，《聯邦私人資料保護法》第
            37 條規定的例外情況除外，並根據既定條款進行此傳輸。根據該法律。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            5. 個人資料的使用或揭露的限制。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            您可以透過撥打特護病房電話號碼來限制資料的使用或揭露，以停止接收有關控制者產品和服務的促銷、訊息、優惠和廣告。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            6. 行使 ARCO 權利的方式。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            根據《聯邦保護私人當事人持有的個人資料法》及其條例，您或透過法定代表人有權存取我們擁有的您的個人資料及其處理細節，並對其進行糾正如果它們不准確或不完整，當它們對於證明其獲取合理的目的而言過多或不必要時將其取消，或反對為特定目的進行處理。行使上述權利的機制是透過提出行使
            ARCO
            權利的請求（「請求」）來實現，我們在本隱私權聲明末尾向您提供該請求，您必須下載該請求，由所有者或其法定代表請求並簽署，並將其連同指定的文件發送至電子郵件purp@purp.com.mx，同樣，收到該文件的日期將透過電子郵件傳達。最後，我們通知您，如果您遵守請求中指明的所有要求，我們將在最長
            20（二十）個工作日內（從控制者收到之日起算）給您回复，以便，如果如果合適的話，ARCO
            權利可以透過在答覆傳達之日後15（十五）個工作天內提出請求而生效。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            7. 撤銷同意的方式。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            在處理過程中，您可以隨時撤銷您對資料處理的同意。為此，您必須按照上述程序向個人資料部門發送電子郵件，要求撤銷您的同意。我們請您考慮，如果您希望與控制者的合約關係繼續存在，您將無法撤銷同意。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            8. Cookie 的使用。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            控制者的不同網站是基於 Cookie
            和/或網路信標的管理，允許控制者自動收集個人資料。透過進入並繼續使用互聯網站點，您同意控制者收集和處理您的個人資料。出於操作、技術和安全原因，使用這些技術是必要的。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            9. 隱私權聲明的變更。
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2" mb={6}>
            我們保留隨時修改或更新本隱私權聲明的權利，以因應立法或法理發展、內部政策、提供或提供我們的服務或產品以及市場慣例的新要求。這些修改將透過以下方式傳達：(i)、在我們的辦公室或工作中心發布可見公告(iii)、在我們的網站www.purp.com.mx
            上、(iii) 或我們將透過電子郵件將其發送給您。您已提供給我們。
          </TextSection>
        </Container>
      </Contenedor>
      <Contenedor px={1}>
        <Footer content={footerRoutes} ColorFondo="#494949" />
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
    </Contenedor>
  );
}
export default AvisoPrivacidad;
