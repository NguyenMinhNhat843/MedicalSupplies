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

const CustomerList = ({ searchTerm, customerType, onCustomerSelect }) => {
  // Mock data - thay thế bằng API call
  const customers = [
    {
      id: 'KH001',
      name: 'Nguyễn Văn A',
      phone: '0123456789',
      email: 'nguyenvana@email.com',
      type: 'vip',
      totalOrders: 25,
      totalSpent: 15000000,
      lastOrder: '2024-02-20',
    },
    // Thêm data khách hàng khác...
  ];

  const getCustomerTypeColor = (type) => {
    const typeColors = {
      vip: 'error',
      regular: 'primary',
      new: 'success'
    };
    return typeColors[type] || 'default';
  };

  const getCustomerTypeText = (type) => {
    const typeText = {
      vip: 'VIP',
      regular: 'Thường xuyên',
      new: 'Mới'
    };
    return typeText[type] || type;
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = (
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (customerType === 'all') return matchesSearch;
    return matchesSearch && customer.type === customerType;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã KH</TableCell>
            <TableCell>Tên khách hàng</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell>Phân loại</TableCell>
            <TableCell>Tổng đơn</TableCell>
            <TableCell>Tổng chi tiêu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow 
              key={customer.id}
              hover
              onClick={() => onCustomerSelect(customer)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>
                <Chip 
                  label={getCustomerTypeText(customer.type)}
                  color={getCustomerTypeColor(customer.type)}
                  size="small"
                />
              </TableCell>
              <TableCell>{customer.totalOrders}</TableCell>
              <TableCell>{customer.totalSpent.toLocaleString()}đ</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;