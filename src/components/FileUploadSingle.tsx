import React, { ChangeEvent, useState } from 'react'

interface Props {
  handleUploadFile: (event: any) => void
}

const FileUploadSingle: React.FunctionComponent<Props> = ({ handleUploadFile }) => {
  const [file, setFile] = useState<File>()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      setFile(e.target.files[0])
    }
  }

  const handleUploadClick = async (): Promise<void> => {
    if (file == null) {
      return
    }
    console.log('here')
    handleUploadFile(JSON.parse(await file.text()))
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file != null && `${file.name} - ${file.type}`}</div>

      <button
        onClick={() => {
          void handleUploadClick()
        }}>
        Upload
      </button>
    </div>
  )
}

export default FileUploadSingle
