import {
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const StaffForm = ({ onClose, staff }) => {
  const [formData, setFormData] = useState(staff || {
    name: '',
    email: '',
    phone: '',
    role: 'sales',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement save logic
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <DialogTitle>
        {staff ? 'Chỉnh sửa nhân viên' : 'Thêm nhân viên mới'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
          <TextField
            label="Tên nhân viên"
            fullWidth
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            label="Số điện thoại"
            fullWidth
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <FormControl fullWidth>
            <InputLabel>Vai trò</InputLabel>
            <Select
              value={formData.role}
              label="Vai trò"
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="sales">Nhân viên bán hàng</MenuItem>
            </Select>
          </FormControl>
          {!staff && (
            <TextField
              label="Mật khẩu"
              type="password"
              fullWidth
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button type="submit" variant="contained">
          {staff ? 'Cập nhật' : 'Thêm'}
        </Button>
      </DialogActions>
    </Box>
  );
};

export default StaffForm;