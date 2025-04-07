import {
  Box,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const StaffDetails = ({ staff, onViewActivity }) => {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Thông tin nhân viên
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Thông tin cá nhân</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography>Tên: {staff.name}</Typography>
          <Typography>Email: {staff.email}</Typography>
          <Typography>SĐT: {staff.phone}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Thông tin tài khoản</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography>Vai trò: {staff.role === 'admin' ? 'Admin' : 'Nhân viên bán hàng'}</Typography>
          <Typography>Trạng thái: {staff.status === 'active' ? 'Đang hoạt động' : 'Đã khóa'}</Typography>
          <Typography>Hoạt động cuối: {new Date(staff.lastActive).toLocaleString('vi-VN')}</Typography>
        </Box>
      </Box>

      <Button 
        variant="outlined" 
        fullWidth 
        onClick={onViewActivity}
        sx={{ mt: 2 }}
      >
        Xem nhật ký hoạt động
      </Button>
    </Box>
  );
};

export default StaffDetails;
