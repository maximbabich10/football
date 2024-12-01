import React, { useState, useEffect } from "react";
import { Player, players } from "../constants/players";
import FootballField from "../features/FootballField";
import { zones } from "../constants/zones";
import './_lineup.scss';

const LineUpPage: React.FC = () => {
  const [playersOnField, setPlayersOnField] = useState<Player[]>([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("playersOnField");
    if (savedPlayers) {
      setPlayersOnField(JSON.parse(savedPlayers));
    } else {
      localStorage.setItem("playersOnField", JSON.stringify([]));
    }
  }, []);

  const handleDrop = (
    player: Player,
    zoneId: number,
    left: string,
    bottom: string
  ) => {
    const updatedPlayer = { ...player, zoneId, left, bottom };

    setPlayersOnField((prev) => {
      const playerOnField = prev.find((p) => p.id === player.id);

      if (playerOnField) {
        const updatedPlayers = prev.map((p) =>
          p.id === player.id
            ? updatedPlayer
            : p.zoneId === zoneId
            ? {
                ...p,
                zoneId: playerOnField.zoneId,
                left: playerOnField.left,
                bottom: playerOnField.bottom,
              }
            : p
        );

        localStorage.setItem("playersOnField", JSON.stringify(updatedPlayers));
        return updatedPlayers;
      }

      const updatedPlayers = [...prev, updatedPlayer];

      localStorage.setItem("playersOnField", JSON.stringify(updatedPlayers));
      return updatedPlayers;
    });
  };

  return (
    <div className="lineup-page">
      <div className="header">
        <h1>Барселона 2012</h1>
        <h1>Схема 4-3-3</h1>
      </div>

      <div className="content">
        <div className="players-grid">
          {players.slice(0, 11).map((player) => (
            <div
              key={player.id}
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("playerId", player.id.toString())
              }
              className="player-card"
            >
              <img src={player.photo} alt={player.firstName} />
              <span>
                {player.number} {player.firstName} {player.lastName}
              </span>
            </div>
          ))}
        </div>

        <FootballField
          playersOnField={playersOnField}
          handleDrop={handleDrop}
          zones={zones}
        />
      </div>
    </div>
  );
};

export default LineUpPage;
