import GameSection from "../components/GameContent/GameSection";
import { GameProvider } from "../context/GameContext";

function GamePage() {
    return (
        <GameProvider>
            <GameSection />
        </GameProvider>
    );
}

export default GamePage;