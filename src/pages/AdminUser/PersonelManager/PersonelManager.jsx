import { useState } from 'react';
import {   Box, 
  Button,  TextField,
  InputAdornment,  FormControl,
  Select,  MenuItem,
  InputLabel,  Dialog,
} from '@mui/material';import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';
import StaffList from './StaffList';import StaffDetails from './StaffDetails';
import StaffForm from './StaffForm';import ActivityLog from './ActivityLog';
const PersonelManager = () => {
  const [searchTerm, setSearchTerm] = useState('');  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState(null);  const [openDialog, setOpenDialog] = useState(false);
  const [showActivityLog, setShowActivityLog] = useState(false);
  const handleStaffSelect = (staff) => {    setSelectedStaff(staff);
    setShowActivityLog(false);  };
  const handleViewActivity = () => {
    setShowActivityLog(true);  };
  return (
    <Box sx={{ p: 3 }}>      {/* Toolbar */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>        <Button
          variant="contained"          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}        >
          Thêm nhân viên        </Button>
        <TextField          placeholder="Tìm kiếm nhân viên..."
          value={searchTerm}          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}          InputProps={{
            startAdornment: (              <InputAdornment position="start">
                <SearchIcon />              </InputAdornment>
            ),          }}
        />        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Vai trò</InputLabel>          <Select
            value={roleFilter}            onChange={(e) => setRoleFilter(e.target.value)}
            label="Vai trò"          >
            <MenuItem value="all">Tất cả</MenuItem>            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="sales">Nhân viên bán hàng</MenuItem>          </Select>
        </FormControl>      </Box>
      {/* Main content */}
      <Box sx={{ display: 'flex', gap: 2 }}>        <Box sx={{ flex: 1 }}>
          <StaffList             searchTerm={searchTerm}
            roleFilter={roleFilter}            onStaffSelect={handleStaffSelect}
          />        </Box>
        {selectedStaff && (          <Box sx={{ width: '400px' }}>
            {showActivityLog ? (              <ActivityLog 
                staffId={selectedStaff.id}                onBack={() => setShowActivityLog(false)}
              />            ) : (
              <StaffDetails                 staff={selectedStaff}
                onViewActivity={handleViewActivity}              />
            )}          </Box>
        )}      </Box>
      {/* Add/Edit Staff Dialog */}
      <Dialog         open={openDialog} 
        onClose={() => setOpenDialog(false)}        maxWidth="sm"
        fullWidth      >
        <StaffForm           onClose={() => setOpenDialog(false)}
          staff={selectedStaff}        />
      </Dialog>    </Box>
  );};

export default PersonelManager;


























































