import React, { ChangeEvent, useState } from 'react'
import { CardContainer, FileSelected, CardContentContainer } from './FileUploadDownload.styles'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

interface Props {
  handleUploadFile: (event: any) => void
  handleSaveFile: (event: any) => void
}

const FileUploadDownload: React.FunctionComponent<Props> = ({ handleSaveFile, handleUploadFile }) => {
  const [file, setFile] = useState<File>()
  const [saveName, setSaveName] = useState('')

  const handleChange = (event: any): void => {
    setSaveName(event.target.value)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      setFile(e.target.files[0])
    }
  }

  const handleUploadClick = async (): Promise<void> => {
    if (file == null) {
      return
    }
    handleUploadFile(JSON.parse(await file.text()))
  }

  return (
    <CardContainer>
      <CardContentContainer>
        <Box sx={{ display: 'flex' }}>
          <Button variant="contained" component="label">
            Select File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <FileSelected
            disabled
            id="filled-basic"
            label={file != null && `${file.name} - ${file.type}`}
            variant="filled"
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button
            style={{ minWidth: '100px' }}
            variant="contained"
            onClick={() => {
              void handleUploadClick()
            }}>
            {' '}
            Upload
          </Button>
        </Box>
      </CardContentContainer>
      <CardContentContainer>
        <Box sx={{ display: 'flex' }}>
          <TextField
            style={{ minWidth: '600px' }}
            id="outlined-name"
            label="File Name:"
            value={saveName}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button
            style={{ minWidth: '100px' }}
            variant="contained"
            onClick={() => {
              void handleSaveFile(saveName)
            }}>
            {' '}
            Save
          </Button>
        </Box>
      </CardContentContainer>
    </CardContainer>
  )
}

export default FileUploadDownload
