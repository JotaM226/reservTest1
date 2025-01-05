import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      {direction === 'left' ? (
        <ArrowBackIosNewIcon
          sx={{
            color: '#4B5320', // Verde militar
            fontSize: '24px',
            opacity: 0.5,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1,
            },
          }}
        />
      ) : (
        <ArrowForwardIosIcon
          sx={{
            color: '#4B5320', // Verde militar
            fontSize: '24px',
            opacity: 0.5,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1,
            },
          }}
        />
      )}
    </div>
  );
};

export default CustomArrow;
