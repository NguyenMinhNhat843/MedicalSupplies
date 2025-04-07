import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import {
  AttachMoney,
  ShoppingCart,
  People,
  Inventory,
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';

// Mock data
const revenueData = [
  { date: '01/03', revenue: 5000000 },
  { date: '02/03', revenue: 7000000 },
  { date: '03/03', revenue: 6500000 },
  { date: '04/03', revenue: 8000000 },
  { date: '05/03', revenue: 7500000 },
  { date: '06/03', revenue: 9000000 },
  { date: '07/03', revenue: 8500000 },
];

function formatMoney(amount) {
  return new Intl.NumberFormat('vi-VN', { 
    style: 'currency', 
    currency: 'VND' 
  }).format(amount);
}

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    {
      title: "TỔNG DOANH THU",
      value: formatMoney(125000000),
      trend: "+12.5%",
      icon: <AttachMoney sx={{ color: '#fff' }}/>,
      color: "#10B981"
    },
    {
      title: "ĐƠN HÀNG",
      value: "156",
      trend: "+5.2%",
      icon: <ShoppingCart sx={{ color: '#fff' }}/>,
      color: "#3B82F6"
    },
    {
      title: "KHÁCH HÀNG",
      value: "2,450",
      trend: "+3.1%",
      icon: <People sx={{ color: '#fff' }}/>,
      color: "#6366F1"
    },
    {
      title: "SẢN PHẨM",
      value: "1,250",
      trend: "+2.5%",
      icon: <Inventory sx={{ color: '#fff' }}/>,
      color: "#F59E0B"
    }
  ];

  return (
    <Box sx={{ p: 2, bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', fontSize: '1.2rem' }}>
        Bảng điều khiển
      </Typography>

      {/* Stats Cards */}
      <Grid 
        container 
        spacing={2} 
        sx={{ 
          mb: 3,
          width: '100%',
        }}
      >
        {stats.map((stat, index) => (
          <Grid 
            item 
            key={index}
            sx={{
              width: '224px !important', // Chiều rộng cố định
            }}
          >
            <Card 
              sx={{ 
                boxShadow: '0 1px 3px rgba(0,0,0,0.12)', 
                borderRadius: 2,
                height: '134px', // Chiều cao cố định
                width: '224px', // Chiều rộng cố định
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CardContent 
                sx={{ 
                  p: 2,
                  width: '100%'
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      color="textSecondary" 
                      variant="subtitle2" 
                      sx={{ 
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold', 
                        my: 0.5, 
                        fontSize: '1.25rem'
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: '#10B981', fontSize: 16 }} />
                      <Typography 
                        color="success.main" 
                        variant="body2" 
                        sx={{ 
                          fontSize: '0.75rem',
                          ml: 0.5
                        }}
                      >
                        {stat.trend}
                      </Typography>
                    </Box>
                  </Box>
                  <Box 
                    sx={{ 
                      bgcolor: stat.color,
                      borderRadius: '50%',
                      p: 1,
                      ml: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      flexShrink: 0,
                      '& svg': { fontSize: '1.25rem' }
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Revenue Chart */}
      <Card sx={{ mb: 3, p: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.12)', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>Biểu đồ doanh thu</Typography>
          <Box>
            <Button 
              onClick={() => setTimeRange('day')}
              variant={timeRange === 'day' ? 'contained' : 'outlined'}
              size="small"
              sx={{ mr: 1, fontSize: '0.75rem', py: 0.5 }}
            >
              Ngày
            </Button>
            <Button
              onClick={() => setTimeRange('week')}
              variant={timeRange === 'week' ? 'contained' : 'outlined'}
              size="small"
              sx={{ mr: 1, fontSize: '0.75rem', py: 0.5 }}
            >
              Tuần
            </Button>
            <Button
              onClick={() => setTimeRange('month')}
              variant={timeRange === 'month' ? 'contained' : 'outlined'}
              size="small"
              sx={{ fontSize: '0.75rem', py: 0.5 }}
            >
              Tháng
            </Button>
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              fill="#93C5FD" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
};

export default Dashboard;
