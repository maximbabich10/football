import React from 'react';
import { Tooltip } from 'antd';
import { Player } from '../constants/players';
import './_card.scss';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="card-player-container">
      <Tooltip title={`${player.number} - ${player.firstName} ${player.lastName}`}>
        <div
          className='card-player'
          style={{ backgroundImage: `url(${player.photo})` }}
        />
      </Tooltip>
    </div>
  );
};

export default PlayerCard;
