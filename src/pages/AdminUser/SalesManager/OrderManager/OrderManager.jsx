import { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Button,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  Search as SearchIcon,
  Print as PrintIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';
import ReturnOrder from './ReturnOrder';

const OrderManager = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showReturnForm, setShowReturnForm] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
    setShowReturnForm(false);
  };

  const handleReturnClick = () => {
    setShowReturnForm(true);
  };

  const handlePrintInvoice = (orderId) => {
    // TODO: Implement print invoice logic
    console.log('Printing invoice for order:', orderId);
  };

  const handleSendEmail = (orderId) => {
    // TODO: Implement send email logic
    console.log('Sending email for order:', orderId);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <TextField
          placeholder="Tìm kiếm đơn hàng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <IconButton onClick={() => handlePrintInvoice(selectedOrder?.id)} disabled={!selectedOrder}>
            <PrintIcon />
          </IconButton>
          <IconButton onClick={() => handleSendEmail(selectedOrder?.id)} disabled={!selectedOrder}>
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Tất cả" />
        <Tab label="Đơn mới" />
        <Tab label="Đang xử lý" />
        <Tab label="Hoàn thành" />
        <Tab label="Đã hủy" />
      </Tabs>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <OrderList 
            tabValue={tabValue}
            searchTerm={searchTerm}
            onOrderSelect={handleOrderSelect}
          />
        </Box>
        <Box sx={{ width: '400px' }}>
          {showReturnForm ? (
            <ReturnOrder 
              order={selectedOrder}
              onClose={() => setShowReturnForm(false)}
            />
          ) : (
            selectedOrder && (
              <OrderDetails 
                order={selectedOrder}
                onReturnClick={handleReturnClick}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderManager;