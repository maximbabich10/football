import React from 'react';
import { Player, players } from '../constants/players';
import { Tooltip } from 'antd'; 
import field from '../assets/field.jpg';
import './_field.scss'; 

interface FootballFieldProps {
  handleDrop: (player: Player, zoneId: number, left: string, bottom: string) => void;
  playersOnField: Player[];
  zones: { id: number; left: string; bottom: string }[];
}

const FootballField: React.FC<FootballFieldProps> = ({ playersOnField, handleDrop, zones }) => {

    const handleDragStart = (e: React.DragEvent, player: Player) => {
        e.dataTransfer.setData('playerId', player.id.toString());
      };

  return (
    <div
      className="football-field"
      style={{ backgroundImage: `url(${field})` }}
    >
   
      {zones.map((zone) => (
        <div
          key={zone.id}
          className="zone"
          style={{ left: zone.left, bottom: zone.bottom }}
          onDrop={(e) => {
            e.preventDefault();
            const playerId = parseInt(e.dataTransfer.getData('playerId'), 10);
            const player = players.find((p) => p.id === playerId);

            if (player) {
              handleDrop(player, zone.id, zone.left, zone.bottom); 
            }
          }}
          onDragOver={(e) => e.preventDefault()} 
        />
      ))}

      {playersOnField.map((player) => (
        <div
          key={player.id}
          className="player-on-field"
          style={{ left: player.left, bottom: player.bottom }}
          draggable
          onDragStart={(e) => handleDragStart(e, player)} 
          onDrop={(e) => {
            e.preventDefault();
            const playerId = parseInt(e.dataTransfer.getData('playerId'), 10);
            const draggedPlayer = players.find((p) => p.id === playerId);
            
            if (draggedPlayer && draggedPlayer.id !== player.id) {
              handleDrop(draggedPlayer, player.zoneId || 0, player.left || '', player.bottom || '');
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Tooltip title={`${player.firstName} ${player.lastName} (№${player.number})`}>
            <div className="player-image">
              <img
                src={player.photo}
                alt={player.firstName}
              />
              <div className="player-number">
                {player.number}
              </div>
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default FootballField;
