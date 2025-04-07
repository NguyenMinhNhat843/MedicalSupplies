import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

const ReturnOrder = ({ order, onClose }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [reason, setReason] = useState('');

  const handleItemSelect = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleSubmit = () => {
    const returnData = {
      orderId: order.id,
      items: Object.entries(selectedItems)
        .filter(([_, isSelected]) => isSelected)
        .map(([itemId]) => itemId),
      reason
    };
    // TODO: Call API to process return
    console.log('Return data:', returnData);
    onClose();
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Xử lý hoàn trả - Đơn hàng #{order.id}
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Chọn sản phẩm hoàn trả
      </Typography>
      <List>
        {order.items.map((item) => (
          <ListItem key={item.id} sx={{ py: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!selectedItems[item.id]}
                  onChange={() => handleItemSelect(item.id)}
                />
              }
              label={
                <ListItemText
                  primary={item.name}
                  secondary={`Số lượng: ${item.quantity}`}
                />
              }
            />
          </ListItem>
        ))}
      </List>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Lý do hoàn trả"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        sx={{ mt: 2 }}
      />

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!Object.values(selectedItems).some(Boolean) || !reason}
        >
          Xác nhận hoàn trả
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Hủy
        </Button>
      </Box>
    </Box>
  );
};

export default ReturnOrder;