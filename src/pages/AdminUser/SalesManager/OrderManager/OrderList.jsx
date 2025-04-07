import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import formatMoney from '../../../../untils/formatMoney';  

const OrderList = ({ tabValue, searchTerm, onOrderSelect }) => {
  // Mock data - replace with API call
  const orders = [
    {
      id: 'DH001',
      customerName: 'Nguyễn Văn A',
      date: '2024-02-20',
      total: 1500000,
      status: 'new',
      items: [
        { id: 1, name: 'Sản phẩm 1', quantity: 2, price: 500000 },
        { id: 2, name: 'Sản phẩm 2', quantity: 1, price: 500000 },
      ]
    },
    // Add more orders...
  ];

  const getStatusColor = (status) => {
    const statusColors = {
      new: 'info',
      processing: 'warning',
      completed: 'success',
      cancelled: 'error',
      returned: 'default'
    };
    return statusColors[status] || 'default';
  };

  const getStatusText = (status) => {
    const statusText = {
      new: 'Đơn mới',
      processing: 'Đang xử lý',
      completed: 'Hoàn thành',
      cancelled: 'Đã hủy',
      returned: 'Hoàn trả'
    };
    return statusText[status] || status;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = (
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (tabValue === 0) return matchesSearch;
    const statusFilters = ['new', 'processing', 'completed', 'cancelled'];
    return matchesSearch && order.status === statusFilters[tabValue - 1];
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã đơn</TableCell>
            <TableCell>Khách hàng</TableCell>
            <TableCell>Ngày đặt</TableCell>
            <TableCell>Tổng tiền</TableCell>
            <TableCell>Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow 
              key={order.id}
              hover
              onClick={() => onOrderSelect(order)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString('vi-VN')}</TableCell>
              <TableCell>{formatMoney(order.total)}</TableCell>
              <TableCell>
                <Chip 
                  label={getStatusText(order.status)}
                  color={getStatusColor(order.status)}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;