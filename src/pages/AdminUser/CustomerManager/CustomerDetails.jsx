import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import { useState } from 'react';

const CustomerDetails = ({ customer }) => {
  // Mock data lịch sử mua hàng - thay thế bằng API call
  const orderHistory = [
    {
      id: 'DH001',
      date: '2024-02-20',
      total: 1500000,
      status: 'completed'
    },
    // Thêm lịch sử đơn hàng khác...
  ];

  const getOrderStatusText = (status) => {
    const statusText = {
      new: 'Đơn mới',
      processing: 'Đang xử lý',
      completed: 'Hoàn thành',
      cancelled: 'Đã hủy'
    };
    return statusText[status] || status;
  };

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Thông tin khách hàng
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Thông tin liên hệ</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography>Tên: {customer.name}</Typography>
          <Typography>SĐT: {customer.phone}</Typography>
          <Typography>Email: {customer.email}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Thống kê mua hàng</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography>Tổng số đơn: {customer.totalOrders}</Typography>
          <Typography>Tổng chi tiêu: {customer.totalSpent.toLocaleString()}đ</Typography>
          <Typography>Đơn hàng gần nhất: {new Date(customer.lastOrder).toLocaleDateString('vi-VN')}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Lịch sử mua hàng</Typography>
      <List>
        {orderHistory.map((order) => (
          <ListItem key={order.id} sx={{ py: 1 }}>
            <ListItemText
              primary={`Đơn hàng #${order.id}`}
              secondary={new Date(order.date).toLocaleDateString('vi-VN')}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Typography>{order.total.toLocaleString()}đ</Typography>
              <Chip 
                label={getOrderStatusText(order.status)}
                size="small"
                color={order.status === 'completed' ? 'success' : 'default'}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomerDetails;