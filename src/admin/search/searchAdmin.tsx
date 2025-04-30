import React, { FC, useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: FC = () => {
  const [query, setQuery] = useState<string>('');
  const handelSearch = ()=>{
    console.log('clicked')
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{ marginTop: 2 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            <IconButton onClick={handelSearch}>
              <SearchIcon sx={{ color: '#333',cursor:'pointer' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: 600,
          minWidth: 300,
          '& .MuiOutlinedInput-root': {
            height: '40px',
            borderRadius: '12px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '12px',
            },
          },
        }}
      />

    </Box>
  );
};

export default SearchBar;
