// TODO: make moving of paid automatic upon clicking checkmark icon
import { IconButton } from '@mui/material';
import { RemoveDone } from '@mui/icons-material';

function MoveAllPaid({ moveAllPaid }) {
    return (  
        <IconButton variant="contained" color="primary" onClick={moveAllPaid}>
            <RemoveDone color="primary">
            </RemoveDone>
        </IconButton>
    );
}

export default MoveAllPaid;