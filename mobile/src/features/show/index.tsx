import { ScreenContainer } from "../../shared/components";
import { SuccessCard, SuccessHeader } from "./components";

type ShowScreenProps = {
  ownerName: string;
  city: string;
  onBackHome: () => void;
  onGoDashboard: () => void;
};

export function ShowScreen({
  ownerName,
  city,
  onBackHome,
  onGoDashboard,
}: ShowScreenProps) {
  return (
    <ScreenContainer>
      <SuccessHeader onBackHome={onBackHome} />
      <SuccessCard
        ownerName={ownerName || "Sebastiao Rodrigo"}
        city={city || "Aparecida de Goiania - GO"}
        onGoDashboard={onGoDashboard}
      />
    </ScreenContainer>
  );
}
