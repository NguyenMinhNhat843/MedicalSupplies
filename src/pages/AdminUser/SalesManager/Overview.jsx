import { Box, Card, Typography, Select, MenuItem } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const data = [
  { time: '1AM', Orders: 200, Revenue: 150 },  { time: '2AM', Orders: 300, Revenue: 220 },
  { time: '3AM', Orders: 280, Revenue: 380 },  { time: '4AM', Orders: 350, Revenue: 200 },
  { time: '5AM', Orders: 150, Revenue: 180 },  { time: '6AM', Orders: 350, Revenue: 280 },
  { time: '7AM', Orders: 300, Revenue: 300 },  { time: '8AM', Orders: 100, Revenue: 100 },
  { time: '9AM', Orders: 120, Revenue: 150 },  { time: '10AM', Orders: 220, Revenue: 300 },
  { time: '11AM', Orders: 200, Revenue: 120 },];
const topProducts = [
  {
    id: 1,
    name: "Photive wireless speakers",
    image: "/path-to-speaker-image.jpg",
    change: 72,
    price: 65,
    sold: 7545,
    sales: 15302.00,
    trending: "down"
  },
  {
    id: 2,
    name: "Topman shoe in green",
    image: "/path-to-shoe-image.jpg",
    change: 69,
    price: 21,
    sold: 6643,
    sales: 12492.21,
    trending: "up"
  },
  {
    id: 3,
    name: "RayBan black sunglasses",
    image: "/path-to-sunglasses-image.jpg",
    change: 65,
    price: 37,
    sold: 5951,
    sales: 10351.71,
    trending: "down"
  }
];

const Overview = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Sales Overview Card */}
      <Card sx={{ p: 3 }}>
        {/* Header */}      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>          <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 500 }}>Sales</Typography>
          <Typography             variant="caption" 
            sx={{               color: 'text.secondary',
              cursor: 'help',              fontSize: '1rem',
              '&:hover': { color: 'primary.main' }            }}
          >            ⓘ
          </Typography>        </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
          <Select            size="small"
            defaultValue="online"            sx={{ 
              minWidth: 120,              '.MuiSelect-select': { py: 1 }
            }}          >
            <MenuItem value="online">Online store</MenuItem>            <MenuItem value="retail">Retail store</MenuItem>
          </Select>
          <Box sx={{             border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: 1,            px: 2,
            py: 1,            display: 'flex',
            alignItems: 'center',            color: 'text.secondary'
          }}>            Feb 20 - Mar 21, 2025
          </Box>        </Box>
        </Box>
        {/* Chart */}      <Box sx={{ height: 300, mb: 3 }}>
          <ResponsiveContainer width="100%" height="100%">          <BarChart data={data} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />            <XAxis 
              dataKey="time"               axisLine={false}
              tickLine={false}              tick={{ fill: '#666' }}
            />            <YAxis 
              axisLine={false}              tickLine={false}
              tick={{ fill: '#666' }}            />
            <Tooltip />            <Bar dataKey="Revenue" fill="#e0e0e0" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Orders" fill="#2196f3" radius={[2, 2, 0, 0]} />          </BarChart>
          </ResponsiveContainer>      </Box>
        {/* Stats */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>        <Box>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 500 }}>$97,458.20</Typography>          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography               sx={{ 
                color: 'success.main',                display: 'flex',
                alignItems: 'center'              }}
            >              ↑ $2,401.02
            </Typography>            <Typography color="text.secondary">(3.7%)</Typography>
          </Box>          <Typography color="text.secondary" sx={{ mt: 1 }}>REVENUE</Typography>
        </Box>
        <Box>          <Typography variant="h4" sx={{ mb: 1, fontWeight: 500 }}>67,893</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>            <Typography 
              sx={{                 color: 'success.main',
                display: 'flex',                alignItems: 'center'
              }}            >
              ↑ +3,301            </Typography>
            <Typography color="text.secondary">(1.2%)</Typography>          </Box>
          <Typography color="text.secondary" sx={{ mt: 1 }}>ORDERS</Typography>        </Box>
      </Box>    </Card>

      {/* Top Products Card */}
      <Card sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
            Top products
          </Typography>
          <Typography 
            sx={{ 
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            View all
          </Typography>
        </Box>

        {/* Table Header */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '50% 15% 10% 10% 15%',
          py: 1,
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          color: 'text.secondary',
          fontSize: '0.875rem'
        }}>
          <Typography>ITEM</Typography>
          <Typography>CHANGE</Typography>
          <Typography>PRICE</Typography>
          <Typography>SOLD</Typography>
          <Typography>SALES</Typography>
        </Box>

        {/* Table Body */}
        {topProducts.map((product) => (
          <Box key={product.id} sx={{ 
            display: 'grid', 
            gridTemplateColumns: '50% 15% 10% 10% 15%',
            py: 2,
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            alignItems: 'center',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.02)' }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box 
                component="img" 
                src={product.image} 
                sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 1,
                  bgcolor: 'rgba(0, 0, 0, 0.04)'
                }} 
              />
              <Typography sx={{ fontWeight: 500 }}>{product.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography 
                sx={{ 
                  color: product.trending === 'up' ? 'success.main' : 'error.main',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {product.trending === 'up' ? '↑' : '↓'} {product.change}%
              </Typography>
            </Box>
            <Typography>${product.price}</Typography>
            <Typography>{product.sold.toLocaleString()}</Typography>
            <Typography sx={{ fontWeight: 500 }}>${product.sales.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Typography>
          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default Overview;




































































