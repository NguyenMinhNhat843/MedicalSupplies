import {
  Box,
  Typography,
  Button,
  Divider,
  FormControl,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import formatMoney from '../../../../untils/formatMoney';

const OrderDetails = ({ order, onReturnClick }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    // TODO: Call API to update order status
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Chi tiết đơn hàng #{order.id}
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Trạng thái đơn hàng</Typography>
        <FormControl fullWidth size="small" sx={{ mt: 1 }}>
          <Select value={status} onChange={handleStatusChange}>
            <MenuItem value="new">Đơn mới</MenuItem>
            <MenuItem value="processing">Đang xử lý</MenuItem>
            <MenuItem value="completed">Hoàn thành</MenuItem>
            <MenuItem value="cancelled">Đã hủy</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2">Thông tin khách hàng</Typography>
      <Box sx={{ mt: 1 }}>
        <Typography>Tên: {order.customerName}</Typography>
        <Typography>SĐT: {order.phone}</Typography>
        <Typography>Địa chỉ: {order.address}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2">Sản phẩm</Typography>
      <List>
        {order.items.map((item) => (
          <ListItem key={item.id} sx={{ py: 1 }}>
            <ListItemText
              primary={item.name}
              secondary={`${item.quantity} x ${formatMoney(item.price)}`}
            />
            <Typography>{formatMoney(item.quantity * item.price)}</Typography>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Tổng tiền: {formatMoney(order.total)}
        </Typography>
      </Box>

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onReturnClick}
          disabled={status !== 'completed'}
        >
          Xử lý hoàn trả
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetails;