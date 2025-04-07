import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Overview from './Overview';
import OrderManager from './OrderManager/OrderManager';
import ProductList from './ProductManager/ProductList';

const SalesManager = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tab label="Tổng quan" />
        <Tab label="Quản lí đơn hàng" />
        <Tab label="Quản lí sản phẩm" />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && <OrderManager />}
        {activeTab === 2 && <ProductList />}
      </Box>
    </Box>
  );
};

export default SalesManager;

