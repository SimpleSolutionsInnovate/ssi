import React from 'react';
import {
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  Button,
  Checkbox,
  styled,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { LoadingButton } from '@mui/lab';

export const renderTextField = (element, fieldProps, error) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  let elementType = element.eType || 'text';
  if (elementType === 'password' && showPassword) {
    elementType = 'text';
  }

  return (
    <TextField
      {...fieldProps}
      type={elementType}
      {...element.mData}
      error={!!error?.type}
      label={element.label}
      helperText={error?.message}
      value={fieldProps.value || ''}
      placeholder={element.placeholder}
      id={element.id}
      InputProps={{
        endAdornment: element.eType === 'password' && (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {element?.mData?.options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.text}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderRadioButton = (element, fieldProps) => {
  return (
    <>
      <FormLabel id="demo-radio-buttons-group-label">{element.label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={fieldProps.value || ''}
        id={element.id}
        {...element.mData}
        {...fieldProps}
      >
        {element.mData?.options?.map((e, id) => {
          return (
            <FormControlLabel
              key={id}
              value={e.value}
              control={<Radio />}
              label={e.label}
            />
          );
        })}
      </RadioGroup>
    </>
  );
};

export const renderAutoComplete = (element, fieldProps) => {
  return (
    <Autocomplete
      disablePortal
      {...fieldProps}
      {...element.mData}
      label={element.label}
      value={fieldProps.value}
      placeholder={element.placeholder}
      id={element.id}
      sx={{ width: 300 }}
      renderInput={(params) => {
        return <TextField {...params} label={element.label} />;
      }}
    />
  );
};

export const renderCheckBox = (element, fieldProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...fieldProps}
          {...element.mData}
          value={fieldProps.value}
          id={element.id}
        />
      }
      label={element.label}
    />
  );
};

export const renderUpload = (element, fieldProps) => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [previewUrl, setPreviewUrl] = React.useState([]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldProps: any
  ) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      const newFileUrls = newFiles.map((file) => URL.createObjectURL(file));

      setPreviewUrl((prev) => [...prev, ...newFileUrls]);
      fieldProps.onChange([...(fieldProps.value || []), ...newFiles]);
    }
  };

  return (
    <>
      <Button
        component="label"
        {...element.mData}
        startIcon={<CloudUploadIcon />}
      >
        {element.label}
        <VisuallyHiddenInput
          type="file"
          accept={element.mData?.accept}
          onChange={(event) => handleFileChange(event, fieldProps)}
        />
      </Button>
      {element.mData?.preview_upload && (
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {previewUrl?.length > 0 &&
            previewUrl.map((e) => (
              <img
                key={e}
                src={e}
                alt="File preview"
                style={{
                  marginTop: '10px',
                  maxWidth: '100px',
                  height: 'auto',
                }}
              />
            ))}
        </div>
      )}
    </>
  );
};

export const renderButtonAndLoadingButton = (element, loadingState) => {
  return loadingState ? (
    <LoadingButton loading {...element.mData}>
      {element.label}
    </LoadingButton>
  ) : (
    <Button {...element.mData} type={element.dType}>
      {element.label}
    </Button>
  );
};
