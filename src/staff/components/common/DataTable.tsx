/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import { Card, CardContent, Menu, MenuItem, Modal, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IconButton, Button, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export interface Column {
  field: string;
  headerName: string;
  type?: 'text' | 'number' | 'date' | 'select' | 'avatar';
  width?: number;
  options?: { value: string; label: string }[];
    renderCell?: (row:any) => React.ReactNode;
}

export interface DataItem {
  id: string;
  [key: string]: string | number | boolean;
}

export interface DataTableProps {
  title: string;
  description?: string ;
  columns: Column[];
  data: DataItem[];
  onAdd: (data: Omit<DataItem, 'id'>) => void;
  onEdit: (id: string, data: Omit<DataItem, 'id'>) => void;
  onDelete: (id: string) => void;
  onView?: (id: string) => void;
  statusOptions?: { value: string; label: string; color: string }[];
  addButtonText?: string;
  viewPath?: string;
}

const DataTable: FC<DataTableProps> = ({
  title,
  columns,
  description,
  data,
  onAdd,
  onEdit,
  onDelete,
  onView,
  statusOptions,
  addButtonText = "Add New",
  viewPath
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuRowId, setMenuRowId] = useState<string | null>(null);
  const [openNewModal, setOpenNewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [editingItem, setEditingItem] = useState<DataItem | null>(null);
  const [itemToDelete, setItemToDelete] = useState<DataItem | null>(null);
  const [formData, setFormData] = useState<Record<string, string | number>>({});

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = () => {
    let filtered = data;
    
    if (selectedDate) {
      filtered = filtered.filter(item => item.date === selectedDate);
    }
    
    if (selectedStatus) {
      filtered = filtered.filter(item => item.status === selectedStatus);
    }
    
    setFilteredData(filtered);
  };

  const handleStatusFilter = (status: string | null) => {
    setSelectedStatus(status);
    if (status) {
      setFilteredData(data.filter(item => item.status === status));
    } else {
      setFilteredData(data);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, rowId: string) => {
    setAnchorEl(event.currentTarget);
    setMenuRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRowId(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: string | number }> | SelectChangeEvent<string | number>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddClick = () => {
    setFormData({});
    setOpenNewModal(true);
  };

  const handleEditClick = (item: DataItem) => {
    setEditingItem(item);
    setFormData(item as Record<string, string| number>);
    setOpenEditModal(true);
    handleMenuClose();
  };

  const handleDeleteClick = (item: DataItem) => {
    setItemToDelete(item);
    setOpenDeleteConfirmModal(true);
    handleMenuClose();
  };

  const handleSaveNew = () => {
    onAdd(formData as Omit<DataItem, 'id'>);
    setOpenNewModal(false);
    setFormData({});
  };

  const handleSaveEdit = () => {
    if (editingItem) {
      onEdit(editingItem.id, formData as Omit<DataItem, 'id'>);
      setOpenEditModal(false);
      setEditingItem(null);
      setFormData({});
    }
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      onDelete(itemToDelete.id);
      setOpenDeleteConfirmModal(false);
      setShowSuccessModal(true);
      setItemToDelete(null);
    }
  };

  const renderFormFields = () => {
    return columns.map((column) => {
      if (column.type === 'select') {
        return (
          <FormControl key={column.field} fullWidth required>
            <InputLabel>{column.headerName}</InputLabel>
            <Select
              name={column.field}
              value={formData[column.field] || ''}
              onChange={(event: SelectChangeEvent<string | number>) => handleFormChange(event)}
              label={column.headerName}
            >
              {column.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }

      return (
        <TextField
          key={column.field}
          label={column.headerName}
          name={column.field}
          type={column.type === 'date' ? 'date' : column.type === 'number' ? 'number' : 'text'}
          value={formData[column.field] || ''}
          onChange={handleFormChange}
          fullWidth
          required
          InputLabelProps={column.type === 'date' ? { shrink: true } : undefined}
        />
      );
    });
  };

  const renderCell = (item: DataItem, column: Column) => {
    if (column.type === 'avatar') {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, fontSize: 16, bgcolor: '#E0E0E0', color: '#222', fontWeight: 700 }}>
            {String(item[column.field]).split(' ').map((n: string) => n[0]).join('').slice(0,2).toUpperCase()}
          </Avatar>
          <span>{item[column.field]}</span>
        </Box>
      );
    }

    if (column.field === 'status' && statusOptions) {
      const status = statusOptions.find(opt => opt.value === item[column.field]);
      return status ? (
        <Chip 
          label={status.label} 
          size="small" 
          sx={{ 
            bgcolor: status.color + '20', 
            color: status.color, 
            fontWeight: 600 
          }} 
        />
      ) : null;
    }

    return item[column.field];
  };

  return (
    <>
      {/* Add New Button */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleAddClick}
          sx={{
            bgcolor: '#0118D8',
            color: '#fff',
            '&:hover': {
              bgcolor: '#011188'
            },
            textTransform: 'none',
            px: 3,
            height: '43px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600
          }}
          startIcon={<AddSharpIcon />}
        >
          {addButtonText}
        </Button>
      </Box>

      <Card sx={{ 
        bgcolor: isDarkMode ? 'rgb(18, 24, 57)' : '#fff',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        borderRadius: 2,
        width:'100%'
      }}>
        <CardContent>
          {/* Tabs & Filter */}
          {statusOptions && (
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2, 
              color: isDarkMode ? '#A0AEC0' : 'text.secondary',
              fontSize: '14px',
              fontWeight: 600,
              alignItems: 'center',
              mb: 4,
              pl: { xs: 2, sm: 4 }
            }}>
              <Typography 
                sx={{ 
                  cursor: 'pointer',
                  color: !selectedStatus ? '#0118D8' : 'inherit',
                  borderBottom: !selectedStatus ? '2px solid #0118D8' : 'none',
                  pb: 1
                }}
                onClick={() => handleStatusFilter(null)}
              >
                All
              </Typography>
              {statusOptions.map((status) => (
                <Typography 
                  key={status.value}
                  sx={{ 
                    cursor: 'pointer',
                    color: selectedStatus === status.value ? '#0118D8' : 'inherit',
                    borderBottom: selectedStatus === status.value ? '2px solid #0118D8' : 'none',
                    pb: 1
                  }}
                  onClick={() => handleStatusFilter(status.value)}
                >
                  {status.label}
                </Typography>
              ))}

              <Box sx={{ 
                ml: 'auto', 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                gap: 2 
              }}>
                <CalendarMonthIcon sx={{ color: 'success.main' }} />
                <TextField
                  type="date"
                  size="small"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  sx={{ 
                    minWidth: '160px',
                    '& .MuiInputBase-root': {
                      bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
                      color: isDarkMode ? '#fff' : 'inherit'
                    }
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FilterListIcon />}
                  onClick={handleFilter}
                  sx={{ 
                    textTransform: 'none', 
                    bgcolor: '#0118D8',
                    '&:hover': {
                      bgcolor: '#011188'
                    }
                  }}
                >
                  Filter
                </Button>
              </Box>
            </Box>
          )}

          {/* Table */}
          <Table>
            <TableHead>
              <TableRow sx={{ 
                bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
                borderBottom: '2px solid #E0E0E0'
              }}>
                {columns.map((column) => (
                  <TableCell 
                    key={column.field}
                    sx={{ 
                      fontWeight: 700, 
                      color: isDarkMode ? '#fff' : '#222',
                      width: column.width
                    }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
                <TableCell sx={{ fontWeight: 700, color: isDarkMode ? '#fff' : '#222' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow 
                  key={item.id} 
                  sx={{
                    '&:not(:last-child)': {
                      borderBottom: '1px solid #E0E0E0',
                    },
                    '& td': {
                      borderBottom: 'none',
                      py: 2,
                      color: isDarkMode ? '#fff' : '#222',
                      fontSize: 15,
                    },
                    bgcolor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#fff',
                    '&:hover': {
                      bgcolor: isDarkMode ? 'rgba(255,255,255,0.04)' : '#F7F9FB',
                    }
                  }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.field}>
                      {renderCell(item, column)}
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton
                      onClick={(e) => handleMenuOpen(e, item.id)}
                      sx={{ color: isDarkMode ? '#fff' : '#333' }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && menuRowId === item.id}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                      PaperProps={{
                        sx: { minWidth: 180, boxShadow: 3, borderRadius: 2, p: 1 }
                      }}
                    >
                      {onView && (
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            if (viewPath) {
                              navigate(`${viewPath}/${item.id}`);
                            } else {
                              onView(item.id);
                            }
                          }}
                          sx={{ gap: 1 }}
                        >
                          <VisibilityOutlinedIcon fontSize="small" />
                          View Details
                        </MenuItem>
                      )}
                      <MenuItem onClick={() => handleEditClick(item)} sx={{ gap: 1 }}>
                        <EditOutlinedIcon fontSize="small" />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleDeleteClick(item)} sx={{ color: '#EB5757', gap: 1 }}>
                        <DeleteOutlineOutlinedIcon fontSize="small" />
                        Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* New Item Modal */}
      <Modal
        open={openNewModal}
        onClose={() => {
          setOpenNewModal(false);
          setFormData({});
        }}
        aria-labelledby="new-item-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              {addButtonText}
            </Typography>
            <IconButton 
              onClick={() => {
                setOpenNewModal(false);
                setFormData({});
              }} 
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {renderFormFields()}
            <Button
              variant="contained"
              onClick={handleSaveNew}
              sx={{
                mt: 2,
                bgcolor: '#0118D8',
                '&:hover': {
                  bgcolor: '#011188'
                }
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
          setEditingItem(null);
          setFormData({});
        }}
        aria-labelledby="edit-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              Edit {title}
            </Typography>
            <IconButton 
              onClick={() => {
                setOpenEditModal(false);
                setEditingItem(null);
                setFormData({});
              }} 
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {renderFormFields()}
            <Button
              variant="contained"
              onClick={handleSaveEdit}
              sx={{
                mt: 2,
                bgcolor: '#0118D8',
                '&:hover': {
                  bgcolor: '#011188'
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        open={openDeleteConfirmModal}
        onClose={() => {
          setOpenDeleteConfirmModal(false);
          setItemToDelete(null);
        }}
        aria-labelledby="delete-confirm-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" component="h2">
              Delete {title}
            </Typography>
            <IconButton 
              onClick={() => {
                setOpenDeleteConfirmModal(false);
                setItemToDelete(null);
              }} 
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography sx={{ mb: 3 }}>
            Are you sure you want to delete this {title.toLowerCase()}? This action cannot be undone.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenDeleteConfirmModal(false);
                setItemToDelete(null);
              }}
              sx={{
                borderColor: '#0118D8',
                color: '#0118D8',
                '&:hover': {
                  borderColor: '#011188',
                  bgcolor: 'rgba(1, 24, 216, 0.04)'
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirmDelete}
              sx={{
                bgcolor: '#EB5757',
                '&:hover': {
                  bgcolor: '#D32F2F'
                }
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        aria-labelledby="success-modal"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}>
          <CheckCircleOutlineIcon 
            sx={{ 
              fontSize: 60, 
              color: '#219653',
              mb: 2
            }} 
          />
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            {title} Deleted Successfully
          </Typography>
          <Button
            variant="contained"
            onClick={() => setShowSuccessModal(false)}
            sx={{
              bgcolor: '#219653',
              '&:hover': {
                bgcolor: '#1B7A45'
              }
            }}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default DataTable; 