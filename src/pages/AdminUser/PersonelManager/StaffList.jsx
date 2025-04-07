import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { useState } from 'react';

const StaffList = ({ searchTerm, roleFilter, onStaffSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // Mock data - thay thế bằng API call
  const staffList = [
    {
      id: 'NV001',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@email.com',
      phone: '0123456789',
      role: 'admin',
      status: 'active',
      lastActive: '2024-02-25T10:30:00',
    },
    // Thêm data nhân viên khác...
  ];

  const handleMenuOpen = (event, staffId) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(staffId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const getRoleColor = (role) => {
    return role === 'admin' ? 'error' : 'primary';
  };

  const getRoleText = (role) => {
    return role === 'admin' ? 'Admin' : 'Nhân viên bán hàng';
  };

  const filteredStaff = staffList.filter(staff => {
    const matchesSearch = (
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.phone.includes(searchTerm)
    );
    
    if (roleFilter === 'all') return matchesSearch;
    return matchesSearch && staff.role === roleFilter;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã NV</TableCell>
            <TableCell>Tên nhân viên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Vai trò</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Hoạt động cuối</TableCell>
            <TableCell align="right">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStaff.map((staff) => (
            <TableRow 
              key={staff.id}
              hover
              onClick={() => onStaffSelect(staff)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{staff.id}</TableCell>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>
                <Chip 
                  label={getRoleText(staff.role)}
                  color={getRoleColor(staff.role)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label={staff.status === 'active' ? 'Đang hoạt động' : 'Đã khóa'}
                  color={staff.status === 'active' ? 'success' : 'default'}
                  size="small"
                />
              </TableCell>
              <TableCell>
                {new Date(staff.lastActive).toLocaleString('vi-VN')}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuOpen(e, staff.id);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Chỉnh sửa</MenuItem>
        <MenuItem onClick={handleMenuClose}>Đổi mật khẩu</MenuItem>
        <MenuItem onClick={handleMenuClose}>
          {selectedId && staffList.find(s => s.id === selectedId)?.status === 'active' 
            ? 'Khóa tài khoản' 
            : 'Mở khóa tài khoản'
          }
        </MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default StaffList;