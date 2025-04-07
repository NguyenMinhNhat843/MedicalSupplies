import { 
  Box, 
  Typography, 
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const ActivityLog = ({ staffId, onBack }) => {
  // Mock data - thay thế bằng API call
  const activities = [
    {
      id: 1,
      type: 'login',
      description: 'Đăng nhập vào hệ thống',
      timestamp: '2024-02-25T10:30:00',
    },
    {
      id: 2,
      type: 'order',
      description: 'Tạo đơn hàng #DH001',
      timestamp: '2024-02-25T10:45:00',
    },
    {
      id: 3,
      type: 'customer',
      description: 'Cập nhật thông tin khách hàng KH001',
      timestamp: '2024-02-25T11:15:00',
    },
    // Thêm các hoạt động khác...
  ];

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={onBack} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">
          Nhật ký hoạt động
        </Typography>
      </Box>

      <List>
        {activities.map((activity, index) => (
          <Box key={activity.id}>
            <ListItem>
              <ListItemText
                primary={activity.description}
                secondary={new Date(activity.timestamp).toLocaleString('vi-VN')}
              />
            </ListItem>
            {index < activities.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ActivityLog;