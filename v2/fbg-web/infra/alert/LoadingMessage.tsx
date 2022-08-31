import MessagePage from "fbg-web/infra/alert/MessagePage";
import { useTranslation } from "next-i18next";
export function LoadingMessage() {
  const { t } = useTranslation("LoadingMessage");
  return <MessagePage type="loading" message={t("loading")} />;
}
