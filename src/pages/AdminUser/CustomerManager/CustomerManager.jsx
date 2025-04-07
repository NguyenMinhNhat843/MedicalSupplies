import { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';

const CustomerManager = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [customerType, setCustomerType] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          placeholder="Tìm kiếm khách hàng..."
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
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Phân loại</InputLabel>
          <Select
            value={customerType}
            onChange={(e) => setCustomerType(e.target.value)}
            label="Phân loại"
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="vip">Khách VIP</MenuItem>
            <MenuItem value="regular">Khách thường xuyên</MenuItem>
            <MenuItem value="new">Khách mới</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <CustomerList 
            searchTerm={searchTerm}
            customerType={customerType}
            onCustomerSelect={handleCustomerSelect}
          />
        </Box>
        {selectedCustomer && (
          <Box sx={{ width: '400px' }}>
            <CustomerDetails customer={selectedCustomer} />
          </Box>
        )}
      </Box>
    </Box>
  );
};


export default CustomerManager;