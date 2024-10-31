import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ width:'200px',height:'4px','& .MuiSlider-track': {
                    backgroundColor: 'rgba(0, 204, 34, 1)',
                    border:'none',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: 'rgba(139, 139, 139, 1)',
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: 'rgba(0, 204, 34, 1)',
                    border: '2px solid transparent',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 5px white, 0 0 0 7px rgba(0, 204, 34, 1)',
                    },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
